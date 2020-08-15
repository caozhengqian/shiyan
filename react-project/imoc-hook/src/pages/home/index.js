import React from 'react';
import "./index.less";
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="home">
                <div>
                    <Link to="/test" >
                        Test样式
                    </Link>
                </div>
                <div>
                    <Link to="/hook" >
                        react conf 2018 Greeting
                    </Link>
                </div>
                <div>
                    <Link to="/media" >
                        react conf 2018 Media
                    </Link>
                </div>
                <div>
                    <Link to="/slides" >
                        react conf 2018 轮播图
                    </Link>
                </div>
                <div>
                    <Link to="/reactCom" >
                        react官网，react哲学。
                    </Link>
                </div>
            </div>
        );
    }
}