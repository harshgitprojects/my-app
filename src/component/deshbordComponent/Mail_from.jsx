import React from 'react'
import Nave from '../Nave'



export default function Mail_from() {
  return (
    <div className=' w-screen  items-center  overflow-hidden h-screen bg-slate-800'>
    <Nave/>
      <div class="relative flex  m-12 overflow-x-auto   shadow-md w-auto sm:rounded-lg">
        <div className=' h-screen w-screen bg3 text-lg flex flex-col p-1 justify-center items-center'>
        <h1 className='text-6xl text-sky-100'>create a new</h1>
          <form action="" className=' flex flex-col text-white' >
            <div className='flex flex-col  m-2'>
              <label htmlFor="Name">Name</label>
              <input type="text" className=' bg-white  shadow-md text-gray-300' name='name' />
            </div>
            <div className='flex flex-col m-2'>
              <label htmlFor="Name">Last name</label>
              <input type="text" className=' bg-white  shadow-md text-gray-300' name='name' />
            </div>
            <div className='flex'>
            <div className='flex flex-col m-2'>
              <label htmlFor="Name">email</label>
              <input type="text" className=' bg-white  shadow-md text-gray-300' name='name' />
            </div>
            <div className='flex flex-col m-2 '>
              <label htmlFor="Name">Phone</label>
              <input type="text" className=' bg-white  shadow-md text-gray-300' name='name' />
            </div>
            </div>
            <div className='flex'>
            <div className='flex flex-col m-2'>
              <label htmlFor="Name">Joining Date</label>
              <input type="text" className=' bg-white  shadow-md text-gray-300' name='name' />
            </div>
            <div className='flex flex-col m-2 '>
              <label htmlFor="Name">Start Salary Date</label>
              <input type="text" className=' bg-white  shadow-md text-gray-300' name='name' />
            </div>
            </div>
            <div className='flex flex-col m-2 '>
              <button type='submit' className=' bg-black rounded-sm m-3 text-white text-sm p-2'> +Add New </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
