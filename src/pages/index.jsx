import React from "react";
import image from "../assets/bg.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import project1 from "..//assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpeg";
import CustomSVG from "@/components/svg";

export function AboutMe() {
  return (
    <div
      id="about"
      className="bg-popover pb-20 text-white "
    >
      <div className="flex justify-center">
        <Navbar />
      </div>
      <h2 className=" text-3xl font-bold my-5 justify-center flex font-lilita ">
        About me
      </h2>

      <div className="mx-auto flex flex-col items-center ">
        <div>
          <CustomSVG />
        </div>

        <div>
          <p className=" text-[14px] md:text-lg mt-6 px-5 md:w-[500px]">
            I am a highly dedicated software engineer with a strong passion for
            frontend development, complemented by extensive experience in
            backend technologies. I find great satisfaction in solving complex
            problems, where I enjoy blending design and functionality to create
            high-quality digital solutions that deliver an exceptional user
            experience. When I am not on my computer, I enjoy reading novels,
            having a walk, or playing online games.
          </p>
          <div className="flex  justify-center mt-5 ">
            <a href="#projects" className="button-link inline-block">
              <Button className=" bg-teal text-white px-4 py-2 rounded hover:bg-teal  transition duration-300">
                Go to Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Skills = () => {
  return (
    <div className=" bg-popover " id="skills">
      <h2 className="  text-5xl text-white font-bold flex justify-center font-lilita">
        Skills
      </h2>

      <div className=" p-5 mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>Frontend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vanilla JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>Mobile Application Development</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>React Native</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>Backend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>Express.js</li>
              <li>Node.js</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>Databases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>MySQL</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>Low-code Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>Weweb</li>
              <li>Xano</li>
              <li>Supabase</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>DevOps Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>Jira</li>
              <li>Trello</li>
              <li>Slack</li>
              <li>Miro</li>
              <li>Confluence</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-500">
          <CardHeader>
            <CardTitle>Source Code Management & Version Control</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5">
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const projects = [
  {
    name: "MyDiary",
    description: "This is a simple notes website, where users can add, edit or delete entries",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    image: project1,
    projectLink: "https://shii-diary.vercel.app/",
    githubLink: "https://github.com/ShiRaw11/shiiDiary",
  },
  {
    name: "Simple Todo App",
    description: "This is a todo app created using react and css.",
    technologies: ["react.js", "css"],
    image: project2,
    projectLink: "https://shii-todo-shiis-projects.vercel.app/",
    githubLink: "https://github.com/ShiRaw11/shii-todo",
  },
  {
    name: "MovieBox",
    description: "This is a website for displaying popular movies from TMDB API",
    technologies: ["react.js", "css"],
    image: project3,
    projectLink: "https://shiraw11.github.io/MovieBox11/",
    githubLink: "https://github.com/ShiRaw11/MovieBox11",
  },
  {
    name: "Sudoku app",
    description: "A simple sudoku app",
    technologies: ["react native", "tailwindcss"],
    image: project4,
    githubLink: "https://github.com/ShiRaw11/Simple_sudoku",
  },
];

export const ProjectsSection = () => {
  return (
    <div className=" mt-5 " id="projects">
      <h2 className="text-5xl font-bold text-center mb-12 font-lilita">
        Projects
      </h2>

      <div className="space-y-12 bg-white ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-row ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } items-center bg-popover rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px]`}
          >
            <div className=" h-full md:w-2/3 w-1/2  transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-teal">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            <div
              className={` h-full relative w-1/2 md:w-1/3 p-4 sm:p-6 md:p-10 bg-white shadow-inner flex flex-col justify-center items-center`}

            >
              <h3 className="text-popover text-xl sm:text-2xl font-bold mb-3">
                {project.name}
              </h3>
              <p className="text-black text-sm sm:text-base md:text-lg mb-4 break-words">
                {project.description}
              </p>

              <div className="mb-4 text-center">
                <h className="text-teal">Technologies used:</h>
                <div className="flex flex-wrap gap-2 mt-2 justify-center text-xs sm:text-sm md:text-base">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-light text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pl-5 space-x-4 mt-4">
                <a
                  href={project.projectLink}
                  className="text-[12px] md:text-[18px] md:font-semibold text-popover hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </a>
                <a
                  href={project.githubLink}
                  className="text-[12px] md:text-[18px] md:font-semibold text-popover hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-lg md:text-xl mb-4">
          If you have any questions, please reach me through the following
          channels. Thank you!
        </h1>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/kimani-edith/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://github.com/ShiRaw11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="mailto:shiikimani11@gmail.com?subject=Hello&body=I am contacting you about your portfolio website."
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

function LandingPage() {
  return (
    <>
      <div
        className="h-screen bg-popover flex flex-col justify-center items-center"
        id="home"
      >
        <div className=" text-white ">
          <h1 className="text-8xl">Hello 👋,</h1>
          <h2 className="text-5xl mt-5 text-light font-lilita">
            I am Edith Kimani,
          </h2>
          <p className="text-3xl mt-5">a software developer</p>

          <div className="connect mt-6 border border-white rounded-lg p-4 w-[300px]">
            <p className="text-lg font-semibold flex justify-center">
              Let's Connect
            </p>
            <div className="flex space-x-8 mt-6 justify-center">
              <a
                href="https://www.linkedin.com/in/kimani-edith-16a307225/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-300"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/ShiRaw11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-300"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="mailto:shiikimani11@gmail.com?subject=Hello&body=I am contacting you about your portfolio website."
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-300"
              >
                <FaEnvelope className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default LandingPage;
