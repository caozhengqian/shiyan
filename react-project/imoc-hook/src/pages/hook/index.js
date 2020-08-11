import React, {useContext} from 'react';
import "./index.less"
import {ThemeContext,LocalContext} from "./context/ThemeContext"
import useWindowWidth from './hooks/useWindowWidth';
import useDocumentTitle from "./hooks/useDocumentTitle"
import useFormInput from "./hooks/useFormInput"


export default function Greeting(props) {
    const themeContext = useContext(ThemeContext);//获取context的样式
    const localContext = useContext(LocalContext);//获取context的内容
    const width = useWindowWidth();//自动显示宽度
    const name = useFormInput('Mary');
    const surname = useFormInput('Pop');
    useDocumentTitle(name.value+" "+surname.value);//自动改变标题
    return(
        <div className="hook">
            <div className={themeContext}>
                <p>name</p>
                <input {...name} />
                <p>surname</p>
                <input {...surname} />
                <p>localContext的值 = <span style={{color:'red'}}>{localContext}</span></p>
                <p>浏览器的宽度 = <span style={{color:'red'}}>{width}</span></p>
            </div>
        </div>
    )
}