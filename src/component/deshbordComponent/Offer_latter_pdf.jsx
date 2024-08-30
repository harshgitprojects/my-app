import React from 'react'
import React from 'react'
import logo1 from '../deshbordComponent/logo1.png'


export default function Offer_latter_pdf() {
  const [employ, setEmploy] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/offer_latter') // Replace '/your-endpoint' with the actual API endpoint
      .then(res => setEmploy(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);
  return (
    
<div className=' flex w-screen flex-col h-screen overflow-y-auto '>
<Nave/>
<button className='h-10 p-2 m-2 fixed z-10  bottom-20 right-10 w-40 flex items-center bg-black text-white'><FaRegFilePdf className='m-1 text-2xl text-red-500' />Latters PDF</button>
<button className='h-10 p-2 m-2 fixed z-10  bottom-5 right-10 w-40 flex items-center bg-black text-white' onClick={() => toPDF()}><FaRegFilePdf className='m-1 text-2xl text-red-500' />Download PDF</button>
<div className='flex flex-col  items-center'>
  <div ref={targetRef} style={a4Style}>
    
    <div className=' relative flex  items-center  justify-between'>
<img className='h-10 w-42 mb-5' src="/logo1.png" alt="" />


</div>
<div className='mt-20 mb-20'>
<p className='mt-20 text-2xl '>Dear Akash Patel,</p>
<p className='mt-10 text- '>We are pleased to offer you the full-time position of BDE at Meshv Technology with a start date of 15-07-2024. You will be reporting directly at A-608 Ganesh Glory 11, Nr. BSNL Office, Jagatpur, SG Highway. We believe your skills and experience are an excellent match for our company.</p>

<p className=''>The annual starting salary for this position to be paid on a monthly basis, starting on 01-8-2024.</p>

<p className=''>Your employment with Meshy Technology will be on an at-will basis, which means you and the company are free to terminate the employment relationship at any time for   
3 months for any reason.</p>

<p className=''>We are excited to have you join our team! If you have any questions, please feel free to reach out at any time.</p>

<p className='mt-10 '>Jaydeep Patel<br/>
CEO OF Meshv Technology</p>

<p className=''>Date: 11-07-2024.</p>
</div>
<h2 className=' text-sm bottom-1 float-right'><b>GST: 24AAPCM3081K125<br/> Add - Meshv Technology, A-806, Ganesh Glory 11.<br/>
Jagatpur Rd, near BSNL Office, off Sarkhej-<br/>
Gandhinagar Highway, Jagatpur,<br/>
 Ahmedabad, Gujarat 382470</b></h2>
  </div>
</div>
</div>

  )
}
