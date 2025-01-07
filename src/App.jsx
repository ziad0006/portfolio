import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './component/Layout/Layout'
import Framework from './component/Framework/Framework'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Portfolio from './component/Portfolio/Portfolio'
import Notfound from './component/Notfound/Notfound'
RouterProvider

let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Framework/> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ]
  }
])


function App() {
  const [count, setCount] = useState(0)
  return <RouterProvider router={x}></RouterProvider>
}

export default App
