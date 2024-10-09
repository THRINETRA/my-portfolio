import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";
import linkedinIcon from "@/app/assets/images/Linkedin.png";
import naukriIcon from "@/app/assets/images/Naukari.jpg";
import newgmail from "@/app/assets/images/new-gmail.png";
import newdail from "@/app/assets/images/new-dail.png";
import homedevimgicon from "@/app/assets/images/homedevimg.jpg";

const Mainhomepage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center opacity-0 animate-fadeIn w-[100%] h-[100vh] px-4 md:px-8 h-[100vh] lg:px-16 h-[100vh]">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center items-center lg:items-start animate-slideIn mb-6 lg:mb-0">
        <div>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-black transition-opacity duration-300 delay-150 animate-fadeIn">
            <span className="text-[#B7D793] font-light">Hello,</span> I'M A
          </p>
        </div>
        <div className="w-full pt-3 md:pt-5">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black transition-transform duration-300 delay-150 animate-pulse">
            THRINETRA{" "}
            <span className="text-[#B7D793] font-bold">POTTI</span>
          </p>
        </div>
        <div className="w-full mt-2 md:mt-4">
          <p className="text-[#80B840] text-2xl md:text-3xl lg:text-4xl font-extralight transition-opacity duration-300 delay-150 animate-fadeIn">
            FrontEnd Developer
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-6">
          <button className="bg-[#80B840] rounded-md w-[180px] md:w-[200px] h-[50px] md:h-[57px] flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faCircleDown} className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-white font-semibold text-md md:text-xl">Download CV</span>
          </button>

          <div className="mt-3 md:mt-0">
            <span className="text-lg md:text-xl font-light">Follow me :</span>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com" className="transform transition-transform duration-300 hover:scale-105">
                <Image src={linkedinIcon} alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="https://www.naukri.com" className="transform transition-transform duration-300 hover:scale-105">
                <Image src={naukriIcon} alt="Naukri" width={30} height={30} />
              </a>
              <a href="https://gmail.com" className="transform transition-transform duration-300 hover:scale-105">
                <Image src={newgmail} alt="mymail" width={34} height={35} />
              </a>
              <a href="" className="transform transition-transform duration-300 hover:scale-105">
                <Image src={newdail} alt="mydail" width={35} height={35} className="rounded-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex items-center justify-center w-[250px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] rounded-full overflow-hidden">
        <Image
          src={homedevimgicon}
          alt="homedev"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Mainhomepage;
