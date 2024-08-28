// import { useEffect, useState } from 'react'

// import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  let x = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
      {index: true,element: <Home/>},
      {path:'about',element: <About/>},
      {path:'contact',element: <Contact/>},
      {path:'portfolio',element: <Portfolio/>},
      {path:'*',element:<Notfound/>}
    ]}
  ])

  return (

 <RouterProvider router={x}></RouterProvider>

  )
}

export default App
