import React from 'react'
import Nave from '../Nave'
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
export default function Offer_latter_create_from() {
  return (
    <div className='h-screen  w-screen bg-slate-800 drop-shadow-md'>
    <Nave/>
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-lime-300 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
             Please ensure that all the details below are filled out accurately to create an offer letter for new employees.&nbsp;
              <a
                href="https://flowbite.com"
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                Provided by Meshv Tech.
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
   
    <form className="max-w-2xl mt-12 h-auto text-white mx-auto">
      <div className='text-white'>
        <div className="mb-2 block">
          <Label htmlFor="email1" className='text-white' value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" className='text-white' value="Name of employees" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
      <div>
    <div className="mb-2 block">
          <Label htmlFor="password1" className='text-white' value="Designations" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" className='text-white' value="Joining Date" />
        </div>
        <TextInput id="password1" type="date" required />
    </div>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
      <div>
    <div className="mb-2 block">
          <Label htmlFor="password1" className='text-white' value="Start Salary Date" />
        </div>
        <TextInput id="password1" type="date" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" className='text-white' value="Create Date" />
        </div>
        <TextInput id="password1" type="date" required />
    </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
    
  </div>
  )
}
