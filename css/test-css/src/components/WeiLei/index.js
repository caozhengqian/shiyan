import React from 'react';
import "./index.less";

export default class WeiLei extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="weiLei">
                <p>a标签的:link、:visited、:active、:hover</p>
                <div className="link">
                    <a href="https://www.baicu.com">未点击的a标签是黄色</a>
                    <a href="http://www.baicu.com">未点击的a标签</a>
                    <a href="http:www.d">点击过的a标签。visited</a>
                </div>


            </div>
        );
    }
}