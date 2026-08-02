import { LuCircleUserRound } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";

import { useState } from "react";

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
  setStatus: React.Dispatch<
    React.SetStateAction<"idle" | "loading" | "success">
  >;
};

export default function RegisterModal({
  open,
  onClose,
  setStatus,
}: RegisterModalProps) {
  const [showPassword, setSHowPassword] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSHowPassword(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleRegister = async () => {
    if (!name.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      alert("Por favor llena todos los campos.");
      return;
    }

    handleClose(); // <-- CLOSE IMMEDIATELY

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 1500);
    }, 2000);
  };
  if (!open) return null;

  return (
    <div className="fixed z-[10001] left-1/2 flex flex-col -translate-x-1/2 top-1/2 -translate-y-1/2  mt-6  rounded-lg bg-white shadow-lg text-lg p-2">
      <button type="button" onClick={handleClose}>
        <CgCloseR className="w-7 h-7 absolute top-2 right-2" />
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <div className="flex flex-col gap-2 items-center ">
          <LuCircleUserRound className="w-15 h-15" />
          <p>Crea una cuenta:</p>
          <div className="flex flex-col gap-2 ">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b"
            />
            <input
              type="text"
              placeholder="Apellidos"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-b"
            />
            <input
              type="email"
              placeholder="Correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-b"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-b"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs">
              Utiliza ocho caracteres como minimo con una combinacion de letras,
              numeros y simbolos.
            </p>
            <label className="flex items-center text-xs gap-1">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setSHowPassword(e.target.checked)}
                id="check-1"
                value="checkbox"
              />{" "}
              Mostrar contraseña
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-400 text-white rounded"
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
}
