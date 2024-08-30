import React,{ useEffect,useState } from 'react'
import Nave from '../Nave'
import { Table,Checkbox, FooterDivider } from "flowbite-react";
import axios from 'axios';

function Employ_attandes() {
   const [employ, setEmploy] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/') // Replace '/your-endpoint' with the actual API endpoint
      .then(res => setEmploy(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);
  return (
   <div className='w-screen justify-center '>
    <Nave/>
    <div className=' flex justify-center'>
       <div className='flex'> 
            <div className='m-5'>
                <label for="name" className="block text-sm font-medium text-gray-700">FristName</label>
                <input type="date" id="name" name="name" required 
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div className='m-5'>
                <label for="name" className="block text-sm font-medium text-gray-700">FristName</label>
                <select name="month" id="" 
                className="mt-1 block  w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option className='text-black' value="22-Dayes">---</option>
                    <option value="January">January </option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
            </div>
    </div>
    <div className='flex justify-center flex-wrap'>
      <div className='flex flex-col items-center justify-center p-1 shadow-2xl text-black h-52 w-80 bg-white m-5'>
         <h1>Date: 1/4/2024</h1>
         <p>Yogi:<span>Presant</span></p>
         <p>Keval:<span>Presant</span></p>
      </div>
      <div className='flex flex-col items-center justify-center p-1 shadow-2xl text-black h-52 w-80 bg-white m-5'>
         <h1>Date: 1/4/2024</h1>
         <p>Yogi:<span>Presant</span></p>
         <p>Keval:<span>Presant</span></p>
      </div>
      <div className='flex flex-col items-center justify-center p-1 shadow-2xl text-black h-52 w-80 bg-white m-5'>
         <h1>Date: 1/4/2024</h1>
         <p>Yogi:<span>Presant</span></p>
         <p>Keval:<span>Presant</span></p>
      </div>
    </div>
   </div>
  )
}

export default Employ_attandes