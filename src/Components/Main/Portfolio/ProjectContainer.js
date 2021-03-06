import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import whakaariSm from "../../../Assets/img/Portfolio items/bonvoy.png";
import whakaariLg from "../../../Assets/img/Portfolio items/bonvoy.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/youtube.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/youtube.png";
import newsAggregator from "../../../Assets/img/Portfolio items/foodApp.png";
import spacexSm from "../../../Assets/img/Portfolio items/purplle.png";
import spacexLg from "../../../Assets/img/Portfolio items/purplle.png";
import pinterest from "../../../Assets/img/Portfolio items/Pinterest.png"
import petcare from "../../../Assets/img/Portfolio items/PatCare house.png"
import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";

const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
        {
            image: [pinterest,pinterest],
            alt: "Pinterest Webclone",
            heading: "Pinterest Web-Clone",
            p1: "Pinterest is a virtual discovery tool where users can find Images according to use case. Pinterest web clone built in react and for styling and resource use material UI and unplace API",
            l1: "https://github.com/AmbaliyaDhruv/Pinterest-web-clone",
            a1: "Github page for a project.",
            l2: "https://pinterest-web-clone-ambaliyadhruv.vercel.app/",
            a2: "Pinterest live website",
            tech:[html,css,js,react],
        },
        {
            image: [petcare,petcare],
            alt: "Petbording Site",
            heading: "Petbording App",
            p1: "Pet boarding site in this project you are found a house for your pet when you have to travel to many cities. this is a full stuck project. frontend build in react and for the backend, I have used express MongoDB and mongoose.",
            l1: "https://github.com/AmbaliyaDhruv/PetBoarding-Site-frontend",
            a1: "Github page for a project.",
            l2: "https://petboarding-pied.vercel.app/",
            a2: "Petbording App live website",
            tech:[html,css,js,react,expressjs,nodejs],
        },
        {
            image: [spacexSm, spacexLg],
            alt: "Purplle.com_web_clone",
            heading: "Purplle.com_web_clone",
            p1: "This is a clone of purplle.com, where we have used HTML, CSS, and Javascript to achieve this.",
            l1: "https://github.com/Duwesh/Purplle.com_web_clone",
            a1: "Github page for a project.",
            l2: "https://purplle.vercel.app/",
            a2: "Purplle.com_web_clone",
            tech:[html,css,js],
        },
        {
            image: [whakaariSm, whakaariLg],
            alt: "Marriott Bonvoy",
            heading: "Marriott Bonvoy web clone",
            p1: "Here we have tried to optimize the previous project cloning of Marriott_Bonvoy by adding backend to it and some more functionality in the frontend.",
            l1: "https://github.com/AmbaliyaDhruv/NewMarriott_Bonvoy_clone.github.io",
            a1: "Github page for a Marriott Bonvoy project.",
            l2: "https://masai-marriott-com.vercel.app/",
            a2: "Marriott Bonvoy live website.",
            tech:[html,css,js,expressjs,nodejs],
        },
        {
            image: [pounamunuiSm, pounamunuiLg],
            alt: "Youtube web clone",
            heading: "Youtube web clone",
            p1: "Getting familiar with google APIs by creating this simple Youtube-like app, where users can search and stream Youtube videos. Using JS, HTML and CSS.",
            l1: "https://github.com/AmbaliyaDhruv/YouTube_clone.github.io",
            a1: "Github page for a project.",
            l2: "https://ambaliyadhruv.github.io/YouTube_clone.github.io/",
            a2: "Youtube clone web project live website.",
            tech:[html,css,js],
        },
        {
            image: [newsAggregator, newsAggregator],
            alt: "Food App",
            heading: "Food App",
            p1: "A food search app, where users can search various dishes and get the full recipe of it and Implemented search functionality using JS debouncing to minimize the unnecessary api calls",
            l1: "https://github.com/AmbaliyaDhruv/FoodApp",
            a1: "Github page for a project.",
            l2: "https://food-app-ambaliyadhruv.vercel.app/index.html",
            a2: "Food App live website",
            tech:[html,css,js],
        },
      
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
