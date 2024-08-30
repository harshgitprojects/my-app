import React,{useEffect,useState} from 'react'
import Nave from '../Nave'
import axios from 'axios';
import { FaRegFilePdf } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function () {

    const navget = useNavigate()
    const [employ, setEmploy] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8000/sl_table') // Replace '/your-endpoint' with the actual API endpoint
        .then(res => setEmploy(res.data))
        .catch(err => console.error('Error fetching data:', err));
        
    }, []);
   
   function delethandler(id){
    axios.delete(`/sl_delet:${id}`) // Replace '/your-endpoint' with the actual API endpoint
    .then(alert(`${id}Deleted`))
    .catch(err => console.error('Error fetching data:', err));
   }
  
   function selecthandler(id){
    axios.get(`/sl_select1:${id}`) // Replace '/your-endpoint' with the actual API endpoint
    .then(navget('/Salary_slip'))
    .catch(err => console.error('Error fetching data:', err));
   } 
   
  return (
    <div className='w-screen'>
        <Nave/>
        <div className="  bg-white p-2 m-2  rounded-lg shadow-md">
        <h2 className="text-2xl font-bold right-2 mb-2">Salary Slip</h2>
         <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee ID</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Designation</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">DP</th>
                        <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Salary</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                { employ.map((data,i)=> (
                   
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-4 px-6 text-sm text-gray-700">{data.salary_slip_id}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{data.employee_name}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{data.designation}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{data.department}</td>
                        <td className="py-4 flex flex-shrink px-6 text-sm text-gray-700">
                            <button className='m-1 h-10 p-2 text-white bg-blue-600'>EDIT</button>
                            <button onClick={()=>delethandler(data.salary_slip_id)}  className='m-1 h-10 p-2 text-white  bg-red-600'>DELET</button>
                            <button onClick={()=>selecthandler(data.salary_slip_id)} className='h-10 p-2 m-1 border-b-white  w-40 flex items-center bg-black text-white'><FaRegFilePdf className='m-1 text-2xl text-red-500' />Salary_slip PDF</button>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
         </div>
    </div>
  )
}
