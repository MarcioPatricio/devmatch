import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import DashboardCards from "../components/DashboardCards";
import toast from "react-hot-toast";
import ConfirmModal from "../components/ConfirmModal";

export default function JobList() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);

    useEffect(() => {
        loadJobs();
    }, [page, statusFilter]);

    async function loadJobs() {

        let url = "";

        if (statusFilter === "ALL") {

            url =
                `http://localhost:8080/api/v1/jobs?page=${page}&size=3`;

        } else {

            url =
                `http://localhost:8080/api/v1/jobs/status/${statusFilter}?page=${page}&size=3`;

        }

        const response = await axios.get(url);

        setJobs(response.data.content);
        setTotalPages(response.data.totalPages);
    }

    function filterByStatus(status) {

        setStatusFilter(status);
        setPage(0);
    }

    function deleteJob(id) {

        setSelectedJobId(id);
        setShowModal(true);
    }

    async function confirmDelete() {

        await axios.delete(
            `http://localhost:8080/api/v1/jobs/${selectedJobId}`
        );

        setShowModal(false);
        setSelectedJobId(null);

        toast.success("Vaga excluída com sucesso!");

        loadJobs();
    }

    async function pauseJob(id) {
        await axios.patch(
            `http://localhost:8080/api/v1/jobs/${id}/pause`
        );

        toast.success("Vaga pausada!");

        loadJobs();
    }

    async function closeJob(id) {
        await axios.patch(
            `http://localhost:8080/api/v1/jobs/${id}/close`
        );

        toast.success("Vaga encerrada!");

        loadJobs();
    }

    async function openJob(id) {
        await axios.patch(
            `http://localhost:8080/api/v1/jobs/${id}/open`
        );

        toast.success("Vaga reaberta!");

        loadJobs();
    }

    const filteredJobs = jobs.filter((job) =>
        job.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            <h1 className="text-3xl md:text-4xl font-bold mb-8">
                Vagas Disponíveis
            </h1>

            <DashboardCards jobs={jobs} />

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="🔍 Buscar vaga..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                        w-full
                        p-3
                        rounded-xl
                        border
                        shadow-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">

                <button
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                    className="
                        bg-slate-700
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        disabled:opacity-50
                    "
                >
                    ← Anterior
                </button>

                <span className="font-semibold">
                    Página {page + 1} de {totalPages}
                </span>

                <button
                    disabled={page >= totalPages - 1}
                    onClick={() => setPage(page + 1)}
                    className="
                        bg-slate-700
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        disabled:opacity-50
                    "
                >
                    Próxima →
                </button>

            </div>

            <div className="flex gap-3 mb-8 mt-6 flex-wrap">

                <button
                    onClick={() => filterByStatus("ALL")}
                    className={`
                        px-4 py-2 rounded-lg text-white
                        ${statusFilter === "ALL"
                            ? "bg-slate-800"
                            : "bg-slate-500"}
                    `}
                >
                    Todas
                </button>

                <button
                    onClick={() => filterByStatus("OPEN")}
                    className={`
                        px-4 py-2 rounded-lg text-white
                        ${statusFilter === "OPEN"
                            ? "bg-green-700"
                            : "bg-green-500"}
                    `}
                >
                    Abertas
                </button>

                <button
                    onClick={() => filterByStatus("PAUSED")}
                    className={`
                        px-4 py-2 rounded-lg text-white
                        ${statusFilter === "PAUSED"
                            ? "bg-yellow-700"
                            : "bg-yellow-500"}
                    `}
                >
                    Pausadas
                </button>

                <button
                    onClick={() => filterByStatus("CLOSED")}
                    className={`
                        px-4 py-2 rounded-lg text-white
                        ${statusFilter === "CLOSED"
                            ? "bg-red-700"
                            : "bg-red-500"}
                    `}
                >
                    Fechadas
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onDelete={deleteJob}
                        onPause={pauseJob}
                        onClose={closeJob}
                        onOpen={openJob}
                    />
                ))}
            </div>

            <ConfirmModal
                isOpen={showModal}
                title="Confirmar exclusão"
                message="Deseja realmente excluir esta vaga?"
                onConfirm={confirmDelete}
                onCancel={() => setShowModal(false)}
            />

        </div>
    );
}
