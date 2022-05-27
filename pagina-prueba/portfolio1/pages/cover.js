import Image from "next/image";

export default function Cover() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-800 border-2 border-gray-700 rounded-2xl m-20 p-14 flex sm:flex-row flex-col text-center mt-60 shadow-gray-900 shadow-2xl">
      <Image
        src="/fotocurriculum.jpg"
        width="190vh"
        height="190vh"
        className="max-w-auto max-h-auto rounded-full"
      />
      <div className="m-6 flex-col text-center">
        <h1 className="text-2xl text-gray-200 font-bold">Jon Etxebarria Sasia</h1>
        <p className="text-lg text-gray-200 mt-5 text-center">Actualmente estoy cursando el primer curso del grado de informatica en la UPV ehu</p>
      </div>
    </div>
  );
}
