import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Get_Started from './pages/Get_Started'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Course from './pages/Course'
import Home from './pages/Home'
import Card from './components/CardProps'
import LoginForm from './pages/Login'
import RegistrationPage from './pages/Register'
import VideoDataSci from './pages/VideoDataSci'
import VideoML from './pages/VideoML'
import VideoProgramFun from './pages/VideoProgramFun'
import VideoWeb from './pages/VideoWeb'
import ResponsiveAppBar from './components/ResponsiveAppBar'
function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (username: string, password: string) => {
    setIsLoggedIn(true);
    navigate('/Course');
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // เปลี่ยนเส้นทางไปยังหน้า Login
  };

  return (
    <>
    {/* <ResponsiveAppBar/> */}
      {/* <Card initialMessage='Test'></Card> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path='/Course' element={<Course />} />
        <Route path="/Register" element={<RegistrationPage />} />
        <Route path="/video-data-science" element={<VideoDataSci />} />
        <Route path="/video-machine-learning" element={<VideoML />} />
        <Route path="/video-program-fundamentals" element={<VideoProgramFun />} />
        <Route path="/video-web-development" element={<VideoWeb />} />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Course />} />
            <Route path="/Logout" element={<button onClick={handleLogout}>Log out</button>} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        {/* <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/CheckOut' element={<CheckOut />} /> */}
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </>
  )
}

export default App
