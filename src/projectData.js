import React from "react";
import { SiOpenai } from "react-icons/si";
import { MdOutlineLocalMovies } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import moviesBg from "../public/movies-image.png";
import aiBg from "../public/ai-image.png";
import ai2Bg from "../public/ai2.png";
import notesBg from "../public/notes-image.png";

export const projectsData = [
  {
    id: 1,
    title: "Movies4All",
    icon: <MdOutlineLocalMovies size={24} />,
    github: "https://github.com/jack-gable/movies-app",
    live: "https://movies-app-zeta-fawn.vercel.app/",
    desc: "This movie app leverages the OpenMovieDB API to provide users with detailed information on a wide range of films. Users can find movies, view ratings, see descriptions, and more. The app offers a sleek, user-friendly interface that makes movie discovery and management seamless and enjoyable.",
    img: moviesBg,
  },
  {
    id: 2,
    title: "ImagiGen AI",
    icon: <SiOpenai size={24} />,
    github: "https://github.com/jack-gable/dalle_clone",
    live: "",
    desc: "This DALL-E clone is an AI-powered image generation app that uses advanced models to create unique visuals from text prompts. Users can input detailed descriptions, and the app generates high-quality images that bring their ideas to life. The app is designed for creativity, offering an intuitive interface for both casual users and professionals.",
    img: aiBg,
  },
  {
    id: 3,
    title: "Sticky Notes",
    icon: <FaRegNoteSticky size={24} />,
    github: "https://www.github.com/jack-gable/sticky-notes-app",
    live: "",
    desc: "This fully React-based sticky notes app offers a seamless, interactive experience for organizing thoughts and ideas. Users can create, edit, and arrange notes in a dynamic and responsive interface. Designed for productivity, the app is lightweight and intuitive, perfect for personal or collaborative use.",
    img: notesBg,
  },
  {
    id: 4,
    title: "Todo App",
    icon: <LuListTodo size={24} />,
    github: "https://www.github.com/jack-gable/todo-list-project",
    live: "https://beamish-horse-c952b8.netlify.app",
    desc: "This todo list app is a mobile-first react app with the ability to toggle between dark/light themes. Its key features include ability to reorder todos, the use of local storage, and a dark/light theme toggle. The inspiration of this app came from frontendmentor.com.",
    img: notesBg,
  },
  {
    id: 5,
    title: "Summize",
    icon: <FiFileText size={24} />,
    github: "https://www.github.com/jack-gable/ai_summarizer",
    live: "https://stupendous-crostata-4098bf.netlify.app/",
    desc: "This AI text summarizer app is built with Next.js and React, leveraging an API to ChatGPT for powerful text summarization. Users can input lengthy articles, documents, or essays, and the app generates concise summaries by extracting key points with high accuracy.",
    img: ai2Bg,
  },
];
