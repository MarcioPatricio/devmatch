import { Link } from "react-router-dom";

export default function JobCard({
    job,
    onDelete,
    onPause,
    onClose,
    onOpen
}) {

    const getStatusColor = () => {

        if (job.status === "OPEN") {
            return "bg-green-100 text-green-700";
        }

        if (job.status === "PAUSED") {
            return "bg-yellow-100 text-yellow-700";
        }

        return "bg-red-100 text-red-700";
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-6 border">

            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-semibold">
                    {job.title}
                </h2>

                <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor()}`}
                >
                    {job.status}
                </span>

            </div>

            <p className="text-gray-600 mt-4">
                {job.description}
            </p>

            <div className="mt-4 space-y-2">

                <p>
                    <strong>Local:</strong> {job.location}
                </p>

                <p>
                    <strong>Salário:</strong> R$ {job.salary}
                </p>

            </div>

            <div className="flex flex-wrap gap-3 mt-6">

                <Link
                    to={`/edit/${job.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Editar
                </Link>

                {job.status === "OPEN" && (
                    <>
                        <button
                            onClick={() => onPause(job.id)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                        >
                            Pausar
                        </button>

                        <button
                            onClick={() => onClose(job.id)}
                            className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                        >
                            Fechar
                        </button>
                    </>
                )}

                {job.status === "PAUSED" && (
                    <>
                        <button
                            onClick={() => onOpen(job.id)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                            Reabrir
                        </button>

                        <button
                            onClick={() => onClose(job.id)}
                            className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                        >
                            Fechar
                        </button>
                    </>
                )}

                {job.status === "CLOSED" && (
                    <button
                        onClick={() => onOpen(job.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        Reabrir
                    </button>
                )}

                <button
                    onClick={() => onDelete(job.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Excluir
                </button>

            </div>

        </div>
    );
}