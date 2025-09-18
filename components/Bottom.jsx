"use client"
import React, { useState } from 'react'


const PlusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
);

const Bottom = ({handleOpenModal}) => {


  return (
    <section className='p-4 border-t-2 fixed flex bg-white justify-center bottom-0 w-full'> 
      <div className='flex items-center justify-center bg-(--bg-glossy) w-fit p-2 rounded-full border-2' onClick={handleOpenModal}>
        <PlusIcon className='w-8 h-8 cursor-pointer ' />
      </div>

    </section>
  )
}

export default Bottom