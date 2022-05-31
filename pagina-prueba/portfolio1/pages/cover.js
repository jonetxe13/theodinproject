import Image from "next/image";
import Careto from "../public/fotocurriculum.jpg";

export default function Cover() {
  return (
    <div className="bg-gradient-to-br from-gray-500 to-gray-800 border-2 border-gray-700 rounded-2xl my-20 lg:mx-72 md:mx-32 mx-14 md:py-32 py-12 px-10 flex md:flex-row flex-col text-center shadow-gray-900 shadow-2xl justify-center">
      <div className="w-48 h-auto self-center">
        <Image
          src={Careto}
          width={170}
          height={170}
          layout="responsive"
          className="rounded-full "
        />
      </div>
      <div className="m-6 flex-col text-center">
        <h1 className="text-2xl text-gray-200 font-bold">
          Jon Etxebarria Sasia
        </h1>
        <p className="text-lg text-gray-200 mt-5 text-center">
          Actualmente estoy cursando el primer curso del grado de informatica en
          la UPV ehu
        </p>
      </div>
    </div>
  );
}
