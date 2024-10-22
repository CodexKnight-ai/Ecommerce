import React from 'react'
import {Outlet} from 'react-router-dom'

function Shop() {
  return (
    <div className='bg-[#F8FBF8] w-screen h-screen flex flex-col py-16 gap-3 '>
        <h1 className='self-center text-6xl'>Shop</h1>
        <h3 className='self-center text-2xl bg-yellow-500 p-1 rounded-md px-3'>Categories</h3>
        <Outlet/>      
    </div>
  )
}

export default Shop
