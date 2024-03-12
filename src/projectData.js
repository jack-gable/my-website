import { FaReact } from "react-icons/fa";
import {
	SiVite,
	SiNetlify,
	SiVercel,
	SiNextdotjs,
	SiTailwindcss,
	SiFramer,
} from "react-icons/si";
import moviePic1 from "../public/assests/img/movie-app-1.png";
import moviePic2 from "../public/assests/img/movie-app-2.png";
import todoPic1 from "../public/assests/img/todo-project-1.png";
import todoPic2 from "../public/assests/img/todo-project-2.png";
import weatherPic1 from "../public/assests/img/weather-app-1.png";
import weatherPic2 from "../public/assests/img/weather-app-2.png";

export function getProjectInfo(projectName) {
	return DATA[projectName];
}

const DATA = {
	movieSearch: {
		title: "Movie Search App",
		desc: `This movie search app is a react application that utilizes the Movie Database API. Some of 
		the key features built are the ability to favorite movies. This project showcases the my ability and 
		general interest of animations. This app utilizes the Framer-motion library to create beautiful 
		seamless animations. Some of challenges faced when creating this project were the library itself 
		as I had never played with Framer-motion before and the animations of the favorites layout. The 
		animation of the favorites layout was particularly tricky because of the movement from one component 
		to another. Some features I'd like to add in the future would be the ability for the user to lookup 
		any movie they'd like and the layout and animation of the description of the movies which I'd like 
		to change to make it its own page.`,
		tech: [
			{
				name: "React",
				Icon: FaReact,
				color: "#5ed4f4",
			},
			{
				name: "Styled-components",
				Icon: "styledComponents",
				color: "#f0abee",
			},
			{
				name: "Netlify",
				Icon: SiNetlify,
				color: "#3CAFBC",
			},
			{
				name: "Framer-motion",
				Icon: SiFramer,
				color: "#049ef7",
			},
		],
		href: "https://moviesearch-app-react.netlify.app",
		images: [moviePic1, moviePic2],
	},
	todoApp: {
		title: "Todo List App",
		desc: `This todo list app is a mobile-first react app with the ability to toggle between dark/light themes. 
				Its key features include ability to reorder todos, the use of local storage, and a dark/light theme 
				toggle. The inspiration of this app came from frontendmentor.com. Some of the challenges I faced 
				when creating this application were the overwriting of the default radio styles and the reordering 
				ability of the list. The styles of the check mark to signal completion of the todo item was challenging 
				because of the inherent difficulties faced when completely restyling html elements like the radio button. 
				This also becomes an issue because the accessibility concerns that are built into the default styles. 
				The reordering of todo list items was also a challenge because of the react works where you are unable 
				to directly query an element of the DOM. I over came this challenge by using the useRef hook to keep 
				track of the reordered item.`,
		tech: [
			{
				name: "React",
				Icon: FaReact,
				color: "#5ed4f4",
			},
			{
				name: "Styled-components",
				Icon: "styledComponents",
				color: "#f0abee",
			},
			{
				name: "Vite",
				Icon: SiVite,
				color: "#a263ff",
			},
			{
				name: "Netlify",
				Icon: SiNetlify,
				color: "#3CAFBC",
			},
		],
		href: "https://beamish-horse-c952b8.netlify.app",
		images: [todoPic1, todoPic2],
	},
	weatherApp: {
		title: "MyWeather App",
		desc: `A modern weather app that uses the OpenWeatherAPI to accurately give the user their locations weather. 
				Some key features of the app are the 5-day forecast and the search functionality that allows the user 
				to search different locations weather. 
				
				Some of the challenges faced when building this project was accurately 
				getting the users location and storing into state. Another challenge faced that was overcome was changing the 
				color of the UI based on the weather data that was received through the API. 
				
				Some features that I'd like to implement in the future would be to add more functionality of getting the 
				weather data based on the user's current location on first render. Another would be to convert this app to
				mobile platform using react-native.`,
		tech: [
			{
				name: "React",
				Icon: FaReact,
				color: "#5ed4f4",
			},
			{
				name: "Tailwind CSS",
				Icon: SiTailwindcss,
				color: "#06b6d4",
			},
			{
				name: "Next.js",
				Icon: SiNextdotjs,
				color: "#fff",
			},
			{
				name: "Vercel",
				Icon: SiVercel,
				color: "#fff",
			},
		],
		href: "https://weather-project-green.vercel.app/",
		images: [weatherPic1, weatherPic2],
	},
};
