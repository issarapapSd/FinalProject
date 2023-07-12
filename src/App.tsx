import { useEffect, useState } from "react";
import "./App.css";
import Get_Started from "./pages/Get_Started";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import VideoDataSci from "./pages/videos/VideoDataSci";
import VideoML from "./pages/videos/VideoML";
import VideoProgramFun from "./pages/videos/VideoProgramFun";
import VideoWeb from "./pages/videos/VideoWeb";
import Navbar from "./components/navbar/Navbar";
import { SelectedPage } from "@/shared/types";
import Courses from "./pages/courses/Courses";


function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (username: string, password: string) => {
    setIsLoggedIn(true);
    navigate("/Course");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login"); // เปลี่ยนเส้นทางไปยังหน้า Login
  };
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <Get_Started/> */}
      {/* <Home setSelectedPage={setSelectedPage} />
      <Courses setSelectedPage={setSelectedPage} /> */}

      {/* <ResponsiveAppBar/> */}
      <Routes>
        <Route path="/" element={<Get_Started/>}/>
        <Route path="/video-data-science" element={<VideoDataSci setSelectedPage={setSelectedPage} />} />
        <Route path="/video-machine-learning" element={<VideoML setSelectedPage={setSelectedPage}/>} />
        <Route
          path="/video-program-fundamentals"
          element={<VideoProgramFun setSelectedPage={setSelectedPage}/>}
        />
        <Route path="/video-web-development" element={<VideoWeb setSelectedPage={setSelectedPage}/>} />
      </Routes>
    </div>
  );
}

export default App;
{
  /* <Route path="/" element={<Home setSelectedPage={setSelectedPage}/>} />
        <Route path="/courses" element={<Courses setSelectedPage={setSelectedPage}/>} /> */
}
{
  /* <Route path="/login" element={<LoginForm onLogin={handleLogin} />} /> */
}
{
  /* <Route path="/course" element={<Course />} /> */
}
{
  /* <Route path="/register" element={<RegistrationPage />} /> */
}
{
  /* />
        <Route path="/video-data-science" element={<VideoDataSci />} 
        <Route path="/video-machine-learning" element={<VideoML />} />
        <Route
          path="/video-program-fundamentals"
          element={<VideoProgramFun />}
        />
        <Route path="/video-web-development" element={<VideoWeb />} />
      */
}
