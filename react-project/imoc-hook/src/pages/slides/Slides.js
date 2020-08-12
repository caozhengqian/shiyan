import React, {useState, useEffect, useContext} from 'react';
// import "./index.less"
// import {ThemeContext,LocalContext} from "./context/ThemeContext"

export default function Slides(props) {
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
            <input value={name} onChange={handlenameChange.bind(this, "name")}/>
        </div>
    )
}