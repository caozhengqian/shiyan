import React, {useState, useEffect, useContext} from 'react';

import Carousel from "./com/Carousel";
import Slides from "./com/Slides";
import Slide from "./com/Slide";
import Controls from "./com/Controls";
import IconButton from "./com/IconButton";
import ProgressBar from "./com/ProgressBar";
import SlideNav from "./com/SlideNav";
import SlideNavItem from "./com/SlideNavItem";
import SpacerGif from "./com/SpacerGif";

// import "./whatevs/index.css";
import slides from "./whatevs/slides";
import Alert from "@reach/alert";
import VisuallyHidden from "@reach/visually-hidden";
import {
    FaPlay,
    FaPause,
    FaForward,
    FaBackward
} from "react-icons/fa";
let SLIDE_DURATION = 3000;
export default function Slidess(props) {
    // const themeContext = useContext(ThemeContext);
    const [name, setName] = useState('Mary');
    useEffect(() => {

    });

    function handlenameChange(value, e) {
        console.info(value);
        setName(e.target.value)
    }

    return (
        <div className="Slides">
            <Carousel>
                <input value={name} onChange={handlenameChange.bind(this, "name")}/>
                <Slides/>
            </Carousel>

        </div>
    )
}