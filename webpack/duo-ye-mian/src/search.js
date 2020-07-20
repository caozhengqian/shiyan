'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
// import './css/search.css';
import './css/search1.less';

class Search extends React.Component {

    render() {
        a = 1;
        debugger;
        return <div className="search-text">
            搜索文字的内容ni dewefwdd
            <img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);