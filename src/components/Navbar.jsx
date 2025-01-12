import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-violet-800 p-3 rounded-md text-white '>
        <div className='logo'>
            <span className='text-xl  mx-8'>iTask</span>
        </div>
        <ul className='flex gap-12'>
          
            <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>YourTaskd</li>

        </ul>
    </nav>
  )
}
