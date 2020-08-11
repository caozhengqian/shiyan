import {useState, useEffect} from 'react';
// import "./index.less"
// import {ThemeContext,LocalContext} from "./context/ThemeContext"

export default function useWindowWidth(props) {
    // const themeContext = useContext(ThemeContext);
    useEffect(()=>{
        const handResize = ()=>{
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize',handResize);
        return ()=>{
            window.removeEventListener('resize',handResize)
        }
    });
    const [width, setWidth] = useState(window.innerWidth);
    return width
}