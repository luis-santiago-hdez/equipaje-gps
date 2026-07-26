import { FcOk } from "react-icons/fc";
import { PiCellSignalFull } from "react-icons/pi";
import { FcFullBattery } from "react-icons/fc";

export default function BateriaStatus() {
  return (
    <section className="flex flex-row border rounded-2xl p-2 justify-between">
      <div className="flex gap-2 items-center">
        <p>Bateria:</p>
        <FcFullBattery className="w-6 h-6" />
      </div>
      <div className="flex gap-2 items-center ">
        <p>Señal:</p>
        <PiCellSignalFull className="w-6 h-6" />
      </div>
      <div className="flex gap-2 items-center">
        <p>Conectado</p>
        <FcOk className="w-6 h-6" />
      </div>
    </section>
  );
}
