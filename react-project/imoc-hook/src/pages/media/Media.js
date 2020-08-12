import React, {useState, useEffect, useContext} from 'react';
// import "./index.less"
import useMedia from './hooks/useMedia'

export default function Media(query) {
    let small = useMedia("(max-width:800px)");
    let large = useMedia("(min-width:800px)");


    return (
        <div className="Media">
            <h1>Media 宽度800px会变化</h1>
            <p>
                Small ? {small ? <span style={{color:'green'}}>是的</span> : <span style={{color:'red'}}>"不是"</span>}
            </p>
            <p>
                Large ? {large ? <span style={{color:'green'}}>"是的"</span> : <span style={{color:'red'}}>"不是"</span>}
            </p>
        </div>
    )
}