import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <>
    <Navbar/>

    <div className="flex justify-center items-center min-h-screen pt-20 bg-gray-100 ">
  <div className="text-center w-full">
    
    <Outlet/>                                      
  </div>
</div>


    <Footer/>
    </>
  )
}
