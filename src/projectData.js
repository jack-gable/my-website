import movieApp1 from "../public/movies4all_01.png";
import movieApp2 from "../public/movies4all_02.png";
import movieApp3 from "../public/movies4all_03.png";
import movieApp4 from "../public/movies4all_04.png";
import movieApp5 from "../public/movies4all_05.png";
import todo1 from "../public/todo_01.png";
import todo2 from "../public/todo_02.png";
import todo3 from "../public/todo_03.png";
import todo4 from "../public/todo_04.png";
import ai1 from "../public/ai_01.png";
import ai2 from "../public/ai_02.png";
import ai3 from "../public/ai_03.png";
import ai4 from "../public/ai_04.png";

export const projectsCardData = [
  {
    id: 1,
    title: "Movies4All",
    desc: "A entertainment app showcasing movies/tv shows and their details.",
    techStack: ["react", "next", "tailwind", "typescript"],
    icon: "movie",
    link: "/movies4All",
  },
  {
    id: 2,
    title: "TODOApp",
    desc: "A fully functional todo list app with theme switcher.",
    techStack: ["react", "styledcomponents", "vite"],
    icon: "todo",
    link: "/todoapp",
  },
  {
    id: 3,
    title: "Summize",
    desc: "A summarizer app built with React and integrated with the OpenAI API.",
    techStack: ["react", "tailwind", "redux", "vite"],
    icon: "ai",
    link: "/summize",
  },
];

export const projectsPageData = [
  {
    id: 1,
    slug: "movies4all",
    title: "Movies4All",
    desc: "An entertainment app showcasing movies/tv shows and their details. The app can bookmark your favorite movies and shows. Users can also search for a movie or a show. The app utilizes the TMDB API to fetch movie and show data. The app also includes a section to view the trailers for each movie or show. The app is built with React, Next.js, Tailwind, and TypeScript.",
    techStack: ["react", "next", "tailwind", "typescript"],
    links: {
      live: "https://entertainment-app-lake.vercel.app",
      code: "https://github.com/jack-gable/entertainment-app",
    },
    mainImage: movieApp1,
    purpose:
      "I built this because I wanted to learn more about Next.js and React. I also wanted to build a simple movie app that could be used to find movies and shows. I believe that this iteration of the app is a good example of how I can use Next.js and React to build a full stack web application. I think a feature that I am most proud of is the ability bookmark your favorite movies or shows and view them immediately from the bookmarks page. One major technical hurdle I had to overcome was constructing the API level in Next.js that called each fetch to retrieve data which is not like other API levels like for example in node.js. I overcame this hurdle by reading the Next.js documentation and through a series of trial and errors.",
    images: [movieApp2, movieApp3, movieApp4],
    takeAways:
      "Some things I learned while creating this project was how to effectively use Next.js to create a full stack web application. I also learned how to implement the best rendering strategy to aid the user experience and reduce lag. I also learned how to construct the API level in Next.js. Another lesson I learned along the way was Typescript and how to use it effectively to help catch bugs early in development.",
    finalImage: movieApp5,
  },
  {
    id: 2,
    slug: "todoapp",
    title: "TODO App",
    desc: "A fully functional todo list app with a dark/light theme switcher. The app allows users to add, edit, and delete tasks. The app utilizes the localStorage API to save and retrieve data. The app is built with React and Styled Components.",
    techStack: ["react", "styledcomponents", "vite", "netlify"],
    links: {
      live: "https://beamish-horse-c952b8.netlify.app",
      code: "https://github.com/jack-gable/todo-list-project",
    },
    mainImage: todo1,
    purpose:
      "This was one of my very first React projects. I wanted to build something that I thought would be very useful to me and to others. This projects has a very clean and simplistic look and feel. I think it is an example of how well react and styled components work together. These two technologies are a couple of my favorite to use. One of my favorite features of this project other than the very sleek light/dark toggle, is the ability for users to rearrange their todo list order.",
    images: [todo2, todo3],
    takeAways:
      "Some things I learned while creating this project was how to effectively use CSSinJS to create very fast user experience. I also learned the React ecosystem by integrating each one seamlessly. This project was very fun build and introduced me to the love of front-end development.",
    finalImage: todo4,
  },
  {
    id: 3,
    slug: "summize",
    title: "Summize",
    desc: "A summarizer app built with React and integrated with the OpenAI API. The app allows users to get a very concise summary of articles with the help of the OpenAI API. The project is built with React and Tailwind CSS. It also uses redux for keeping track of previous articles and summaries.",
    techStack: ["react", "tailwind", "redux", "vite", "netlify"],
    links: {
      live: "https://stupendous-crostata-4098bf.netlify.app",
      code: "https://github.com/jack-gable/ai_summarizer",
    },
    mainImage: ai1,
    purpose:
      "I built this project because I wanted utilize the most in demand technology of today which is AI specifically LLMs. This project has taught me a lot about LLMs and how they can be used in a variety of applications. I also learned how to use Redux for state management. Along with learning about LLMs and their use cases, I also wanted to create something where users could get a taste for the power of AI bu t in a sleek modern web app. I think this project could be improved in the future by adding more information about the LLMs and their use cases. And the ability to use the OpenAI API to do more than just summarize text.",
    images: [ai2, ai3],
    takeAways:
      "Some lessons I learned while building this app was how powerful LLMs are and how to use them effectively in different applications. I also learned how to use Redux for state management, which can be cumbersome and confusing to use when starting out. I feel that completing this project has strengthened my understanding of React and its ecosystem.",
    finalImage: ai4,
  },
];
