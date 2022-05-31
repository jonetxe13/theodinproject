import { useEffect, useState } from "react";
import Image from "next/image";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}


export default function Header() {
  function HeaderOptions({ text, link }) {
    return (
      <button className="flex-1 hover:shadow-md hover:shadow-gray-800 font-bold text-gray-700 whitespace-nowrap hover:text-white hover:bg-gray-700 rounded-lg md:mx-4 mx-2 hover:cursor-pointer md:p-4 p-3 transition-all active:translate-y-1">
        <a href={link}>{text}</a>
      </button>
    );
  }

  function ClosedOrOpen() {
    const size = useWindowSize();
    if (size.width < 600) {
      return <Image src="/menu.png" height="20px" width="20px" />;
    } else {
      return (
        <>
          <HeaderOptions link="#resumen" text="BLOG" />
          <HeaderOptions text="ABOUT ME" />
          <HeaderOptions text="CONTACT" />
        </>
      );
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-600 flex p-4 shadow-gray-900 shadow-lg">
      <div className="cursor-default bg-gray-700 font-extrabold text-3xl p-4 text-center text-white shadow-md shadow-gray-700 rounded-lg">
        JN
      </div>
      <div className="flex items-center text-right md:ml-auto ml-auto">
        <ClosedOrOpen />
      </div>
    </div>
  );
}
