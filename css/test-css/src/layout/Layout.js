import React from 'react';
import {Link} from 'react-router-dom'
import "./index.less";
import Choice from "../components/Choice";
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Layout-div">
                <div>
                    <Link to="/vh" >
                        vh100,上下3个div，中间div高度100%。
                        <span>(flex:0 0 200px;flex 1)</span>
                    </Link>
                </div>
                <div>
                    <Link to="/flexHeight" >
                        span等内联无法控制高度
                        <span>(设置less的display:inline)</span>
                    </Link>
                </div>
                <div>
                    <Link to="/lessStyle" >
                        LessStyle
                        <span>(设置less的display:inline)</span>
                    </Link>
                </div>
                <div>
                    <Link to="/boxSizing" >
                        box-sizing
                        <span>(设置context-box,border-box)</span>
                    </Link>
                </div>
                <div>
                    <Link to="/extends" >
                        属性继承
                    </Link>
                </div>
                <div>
                    <Link to="/choice" >
                        选择器
                    </Link>
                </div>
                <div className="pointer">
                    浏览器&lt; p &gt;标签自带margin<br/>
                    &lt 代表 &lt; &gt 代表 &gt;
                </div>
                <div>
                    <Link to="/weiLei" >
                        a标签伪类选择器
                    </Link>
                </div>
            </div>
        );
    }
}