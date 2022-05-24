export default function Header(){
  return (
    <div className='flex p-10 bg-gray-100 shadow-gray-200 shadow-md'>
      <div className='cursor-default bg-red-600 font-extrabold text-3xl p-6 text-center text-white shadow-md shadow-gray-500 rounded-lg'>
        JN
      </div>
        <div className='flex items-center text-right ml-auto'>
          <h2 className='flex-1 hover:underline hover:text-gray-500 hover:bg-red-500 rounded-lg mx-5 hover:cursor-default p-6'>
            MAIN
          </h2>
          <h2 className='flex-1 hover:underline hover:text-gray-500 hover:bg-red-500 rounded-lg mx-5 hover:cursor-default p-7 whitespace-nowrap'>
            ABOUT ME
          </h2>
          <h2 className='flex-1 hover:underline hover:text-gray-500 hover:bg-red-500 rounded-lg mx-5 hover:cursor-default p-6'>
            CONTACT
          </h2>
        </div>
    </div>
  )
}
