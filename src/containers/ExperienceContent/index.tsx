import React from "react";

const Myexperiencecontent = () => {
  return (
    <div id="Experience" className="flex flex-row justify-center items items-center w-full h-screen lg:p-5 h-[100vh] md:p-5 h-[100vh]">
      <div className="flex flex-col justify-between gap-y-6 animate-fadeIn  md:h-auto w-full p-3 lg:w-full h-auto p-3">
        <div className="w-[250px] h-[60px] flex items-center justify-center">
          <span className="text-4xl text-[#80B840] animate-bounce"> EX </span>
          <p className="text-4xl text-black border-b-[2px] border-[#80B840] transition-transform duration-500 hover:scale-110 animate-heading">
            Perience
          </p>
        </div>
        <div className="flex flex-col justify-between gap-y-10 lg:p-5 items items-center flex flex-row w-full h-auto md:p-6 items flex flex-row items-center w-full h-auto">
          <div className="w-[900px] h-[300px] border-2 border-[#80B840] bg-black opacity-100 p-5 rounded-tl-[700px] animate-slideInLeft md:h-auto w-full p-3 lg:w-full h-auto p-3">
            <div className="flex flex-col justify-center items items-center">
              <div className="flex flex-col gap-y-2">
                <text className="text-xl text-white">
                  Organisation :
                  <a href="https://www.vithiit.com/">
                    Vithi IT Solution Pvt.Ltd
                  </a>
                </text>
                <text className="text-md text-[#80B840]">
                  Exp : 2 year's ( FrontEnd Developer )
                </text>
              </div>
              <div className="items items-center ">
                <p className="line-clamp-6 text-md text-white p-4 ml-10 tracking-wide leading-relaxed font-light lg:text-xl h-auto  md:text-xl h-auto ">
                  I have been working as a Frontend Developer at Vithi IT
                  Solutions for the past two years, where I've gained extensive
                  experience in building responsive and user-friendly web
                  applications. My work involved using HTML, CSS, and JavaScript
                  frameworks like React.js and Next.js to create dynamic
                  interfaces. I collaborated closely with design and backend
                  teams to ensure seamless user experiences. Additionally, I
                  utilized libraries such as Bootstrap, Material UI, and
                  Tailwind CSS to enhance the design and functionality of
                  projects
                </p>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[300px] border-2 border-[#80B840] bg-black opacity-100 p-5 rounded-tr-[700px] animate-slideInRight  md:h-auto w-full p-3 lg:w-full h-auto p-3">
            <div className="flex flex-col justify-center items items-center">
              <div className="flex flex-col gap-y-2">
                <text className="text-xl text-white">
                  Organisation :
                  <a href="https://www.swhitech.com/eng/#anchor1">
                    Sungwoo hitech pvt.Ltd
                  </a>
                </text>
                <text className="text-md text-[#80B840]">
                  Exp : 2.3 year's (Assistent Engineer )
                </text>
              </div>
              <div className="items items-center ">
                <p className="line-clamp-6 text-md text-white p-4 mr-10 tracking-wide leading-relaxed font-light lg:text-xl md:text-xl">
                  I was an Assistant Engineer at Sungwoo Hitech Pvt Ltd,
                  specializing in supply chain management. Experienced in
                  optimizing processes, coordinating with vendors, and ensuring
                  the smooth flow of materials to meet production needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myexperiencecontent;
