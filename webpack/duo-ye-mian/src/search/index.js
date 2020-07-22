'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png';
// import './css/search.css';
import '../css/search1.less';
import Test1 from "./src/test";
import Test2 from "./src/test1";

class Index extends React.Component {

    render() {
        console.info("我答应了");
        debugger;
        return <div className="search-text">
            搜索文字的内容ni dewefwdd
            <img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);