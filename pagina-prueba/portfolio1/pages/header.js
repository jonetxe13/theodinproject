export default function Header(){

  function HeaderOptions({text}){
    return (<button className='flex-1 hover:shadow-md hover:shadow-gray-400 font-bold text-gray-500 whitespace-nowrap hover:text-white hover:bg-red-500 rounded-lg mx-4 hover:cursor-pointer p-4'>
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
    <div className='flex p-4 bg-gray-100 shadow-gray-200 shadow-md'>
      <div className='cursor-default bg-red-600 font-extrabold text-3xl p-4 text-center text-white shadow-md shadow-gray-500 rounded-lg'>
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
