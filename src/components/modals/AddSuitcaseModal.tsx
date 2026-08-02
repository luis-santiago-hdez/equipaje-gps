import { CgCloseR } from "react-icons/cg";

type SuitcaseModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AddSuitcase({ open, onClose }: SuitcaseModalProps) {
  if (!open) return null;
  return (
    <div className="fixed z-[1000] left-1/2 flex flex-col -translate-x-1/2 top-1/2 -translate-y-1/2  mt-6  rounded-lg bg-white shadow-lg text-lg p-2">
      <button type="button" onClick={onClose}>
        <CgCloseR className="w-7 h-7 absolute top-2 right-2" />
      </button>
      <form action="">
        <div className="flex flex-col gap-2 items-center ">
          <p>Agregar maleta:</p>
          <div className="flex flex-col gap-2 ">
            <input
              type="text"
              placeholder="Nombre"
              required
              className="border-b"
            />
            <input
              type="number"
              placeholder="ID"
              required
              className="border-b"
            />
          </div>

          <button className="block px-4 bg-green-400 rounded-xl">
            Agregar dispositivo
          </button>
        </div>
      </form>
    </div>
  );
}
