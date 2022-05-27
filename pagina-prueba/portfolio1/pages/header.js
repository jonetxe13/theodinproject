export default function Header(){

  function HeaderOptions({text}){
    return (<button className='flex-1 hover:shadow-md hover:shadow-gray-800 font-bold text-gray-700 whitespace-nowrap hover:text-white hover:bg-gray-700 rounded-lg mx-4 hover:cursor-pointer p-4 transition-all active:translate-y-1'>
            {text}
          </button>);
  }  
  // function ToggleShrink(){
  //   if(useEffect(window.innerWidth)<= 400){
  //     return (
  //       <Imagen/>
  //     )
  //   }
  //   else{
  //     return(
  //     )
  //   }
  // }

  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-600 flex p-4 shadow-gray-900 shadow-lg'>
      <div className='cursor-default bg-gray-700 font-extrabold text-3xl p-4 text-center text-white shadow-md shadow-gray-700 rounded-lg'>
        JN
      </div>
      <div className='flex items-center text-right ml-auto '>
        <HeaderOptions text="BLOG"/>
        <HeaderOptions text="ABOUT ME"/>
        <HeaderOptions text="CONTACT"/>
      </div>
    </div>
  )
}
