import Image from "next/image";

export default function Cover() {
  return (
    <div className="border-dashed border-2 border-red-300 rounded-2xl m-20 p-14 sm:flex flex-col justify-center items-center mt-60">
      <Image
        src="/fotocurriculum.jpg"
        width="190vh"
        height="190vh"
        className="m-8 ml-20 max-w-full h-auto rounded-full"
      />
      <div className="mt-0 flex-col text-center">
        <h1 className="text-2xl font-bold">Jon Etxebarria Sasia</h1>
        <p className="text-lg mt-5 text-center">Actualmente estoy cursando el primer curso del grado de informatica en la UPV ehu</p>
      </div>
    </div>
  );
}
