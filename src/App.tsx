import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Get_Started from './pages/Get_Started'
import { Route, Routes } from "react-router";
import Course from './pages/Course'
import Home from './pages/Home'
import Card from './components/CardProps'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card initialMessage='Test'></Card>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Course' element={<Course />} />
        {/* <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/CheckOut' element={<CheckOut />} /> */}
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </>
  )
}

export default App
