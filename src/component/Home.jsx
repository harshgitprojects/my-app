import React from 'react'
import Nave from './Nave'
import { FaRegFilePdf } from "react-icons/fa";



function Home() {
  return (
    <div className=' w-screen  items-center  overflow-hidden h-screen bg-white'>
    <Nave/>
    <div className=' container flex h-screen flex-shrink '>
        <div className='flex flex-col items-center justify-center p-1 shadow-2xl text-black h-52 w-80 bg-white m-5'>
            <h1 className='text-2xl'>Create a Salary-Slip</h1>
            <a href="/Slip">
            <button className='h-10 p-2 m-2 border-b-white  bottom-5 right-10 w-40 flex items-center bg-black text-white'><FaRegFilePdf className='m-1 text-2xl text-red-500' />Salary-Slip PDF</button>
            </a>
        </div>
        <div className='flex flex-col items-center justify-center p-1 shadow-2xl text-black h-52 w-80 bg-white m-5'>
            <h1 className='text-2xl'>Create a Offer Latter</h1>
            <a href="/Offer_latter">
            <button className='h-10 p-2 m-2 border-b-white  bottom-5 right-10 w-40 flex items-center bg-black text-white'><FaRegFilePdf className='m-1 text-2xl text-red-500' />Offer latter PDF</button>
            </a>
        </div>
        <div className='flex flex-col items-center justify-center p-1 shadow-2xl text-black h-52 w-80 bg-white m-5'>
            <h1 className='text-2xl'>Create a Offer Latter</h1>
            <a href="/Salary_slip">
            <button className='h-10 p-2 m-2 border-b-white  bottom-5 right-10 w-40 flex items-center bg-black text-white'><FaRegFilePdf className='m-1 text-2xl text-red-500' />Offer latter PDF</button>
            </a>
        </div>
    </div>
    </div>

  )
}

export default Home