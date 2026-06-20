import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-slate-800 text-white shadow-lg">

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    DevMatch
                </Link>

                <div className="flex items-center gap-8">

                    <span className="text-sm text-slate-300">
                        Admin Online
                    </span>

                    <Link
                        to="/create"
                        className="bg-white text-slate-800 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition"
                    >
                        Nova Vaga
                    </Link>

                </div>

            </div>

        </nav>
    );
}