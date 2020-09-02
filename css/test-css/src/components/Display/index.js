import React from 'react';
import "./index.less";

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="display">
                <p>暂时没什么内容</p>
                <div className="table">
                    <div className="row">
                        <div className="cell">张三</div>
                        <div className="cell">李四 </div>
                        <div className="cell">王五</div>
                    </div>
                    <div className="row">
                        <div className="cell">张三</div>
                        <div className="cell">李四</div>
                        <div className="cell">王五</div>
                    </div>
                </div>
            </div>
        );
    }
}