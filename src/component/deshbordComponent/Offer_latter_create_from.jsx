import React,{ useEffect,useState } from 'react'
import Nave from '../Nave'
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Offer_latter_create_from() {

    const [values, setvalues]= useState({
        employ_name:'', designation:'', department:'', month:'', joining_date:'',start_salary_date:'',email:''
      })
       const navget = useNavigate()
      const submitheandlar3 = async (event)=>{
         event.preventDefault();
        await  axios.post('/offer_latter',values)
       .then(navget('/Slip_table'))
       .catch(err => console.log(err))
       
      };


  return (
    // <div className=' w-screen  items-center  overflow-hidden h-screen bg-slate-800'>
    // <Nave/>
    //   <div class="relative flex  m-5 overflow-x-auto   shadow-md w-auto sm:rounded-lg">
    //    <div className=' h-screen w-screen bg2 text-lg flex flex-col p-1 justify-center items-center'>
    // <Banner>
    //   <div className="flex w-full justify-between border-b border-gray-200 bg-lime-300 p-4 dark:border-gray-600 dark:bg-gray-700">
    //     <div className="mx-auto flex items-center">
    //       <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    //         <MdAnnouncement className="mr-4 h-4 w-4" />
    //         <span className="[&_p]:inline">
    //          Please ensure that all the details below are filled out accurately to create a new employees.&nbsp;
    //           <a
    //             href="https://flowbite.com"
    //             className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
    //           >
    //             Provided by Meshv Tech.
    //           </a>
    //         </span>
    //       </p>
    //     </div>
    //     <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
    //       <HiX className="h-4 w-4" />
    //     </Banner.CollapseButton>
    //   </div>
    //        </Banner>
    //        <h1 className='text-6xl text-sky-100'>create a new</h1>
    //        <form action="" onSubmit={submitheandlar2} className=' flex flex-col text-white' >
    //         <div className='flex flex-col  m-2'>
    //           <label htmlFor="Name">Name</label>
    //           <input type="text"onChange={e=>setvalues1({...values, first_name:e.target.value})} className=' bg-white  shadow-md text-gray-300'id='first_name' name='first_name' required/>
    //         </div>
    //         <div className='flex flex-col m-2'>
    //           <label htmlFor="Name">Last name</label>
    //           <input type="text"onChange={e=>setvalues1({...values, last_name:e.target.value})} className=' bg-white  shadow-md text-gray-300'id='last_name' name='last_name' required />
    //         </div>
    //         <div className='flex'>
    //         <div className='flex flex-col m-2'>
    //           <label htmlFor="email">email</label>
    //           <input type="email" onChange={e=>setvalues1({...values, email:e.target.value})} className=' bg-white  shadow-md text-gray-300' id='email' name='email' required/>
    //         </div>
    //         <div className='flex flex-col m-2 '>
    //           <label htmlFor="Name">Phone</label>
    //           <input type="text"onChange={e=>setvalues1({...values, phone:e.target.value})} className=' bg-white  shadow-md text-gray-300' id='phone' name='phone'required />
    //         </div>
    //         </div>
    //         <div className='flex'>
    //         <div className='flex flex-col m-2'>
    //           <label htmlFor="Name">Joining Date</label>
    //           <input type="date"onChange={e=>setvalues1({...values, join_date:e.target.value})} className=' bg-white  shadow-md text-gray-300' id='joining_date' name='join_date' required />
    //         </div>
    //         <div className='flex flex-col m-2 '>
    //           <label htmlFor="Name">Start Salary Date</label>
    //           <input type="date"onChange={e=>setvalues1({...values, start_sl_date:e.target.value})} className=' bg-white  shadow-md text-gray-300' id='salary_date' name='start_sl_date' required/>
    //         </div>
    //         <div className='flex flex-col m-2 '>
    //           <label htmlFor="Name">Create at Date</label>
    //           <input type="date"onChange={e=>setvalues1({...values, create_date:e.target.value})} className=' bg-white  shadow-md text-gray-300' id='date' name='create_date' required />
    //         </div>
    //         </div>
    //         <div className='flex flex-col m-2 '>
    //           <button type='submit' className=' bg-black rounded-sm m-3 text-white text-sm p-2'> +Add New </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className='w-screen flex flex-col '>
    <Nave/>
    <div className='m-10 flex item justify-center '>
        
         <div className=" max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Offer Latter</h2>
        
    <form action="#" method="POST" onSubmit={submitheandlar3} className="space-y-6 ">
         

            <div className='flex'> 
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Employ Name</label>
                <input type="text" id="name" name="employ_name" required onChange={e=>setvalues({...values, employ_name:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                     placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Designation</label>
                <input type="text" id="name" name="designation" required onChange={e=>setvalues({...values, designation:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                     placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Department</label>
                <input type="text" id="name" name="department" required onChange={e=>setvalues({...values, department:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                     placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Joining Date</label>
                <input type="date" id="name" name="joining_date" required onChange={e=>setvalues({...values, joining_date:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                     placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            </div>

            <div className='flex'> 
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Start Salary Date</label>
                <input type="date" id="name" name="start_salary_date" required onChange={e=>setvalues({...values, start_salary_date:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                     placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="text" id="name" name="email" required onChange={e=>setvalues({...values, email:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                     placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            </div>

            
            <div>
                <button type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                     text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Create
                </button>
            </div>
        </form>
         </div>
         {/* <div className=" max-w-2xl bg-white p-2 m-2  rounded-lg shadow-md">
         <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee ID</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Designation</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Salary</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-4 px-6 text-sm text-gray-700">MT0001</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Parag Bhavsar</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Web Development</td>
                        <td className="py-4 px-6 text-sm text-gray-700">PHP Developer</td>
                        <td className="py-4 px-6 text-sm text-gray-700">₹34,800</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100">
                        <td className="py-4 px-6 text-sm text-gray-700">MT0002</td>
                        <td className="py-4 px-6 text-sm text-gray-700">John Doe</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Marketing</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Marketing Manager</td>
                        <td className="py-4 px-6 text-sm text-gray-700">₹45,000</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-4 px-6 text-sm text-gray-700">MT0003</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Jane Smith</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Human Resources</td>
                        <td className="py-4 px-6 text-sm text-gray-700">HR Manager</td>
                        <td className="py-4 px-6 text-sm text-gray-700">₹40,000</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100">
                        <td className="py-4 px-6 text-sm text-gray-700">MT0004</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Emily Davis</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Finance</td>
                        <td className="py-4 px-6 text-sm text-gray-700">Financial Analyst</td>
                        <td className="py-4 px-6 text-sm text-gray-700">₹38,500</td>
                    </tr>
                </tbody>
            </table>
         </div> */}
    </div>
    </div>
  )
}
