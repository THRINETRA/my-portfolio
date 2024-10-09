import Image from "next/image";
import React from "react";
import html from "@/app/assets/images/new-html.png";
import css from "@/app/assets/images/new-css.png";
import js from "@/app/assets/images/new-js.png";
import react from "@/app/assets/images/react-new.png";
import next from "@/app/assets/images/new-Next.js.png";
import tailwindcss from "@/app/assets/images/new-Tailwind CSS.png";
import materialui from "@/app/assets/images/Material UI.png";
import sql from "@/app/assets/images/SQL Developer.png";
import postman from "@/app/assets/images/Postman.png";
import graphql from "@/app/assets/images/GraphQL.png";
import typescript from "@/app/assets/images/new-TypeScript.png";
import mongodb from "@/app/assets/images/MongoDB.png";
import git from "@/app/assets/images/Git.png";

const Myskillcontent = () => {
  const skilimgdata = [
    { skillname: "HTML", image: html },
    { skillname: "CSS", image: css },
    { skillname: "JavaScript", image: js },
    { skillname: "React.js", image: react },
    { skillname: "Next.js", image: next },
    { skillname: "SQL", image: sql },
    { skillname: "Tailwind CSS", image: tailwindcss },
    { skillname: "Material UI", image: materialui },
    { skillname: "Postman", image: postman },
    { skillname: "GraphQL", image: graphql },
    { skillname: "TypeScript", image: typescript },
    { skillname: "MongoDB", image: mongodb },
    { skillname: "Git", image: git },
  ];

  return (
    <div id="Skill" className="flex flex-row justify-center items-center w-full h-[100vh] lg:items items-center p-5 w-full h-[100vh] items-center md:items items-center p-5 w-full h-[100vh]">
      <div className="flex flex-col justify-between gap-y-6 animate-fadeIn ">
        <div className="w-[250px] h-[60px] flex flex-row">
          <span className="text-4xl text-[#80B840] animate-bounce">My Skills</span>
        </div>
        <div className="w-[900px] h-[500px] border border-gray-500 p-5 rounded-2xl shadow-2xl flex flex-wrap justify-center gap-6 lg:items items-center p-5 w-full items-center md:items items-center p-5 w-full h-[auto]">
          {skilimgdata.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={skill.image}
                alt={`${skill.skillname} Icon`}
                className="w-[100px] h-[100px] rounded-lg object-cover border border-gray"
              />
              <p className="text-lg text-gray-700">{skill.skillname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myskillcontent;
