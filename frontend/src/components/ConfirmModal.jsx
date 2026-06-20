export default function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel
}) {

    if(!isOpen) return null;

    return (
        <div
            className="
                fixed inset-0
                bg-black/50
                flex items-center justify-center
                z-50
            "
        >
            <div
                className="
                    bg-white
                    rounded-2xl
                    p-6
                    w-full
                    max-w-md
                    shadow-xl
                "
            >
                <h2 className="text-2xl font-bold mb-4">
                    {title}
                </h2>

                <p className="text-gray-600 mb-6">
                    {message}
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="
                            px-4 py-2
                            rounded-lg
                            bg-gray-300
                        "
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                            px-4 p-2
                            rounded-lg
                            bg-red-600
                            text-white
                        "
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}