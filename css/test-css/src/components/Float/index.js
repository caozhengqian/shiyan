import React from 'react';
import "./index.less";

export default class Float extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {


    }

    render() {
        return (
            <div className="float">
                <p>背景和边框不能被撑开</p>
                <p>margin、padding有问题，浮动元素的高度被当成0，父类padding50px,浮动元素从50px往下渲染，导致下面padding没有50px</p>
                <div className="float-div">
                    <div className="float-div-left">
                        left
                    </div>
                    <div className="float-div-right">
                        right
                    </div>
                </div>
                <p className="mt3">清除浮动，父结束前最后放一个clear</p>
                <div className="float-div1">
                    <div className="float-div-left1">
                        left清除浮动
                    </div>
                    <div className="float-div-right1">
                        right清除浮动
                    </div>
                    <div className="clear">

                    </div>
                </div>
                <p className="mt3">清除浮动，父overflow:hidden;创建一个BFC</p>
                <div className="float-div2">
                    <div className="float-div-left2">
                        overflow清除浮动left
                    </div>
                    <div className="float-div-right2">
                        overflow清除浮动right
                    </div>
                </div>
            </div>
        );
    }
}