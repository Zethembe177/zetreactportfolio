import React from 'react';

const projects = [
  {
    name: "Zet React Quiz Game",
    image: "/path-to-image/quiz-game.jpg", // update with correct image path or import
    github: "https://github.com/Zethembe177/zet-react-quiz-game",
    live: "https://app.netlify.com/projects/zet-react-quiz-game/",
  },
  {
    name: "Digital Card",
    image: "/path-to-image/digital-card.jpg",
    github: "https://github.com/Zethembe177/digital-card",
    live: "https://app.netlify.com/projects/zethembe-digital-card/",
  },
  // Add more projects if you want
];

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">My recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Items */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                         flex justify-center text-center items-center mx-auto content-div bg-cover bg-center"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 w-full h-full flex flex-col justify-center items-center rounded-md">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-pink-600 text-white font-bold text-lg
                                 hover:bg-pink-700 transition duration-300"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-pink-600 text-white font-bold text-lg
                                 hover:bg-pink-700 transition duration-300"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> {/* closing grid container */}
      </div>
    </div>
  );
};

export default Projects;
