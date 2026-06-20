import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function CreateJob() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        requirements: "",
        location: "",
        salary: ""
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await axios.post(
            "http://localhost:8080/api/v1/jobs",
            {
                ...form,
                salary: Number(form.salary)
            }
        );

        navigate("/");

        setForm({
            title: "",
            description: "",
            requirements: "",
            location: "",
            salary: ""
        });
    }

    return (
        <div className="max-w-3xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                Nova Vaga
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    rows="4"
                    required
                />

                <textarea
                    name="requirements"
                    placeholder="Requisitos"
                    value={form.requirements}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    rows="4"
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Localização"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salário"
                    value={form.salary}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <button
                    type="submit"
                    className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700"
                >
                    Salvar Vaga
                </button>

            </form>

        </div>
    );
}