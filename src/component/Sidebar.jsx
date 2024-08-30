import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <>
    
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>-</title>
    </head>
    <body>
    <div className=' h-screen w-64 bg-slate-900 text-white flex flex-col  items-center'>
        <div className=' m-4 flex flex-col justify-center'>
            <FaUserCircle className='text-7xl content-center'/>
            <h1 className=' text-2xl'>Admin</h1>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <menu className=' w-64 p-2 text-1xl'>
                <div className='flex items-center duration-500 hover:text-white hover:bg-red-300 m-2 mr-2  border-spacing-3  space-x-2 p-4  justify-right rounded-sm text-blue-950 bg-white'>
                    <i className=''><FaHome /></i>
                   <a href="/"><h2>Home</h2></a>
                </div>
                <div className='flex items-center  duration-500 hover:text-white hover:bg-red-300  m-2 mr-2 border-spacing-3 space-x-2 p-4 justify-right rounded-sm text-blue-950 bg-white'>
                    <i className=''><FaRegUser /></i>
                    <a href="/addemploy"> <h2>Admin</h2></a>
                </div>
                <div className='flex items-center  duration-500 hover:text-white hover:bg-red-300  m-2 mr-2 border-spacing-3 space-x-2 p-4 justify-right rounded-sm text-blue-950 bg-white'>
                    <i className=''><FaUsers /></i>
                    <a href="/Employ_desh"><h2>Employ</h2></a>
                </div>
                <div className='flex items-center duration-500 hover:text-white hover:bg-red-300 m-2 mr-2  border-spacing-3 space-x-2 p-4 justify-right rounded-sm text-blue-950 bg-white'>
                    <i className=''><MdMessage /></i>
                    <h2>Attandes</h2>
                </div>
                <div className='flex items-center duration-500 hover:text-white hover:bg-red-300 m-2 mr-2 border-spacing-3 space-x-2 p-4 justify-right rounded-sm text-blue-950 bg-white'>
                    <i className=''><CiBoxes /></i>
                    <h2>Orders</h2>
                </div>
                <div className='flex items-center duration-500 hover:text-white hover:bg-red-300 m-2 mr-2 border-spacing-3 space-x-2 p-4 justify-right rounded-sm text-blue-950 bg-white'>
                    <i className=''><CiBoxes /></i>
                    <h2>Orders</h2>
                </div>
                
            </menu>
        </div>
    </div>
    </body>
    </html>
    </>
  )
}

export default Sidebar