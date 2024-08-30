import React,{useState} from 'react'
import axios from 'axios'
import Nave from '../Nave'
import { useNavigate } from 'react-router-dom';

function Salary_slip() {



    const [values, setvalues]= useState({
        employee_name:'', designation:'', department:'', month:'', date_of_joining:'', worked_days:'', incentive_pay:'', house_rent_allowance:'', meal_allowance:'', basic:'', provident_fund:'', loan:'', professional_tax:''
      })
       const navget = useNavigate()
      const submitheandlar2 = async (event)=>{
         event.preventDefault();
        await  axios.post('/salary_slip',values)
       .then(navget('#'))
       .catch(err => console.log(err))
       
      };






  return (
    <div className='w-screen flex flex-col '>
    <Nave/>
    <div className='m-5 flex flex items-center justify-center  '>
        
         <div className=" max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Salary Slip</h2>
        
    <form action="#" method="POST" onSubmit={submitheandlar2} className="space-y-6 ">
        <div className='flex'> 
            <div className='m-2'>
                <label for="employee_name" className="block text-sm font-medium text-gray-700">Employee Name</label>
                <input type="text" id="name" name="employee_name" required onChange={e=>setvalues({...values, employee_name:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            
            <div className='m-2'>
                <label for="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                <input type="text" id="name" name="designation" required onChange={e=>setvalues({...values, designation:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Department</label>
                <input type="text" id="name" name="department" required onChange={e=>setvalues({...values, department:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Employee ID</label>
                <input type="text" id="name" name="employee_id" required onChange={e=>setvalues({...values, employee_id:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
        </div>

        <div className='flex'> 

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Month</label>
                <select name="month" id="" onChange={e=>setvalues({...values, month:e.target.value})}
                className="mt-1 block  w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option className='text-black' value="22-Dayes">---</option>
                    <option value="January">January</option>
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

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Date of Joining</label>
                <input type="date" id="name" name="date_of_joining" required onChange={e=>setvalues({...values,date_of_joining:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Worked Days</label>
                <select name="worked_days" id="" onChange={e=>setvalues({...values, worked_days:e.target.value})}
                className="mt-1 block  w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option className='text-black' value="22-Dayes">---</option>
                    <option className='text-black' value="22-Dayes">22-Dayes</option>
                    <option className='text-black'value="20-Dayes">20-Dayes</option>
                </select>
            </div> 
        </div>
            
        <div className='flex'> 
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Incentive Pay</label>
                <input type="text" id="name" name="incentive_pay" required onChange={e=>setvalues({...values, incentive_pay:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">House Rent Allowance</label>
                <input type="text" id="name" name="house_rent_allowance" required onChange={e=>setvalues({...values, house_rent_allowance:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Meal Allowance</label>
                <input type="text" id="name" name="meal_allowance" required onChange={e=>setvalues({...values, meal_allowance:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Basic</label>
                <input type="text" id="name" name="basic" required onChange={e=>setvalues({...values, basic:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
        </div>

        <div className='flex'> 
            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Provident Fund</label>
                <input type="text" id="name" name="provident_fund" required onChange={e=>setvalues({...values, provident_fund:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Loan</label>
                <input type="text" id="name" name="loan" required onChange={e=>setvalues({...values, loan:e.target.value})}
                    className="m-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>

            <div className='m-2'>
                <label for="name" className="block text-sm font-medium text-gray-700">Professional Tax</label>
                <input type="text" id="name" name="professional_tax" required onChange={e=>setvalues({...values, professional_tax:e.target.value})}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
        </div>
            
            <div>
                <button type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Create
                </button>
            </div>
        </form>
         </div>
         
    </div>
    </div>
  )
}

export default Salary_slip