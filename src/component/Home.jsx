import React from 'react'
import Nave from './Nave'
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
function Home() {
  return (
    <div className='w-screen h-auto bg-slate-800'>
    <Nave/>
    <div className=' flex'>
    <Card className=" h-64 w-1/3 p-5 m-5" imgSrc="https://marketplace.canva.com/EAFXqL8NfTQ/1/0/1131w/canva-black-%26-orange-a4-professional-invoice-ZAbveYe41E8.jpg" horizontal>
      <h5 className="text-2xl font-bold m-1 tracking-tight text-gray-900 dark:text-white">
        Create Sallry Slip
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
     <button className='bg-black mt-3 text-white rounded-md h-8 w-1/3'>Create</button>
    </Card>
    <Card className=" h-64 w-1/3 p-5 m-5" imgSrc="https://assets.visme.co/templates/banners/thumbnails/i_Management-Job-Offer-Letter_full.jpg" horizontal>
      <h5 className="text-2xl font-bold m-1 tracking-tight text-gray-900 dark:text-white">
        Create offer letter
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>    
       <a href="/Offer_latter"><button className='bg-black mt-3 text-white rounded-md h-8 w-1/3'>Create</button></a>
    </Card>
    
    </div>
    
    </div>
  )
}

export default Home