import React, { useEffect, useState, } from 'react'
import Nave from '../Nave';
import axios from 'axios';
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
 

function Addemploy() {

  
  const [values, setvalues]= useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:""
  })
   const navget = useNavigate()
  const submitheandlar = async (event)=>{
     event.preventDefault();
    await  axios.post('/creat',values)
   .then(navget('/addemploy'))
   .catch(err => console.log(err))
   
  };
  const [employ, setEmploy] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/') // Replace '/your-endpoint' with the actual API endpoint
      .then(res => setEmploy(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);
  return ( 
<div className='w-screen h-screen flex flex-col '>
<Nave/>
<div className='m-10 flex  flex-shrink '>
    
     <div className=" max-w-2xl w-2/4 bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6">ADMINE</h2>
    
<form action="#" method="POST" onSubmit={submitheandlar} className="space-y-6">
    
        <div className=''>
            <label for="name" className="block text-sm font-medium text-gray-700">FristName</label>
            <input type="text" id="name" name="name" required onChange={e=>setvalues({...values, first_name:e.target.value})}
                className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
        <div className=''>
            <label for="name" className="block text-sm font-medium text-gray-700">LastName</label>
            <input type="text" id="name" name="name" required onChange={e=>setvalues({...values, last_name:e.target.value})}
                className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>  
        <div>
            <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" required onChange={e=>setvalues({...values, email:e.target.value})}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
        <div>
            <label for="password" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="password" id="password" name="password" required onChange={e=>setvalues({...values, phone:e.target.value})}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>

        
        <div>
            <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                CREATE
            </button>
        </div>
    </form>
     </div>
     <div className=" max-w-2xl bg-white p-8 m-2  overflow-hidden overflow-x-auto rounded-lg shadow-lg">
     <table className="min-w-full bg-white border  overflow-x-auto border-gray-200">
            <thead>
                <tr>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Action</th>                    
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
           { employ.map((data,i)=> (
                <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="py-4 px-6 text-sm text-gray-700">{data.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{data.email}</td>
                    <td><button>edit</button></td>
                    
                </tr>
            )) }
            </tbody>
        </table>
     </div>
</div>
</div>
  )
}

export default Addemploy

