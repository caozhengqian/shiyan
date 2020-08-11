import React, {useState,useEffect,useContext} from 'react';
import "./index.less"
import {ThemeContext,LocalContext} from "./context/ThemeContext"

export default function Greeting(props) {
    const themeContext = useContext(ThemeContext);
    const localContext = useContext(LocalContext);
    const [name,setName] = useState('Mary');
    const [surname, setSurname] = useState('Pop');
    useEffect(()=>{
        document.title = name+ ' ' +surname;
    });
    useEffect(()=>{
       const handResize = ()=>{
           setWidth(window.innerWidth)
       }
       window.addEventListener('resize',handResize);
       return ()=>{
           window.removeEventListener('resize',handResize)
       }
    });

    const [width, setWidth] = useState(window.innerWidth);

    function handlenameChange(value,e){
        console.info(value);
        setName(e.target.value)
    }
    function handlesurnameChange(value,e){
        console.info(value);
        setSurname(e.target.value)
    }
    console.info(themeContext);
    return(
        <div className="hook">
            <div className={themeContext}>
                <p>name</p>
                <input value={name} onChange={handlenameChange.bind(this,"name")}/>
                <p>surname</p>
                <input value={surname} onChange={handlesurnameChange.bind(this,"surname")}/>
                <p>localContext的值 = <span style={{color:'red'}}>{localContext}</span></p>
                <p>浏览器的宽度 = <span style={{color:'red'}}>{width}</span></p>
            </div>
        </div>
    )
}