import React from "react";
// import MaintemplateLayout from "../template";
import Mainhomepage from "@/containers/Homecontent";
import Navbar from "@/components/Navbar";
import Aboutuscontent from "@/containers/Aboutuscontent";
import Myexperiencecontent from "@/containers/ExperienceContent";
import Myprojects from "@/containers/Projectscontent";
import Myskillcontent from "@/containers/Skillscontent";


const Mainrender = () => {
  return (
    <>
      <Navbar />
      <Mainhomepage />
<Aboutuscontent />
<Myexperiencecontent />
<Myskillcontent/> 
<Myprojects />
    
    </>
  );
};

export default Mainrender;
