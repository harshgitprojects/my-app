import React from 'react'
import Nave from './Nave'
export default function() {
  return (
    <div className=' w-screen h-screen flex flex-col overflow-y-auto'>
       <Nave/>
       <div className='w-auto h-auto bg-black text-white p-10'>
          <div className='flex'>
              <img className='h-14 mr-4' src="logo1.png" alt="" />
              <h1 className='text-2xl'>MESHVTECH<br/>AUTOMATIONS</h1>
          </div>
           <h1 className='text-6xl mt-12 text-center'>Lorem ipsum dolor sit amet.</h1>
           <div className='flex m-12 justify-between'>
            <p className='text-lg mr-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ex vitae saepe ea necessitatibus fugit rem. Non nobis odit dignissimos iste laborum? Soluta sed quidem modi, fugit cumque, itaque a deserunt voluptatum quisquam, dicta consequuntur ipsam earum esse. Voluptas quis maiores possimus rerum quibusdam pariatur iste recusandae labore delectus alias.
            </p>
               <img className='h-60 mr-4' src="images.jpg" alt="" />
           </div>
       </div>
    </div>
  )
}
