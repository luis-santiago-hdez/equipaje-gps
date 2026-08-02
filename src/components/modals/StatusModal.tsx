import { BsCheck2 } from "react-icons/bs";

type StatusModalProps = {
  status: "loading" | "success";
};

export default function StatusModal({ status }: StatusModalProps) {
  return (
    <div className="fixed inset-0 z-10005 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 shadow-xl w-80 text-center">
        {status === "loading" && (
          <>
            <div className="mx-auto w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4">Creando cuenta...</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-2xl ">
              <BsCheck2 className="w-6 h-6" />
            </div>
            <p className="mt-4 text-gray-700">Registrado correctamente!</p>
          </>
        )}
      </div>
    </div>
  );
}
