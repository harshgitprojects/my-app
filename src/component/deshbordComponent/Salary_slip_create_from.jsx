import React,{useState,useEffect} from 'react'

import Nave from '../Nave'
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { usePDF } from 'react-to-pdf'
import { FaRegFilePdf,FaPhone,FaEnvelope,FaGlobe,FaMapMarkerAlt} from "react-icons/fa";
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function Salary_slip_create_from() {
  const  { toPDF, targetRef }  = usePDF({filename: 'MESHVE.pdf'});
  const a4Style = {
    width: '800px',   // A4 width in pixels at 96 DPI
    
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};


    const [employ, setEmploy] = useState([]);
    const {id}= useParams
    useEffect(() => {
      axios.get(`http://localhost:8000/sl_select1:id`) // Replace '/your-endpoint' with the actual API endpoint
        .then(res => setEmploy(res.data))
        .catch(err => console.error('Error fetching data:', err));
        
    },[]);   
  return (



<div className="bg-white shadow-lg bg7 h-full p-2 bg-center " ref={targetRef} style={a4Style}>
<button className='h-10 p-2 m-2 fixed z-10  bottom-20 right-10 w-40 flex items-center bg-black text-white'><FaRegFilePdf className='m-1 text-2xl text-red-500' />Latters PDF</button>
<button className='h-10 p-2 m-2 fixed z-10  bottom-5 right-10 w-40 flex items-center bg-black text-white' onClick={() => toPDF()}><FaRegFilePdf className='m-1 text-2xl text-red-500' />Download PDF</button>   

<div class="flex items-center">
<img src="logo1.png" className='h-10 m-5' alt="" />
        <div className="bg-green-500 w-10 h-10 m-1 clip-right ">
            
        </div>
        <div className="bg-green-500 w-10 h-10 m-2 clip-right flex items-center clip-right justify-center">
            
        </div>
        <div className="bg-blue-600 w-4/5 text-right text-white font-bold text-lg py-2 px-4">
            GST : 24AAPCM3081K1Z5
        </div>
    </div>
<div className="mt-24 text-center bg-center">
    <h1 className="text-2xl">SALARY SLIP</h1>
</div>

{ employ.map((data,i)=> (
<>    
  <div className="mt-10  border-black border-2">
    <div className="flex border-black border-b-2 p-1 justify-between">
        <p>Date of Joining: <span className="font-semibold">17-04-2023</span></p>
        <p>Employee Name: <span className="font-semibold">{data.employee_name}</span></p>
    </div>
    <div className="flex  border-black border-b-2 p-1 justify-between">
        <p>Month: <span className="font-semibold">July-2024</span></p>
        <p>Designation: <span className="font-semibold">PHP Developer</span></p>
    </div>
    <div className="flex  border-black border-b-2 p-1 justify-between">
        <p>Worked Days: <span className="font-semibold">22</span></p>
        <p>Department: <span className="font-semibold">Web Development</span></p>
    </div>
    <div className='  border-black border-b-2 p-1'>
        <p>Employee ID: <span className="font-semibold">MT0001</span></p>
    </div>
  </div>


  <div className="grid  border-black border-2 p-1 grid-cols-2 gap-4 mb-6">
    <div>
        <h2 className="font-semibold">Earnings</h2>
        <div className="flex justify-between">
            <p>Basic</p>
            <p>₹21,000</p>
        </div>
        <div className="flex justify-between">
            <p>Incentive Pay</p>
            <p>₹10,000</p>
        </div>
        <div className="flex justify-between">
            <p>House Rent Allowance</p>
            <p>₹4,000</p>
        </div>
        <div className="flex justify-between">
            <p>Meal Allowance</p>
            <p>₹0</p>
        </div>
        <div className="flex  border-black border-t-2 justify-between font-bold">
            <p>Total Earnings</p>
            <p>₹35,000</p>
        </div>
    </div>
    <div>
        <h2 className="font-semibold">Deductions</h2>
        <div className="flex  justify-between">
            <p>Provident Fund</p>
            <p>₹0</p>
        </div>
        <div className="flex justify-between">
            <p>Professional Tax</p>
            <p>₹200</p>
        </div>
        <div className="flex justify-between">
            <p>Loan</p>
            <p>₹0</p>
        </div>
        <div className="flex  border-black border-b-2 justify-between font-bold">
            <p>Total Deductions</p>
            <p>₹200</p>
        </div>
    </div>
  </div>


  <div className="flex  border-black border-2 p-1 justify-between items-center mb-6">
    <h2 className="text-lg font-semibold">Net Pay: ₹34,800/-</h2>
    <p>(Thirty-Four Thousand Eight Hundred Rupees Only)</p>
  </div>
  </>
))}

<div className="flex justify-between items-center">
    <div>
        <p>Company Stamp</p>
    </div>
    <div>
        <p>Employee Sign.</p>
    </div>
</div>
<div className="bg-white p-1 flex justify-between mt-44 items-start space-x-8">
      {/* Left Section */}
      <div className="flex flex-col ">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-green-500 text-xl" />
          <span className="text-gray-700">+91 94292 24053</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-green-500 text-xl" />
          <span className="text-gray-700">info@meshvtechnology.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaGlobe className="text-green-500 text-xl" />
          <span className="text-gray-700">meshvtechnology.com</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="text-green-500 text-2xl" />
        <span className="text-gray-700">
          Meshv Technology, A-806, Ganesh Glory 11, Jagatpur Rd, near BSNL Office, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470
        </span>
       
      </div>
      
    </div>
    
</div>

  )   
}
