import  { useEffect } from 'react';
// import "./index.less"
// import {ThemeContext,LocalContext} from "./context/ThemeContext"

export default function useDocumentTitle(props) {
    // const themeContext = useContext(ThemeContext);
    useEffect(()=>{
        document.title = props;
    });
}