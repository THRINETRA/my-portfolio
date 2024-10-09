import React from "react";

interface ProjectCardsProps {
  titledata: string;
  descriptionsdata: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ titledata, descriptionsdata }) => {
  return (
    <>
      <div className="w-[300px] h-[300px] md:w-[auto] h-[auto] lg:w-[auto] h-[auto]  rounded-xl border border-[#70A038] bg-white">
        <div className="w-full h-[80px] md:h-[90px] lg:h-[100px] bg-gradient-to-r from-[#70A038] to-black rounded-t-xl flex flex-row justify-center items-center bg-opacity-70 p-2">
          <div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900">
              Project : <span className="text-white">{titledata}</span>
            </p>
          </div>
        </div>
        <div className="p-3 sm:h-[auto] w-full ">
          <p className="text-sm md:text-base lg:text-md p-2 text-gray-600 lg:text-xl md:text-xl p-2 ">
            {descriptionsdata}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
