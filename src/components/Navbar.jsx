import React, { useState } from 'react'

const Navbar = () => {
    const [login, setLogin] = useState(false);
    const handleLogin = () => {
        setLogin(true);
    }
    const handleLogout = () => {
        setLogin(false);
    }

  return (
    <div className='w-full h-24 bg-zinc-800 flex items-center justify-between px-10'>
        <h3 className='text-white text-2xl uppercase'>Logo</h3>

        <div className='flex items-center justify-between text-white gap-10'>
            <h3 className='text-lg'>Home</h3>
            <h3 className='text-lg'>About Us</h3>
            <h3 className='text-lg'>Blog</h3>
            <h3 className='text-lg'>Contact Us</h3>
        </div>

        {login ? (<button className='btn text-white border px-10 py-3 rounded-full' onClick={handleLogout}>Login</button>) : (
            <button className='btn text-white border px-10 py-3 rounded-full' onClick={handleLogin}>Logout</button>
        )}
        
    </div>
  )
}

export default Navbar
