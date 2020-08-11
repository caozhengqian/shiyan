import {useState, useEffect, } from 'react';
// import "./index.less"
// import {ThemeContext,LocalContext} from "./context/ThemeContext"

export default function useFormInput(props) {
    // const themeContext = useContext(ThemeContext);
    const [value, setValue] = useState(props);
    useEffect(() => {

    });

    function handleChange(e) {
        setValue(e.target.value)
    }

    return{
        value,
        onChange:handleChange
    }
}