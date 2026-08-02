import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuCircleUserRound } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null;
  return (
    <div className="fixed z-[1000] left-1/2 flex flex-col -translate-x-1/2 top-1/2 -translate-y-1/2  mt-6  rounded-lg bg-white shadow-lg text-lg p-2">
      <button type="button" onClick={onClose}>
        <CgCloseR className="w-7 h-7 absolute top-2 right-2" />
      </button>
      <form action="">
        <div className="flex flex-col gap-2 items-center ">
          <LuCircleUserRound className="w-15 h-15" />
          <div className="flex gap-2 border-b p-1">
            <MdOutlineEmail className="w-7 h-7" />
            <input type="email" placeholder="Ingresa tu correo" required />
          </div>
          <div className="flex gap-2 border-b p-1">
            <RiLockPasswordLine className="w-7 h-7" />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div className="flex justify-between gap-6 p-2">
            <label className="flex items-center text-xs gap-1">
              <input type="checkbox" id="check-1" value="checkbox" /> Recordar
              contraseña
            </label>
            <button className="text-xs underline">Olvide mi contraseña</button>
          </div>
          <button className="block px-4 bg-green-400 rounded-xl">
            Iniciar sesion
          </button>
        </div>
      </form>
    </div>
  );
}
