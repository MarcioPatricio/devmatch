import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditJob() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        description: "",
        requirements: "",
        location: "",
        salary: ""
    });

    useEffect(() => {
        loadJob();
    }, []);

    async function loadJob() {

        const response = await axios.get(
            `http://localhost:8080/api/v1/jobs/${id}`
        );

        setJob(response.data);
    }

    async function handleSubmit(e) {

        e.preventDefault();

        await axios.put(
            `http://localhost:8080/api/v1/jobs/${id}`,
            job
        );

        navigate("/");
    }

    return (
        <div className="max-w-3xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                Editar Vaga
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 rounded-xl shadow"
            >

                <input
                    type="text"
                    placeholder="Título"
                    value={job.title}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            title: e.target.value
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <textarea
                    placeholder="Descrição"
                    value={job.description}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            description: e.target.value
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Requisitos"
                    value={job.requirements}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            requirements: e.target.value
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Local"
                    value={job.location}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            location: e.target.value
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    placeholder="Salário"
                    value={job.salary}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            salary: e.target.value
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg"
                >
                    Salvar Alterações
                </button>

            </form>

        </div>
    );
}