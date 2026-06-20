export default function DashboardCards({ jobs }) {

    const totalJobs = jobs.length;

    const openJobs = jobs.filter(
        job => job.status === "OPEN"
    ).length;

    const pausedJobs = jobs.filter(
        job => job.status === "PAUSED"
    ).length;

    const closedJobs = jobs.filter(
        job => job.status === "CLOSED"
    ).length;

    return (
        <div className="flex flex-wrap gap-3 mt-6">

            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-gray-500">
                    Total de Vagas
                </h2>

                <p className="text-3xl font-bold">
                    {totalJobs}
                </p>
            </div>

            <div className="bg-green-100 shadow rounded-xl p-6">
                <h2 className="text-green-700">
                    Vagas Abertas
                </h2>

                <p className="text-3xl font-bold">
                    {openJobs}
                </p>
            </div>

            <div className="bg-yellow-100 shadow rounded-xl p-6">
                <h2 className="text-yellow-700">
                    Vagas Pausadas
                </h2>

                <p className="text-3xl font-bold">
                    {pausedJobs}
                </p>
            </div>

            <div className="bg-red-100 shadow rounded-xl p-6">
                <h2 className="text-red-600">
                    Vagas Fechadas
                </h2>

                <p className="text-3xl font-bold">
                    {closedJobs}
                </p>
            </div>
        </div>
    );
}

