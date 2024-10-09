import ProjectCards from "@/components/ProjectCard";
import React from "react";

interface Project {
  title: string;
  description: string;
}

const ProjectsDataContent: Project[] = [
  {
    title: "Beanx",
    description: `This website serves as a comprehensive solution for farmers, addressing the
    critical challenges they face in selling their products. Traditionally, farmers
    encounter significant issues due to financial constraints and the involvement of
    multiple layers of middlemen, which reduces their profitability. Our app aims to
    eliminate these barriers by providing a direct connection between farmers and
    exporters, bypassing intermediaries and enabling seamless transactions.`
  },
  {
    title: "Vithiit Careers",
    description: `I developed the Vithi Career Portal, a specialized platform designed for the HR
    department to streamline and enhance their recruitment and management
    processes. This portal enables HR professionals to efficiently perform a variety
    of activities, including job postings, candidate tracking, and application
    management. The development of the portal involved a tech stack comprising React.js,
    HTML, CSS, and JavaScript, ensuring a modern, responsive, and user-friendly
    interface. The use of React.js allowed for dynamic, component-driven
    functionality.`
  },
  {
    title: "Slay Coffee",
    description: `We developed the Slay Coffee web application to facilitate the sale of products
    through an efficient online platform. This web application is designed to
    support Slay Coffee's diverse range of franchises across multiple locations,
    providing a centralized system for customers to browse and purchase their
    favorite coffee products. The application offers a seamless shopping experience, allowing users to easily
    navigate through various product categories, check franchise-specific offers,
    and make secure transactions.`
  },
  {
    title: "URO", 
    description: `(Price Comparison & Navigation App) I am developing an Android app named URO, designed to simplify the process
    of comparing ride prices across different services. The app allows users to view
    price details for various ride-hailing apps, including Uber, Rapido, and Ola, all
    within a single interface.`
  } 
];

const MyProjects: React.FC = () => {
  return (
    <section className="lg:flex items items-center h-[100vh]   md:flex items items-center h-[100vh]  ">
    <div id="Projects" className="flex flex-col justify-center items-center p-3 w-full h-[100vh] bg-gradient-to-b from-black to-gray bg-opacity-25 lg:items items-center w-full h-[auto] md:items items-center w-full h-[auto]  sm:flex items items-center w-full h-[auto] ">
      <div className="flex flex-col justify-center items-center gap-y-5 ">
        <div>
          <span className="lg:text-4xl text-xl text-[#80B840] animate-bounce lg:text-4xl md:text-4xl">Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {ProjectsDataContent.map((project, index) => (
            <ProjectCards
              key={index}
              titledata={project.title}
              descriptionsdata={project.description}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default MyProjects;
