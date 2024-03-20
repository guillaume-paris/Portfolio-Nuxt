import type { Project } from '~/types/projects';

export const projectsData: Project[] = [
  {
    title: 'My first Portfolio',
    description: 'My First Portfolio is the culmination of my initial foray into full-stack web application development. Leveraging React and TailwindCSS for the frontend and Node.js for the backend, this project served as a platform for honing my skills in these technologies. The primary objective was to delve into backend development with Node.js and explore domain deployment practices, including the acquisition of a domain name.',
    banner: "/images/first_portfolio.png",
    link: "https://github.com/guillaume-paris/Portfolio-Fullstack-React-NodeJS",
    technologyUsed: "React, TailwindCSS, Node.js, Express, MongoDB",
    collapsed: false
  },
  {
    title: 'Asset Manager',
    description: 'Asset Manager was conceived during my third internship at Dennemeyer. It represents a full-stack web application employing Angular on the frontend and .NET Core 6 on the backend, deployed on Azure. The project aimed to construct a robust web application featuring user authentication, account management, and asset tracking functionalities, fostering my understanding of backend development and cloud deployment practices.',
    banner: "images/asset_manager.png",
    link: "https://github.com/guillaume-paris/Asset-Manager",
    technologyUsed: "Angular, .NET Core 6, Azure",
    collapsed: false
  },
  {
    title: 'PyDash',
    description: 'PyDash emerged as a passion project, driven by the ambition to reimagine the game Geometry Dash using Python and the Pygame library. While drawing inspiration from existing repositories, I embarked on rewriting the game from scratch, enhancing it with a custom menu system. My future aspirations for PyDash include the integration of reinforcement machine learning to develop an AI capable of mastering levels autonomously.',
    banner: "/images/pydash.png",
    link: "https://github.com/guillaume-paris/PyDash",
    technologyUsed: "Python, Pygame",
    collapsed: false
  },
  {
    title: 'Snake Game',
    description: 'Snake Game represents another endeavor undertaken for personal enjoyment. Building upon the Game Engine I developed during my second year at Epitech, I endeavored to create a visual interface for playing the classic Snake game. Implemented in C++, this project showcases my proficiency in game development and serves as a testament to my ongoing passion for exploring new technologies and creative pursuits.',
    banner: "/images/snake_game.png",
    link: "https://github.com/guillaume-paris/SnakeGame",
    technologyUsed: "C++",
    collapsed: false
  }
];