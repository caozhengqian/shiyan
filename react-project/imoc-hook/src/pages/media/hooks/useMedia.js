import React, {useState, useEffect, useContext} from 'react';
// import "./index.less"
// import {ThemeContext,LocalContext} from "./context/ThemeContext"

export default function useMedia(query) {
    // const themeContext = useContext(ThemeContext);
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    console.info(window.matchMedia("(max-width: 700px)"));
    useEffect(() => {
        let media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches)
        }
        let listener = ()=> setMatches(media.matches)
        media.addListener(listener);
        return ()=>media.removeListener(listener);
    },[query]);


    return matches
}