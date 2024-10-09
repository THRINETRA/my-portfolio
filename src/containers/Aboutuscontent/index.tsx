import React from "react";

const Aboutuscontent = () => {
  return (
    <div
      id="Aboutus"
      className="flex flex-row justify-center w-full h-screen items-center"
    >
      <div className="flex flex-col gap-y-5 animate-fadeIn lg: items items-center px-16">
        <div className="w-[250px] lg:w-[350px] h-[60px] flex items-center justify-center">
          <p className="text-4xl lg:text-5xl text-black border-b-[2px] border-[#80B840] transition-transform duration-500 hover:scale-110">
            About <span className="text-4xl lg:text-5xl text-[#80B840]">Me</span>
          </p>
        </div>
        <div className="bg-white w-[90%] lg:w-[1100px] h-auto border-[1px] border-[#80B840] rounded-md p-3 lg:p-5 flex items-center justify-center opacity-0 animate-fadeIn delay-200">
          <article className="text-wrap ...">
            <p className="text-md lg:text-lg text-gray-700 transition-opacity duration-700">
              I am working as a Front-End Developer with 2 years of experience
              in creating engaging web applications. My skill set includes HTML,
              CSS, and JavaScript, which I use to craft responsive and
              user-friendly interfaces. I have also worked extensively with
              React Native for Android app development, blending my web
              development skills into the mobile ecosystem. I am always eager to
              learn new technologies to enhance my capabilities. Let's build
              something amazing together!
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Aboutuscontent;
