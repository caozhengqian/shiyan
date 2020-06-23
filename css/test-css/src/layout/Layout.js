import React from 'react';
import {Link} from 'react-router-dom'
import "./index.less";
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
                        <span>(设置context-box,border-box)</span>
                    </Link>
                </div>
            </div>
        );
    }
}