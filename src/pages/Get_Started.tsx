import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./home/Home";
import OurClasses from "./ourClasses/OurClasses";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./footer/Footer";

import Navbar from "@/components/navbar/Navbar";
import { SelectedPage } from "@/shared/types";
import Courses from "./courses/Courses";

const Get_Started = () => {

  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );


  return (
    <div className="app bg-gray-20">
      <Home setSelectedPage={setSelectedPage} />
      <Courses setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
      
      

    </div>
  );
};

export default Get_Started;
