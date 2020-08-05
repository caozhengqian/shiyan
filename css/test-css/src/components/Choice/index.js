import React from 'react';
import "./index.less";

export default class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="choice">
                <p>，和</p>
                <div className="he">
                    <div>
                        一个div
                    </div>
                    <p>一个p</p>
                </div>
                <p>空格 &nbsp;&nbsp;&nbsp;内部所有</p>
                <div className="inAll">
                    <div>
                        一个div
                        <div>第一个里面的div</div>
                    </div>
                    <div>
                        第二个div
                    </div>
                    <p>一个p</p>
                </div>
                <p>.father&gt;div 父元素为 father的所有 &lt;div&gt; 元素</p>
                <div className="father">
                    <p>
                        一个div
                        <div>第一个里面的div</div>
                        <p>第一个div里的p
                            <span>
                                div里的p里的div
                            </span>
                        </p>
                    </p>
                    <div>
                        第二个div
                    </div>
                    <p>一个p</p>
                </div>

                <p>p+div 同级紧接在.p后面的div</p>
                <div className="fa">
                    <p>
                        第一个p
                        <div>第一个里面的div</div>
                        <p>第一个div里的p
                            <div>
                                div里的p里的div
                            </div>
                        </p>
                    </p>
                    <div>
                        第二个div
                    </div>
                    <div>
                        第二个div2222
                    </div>
                    <p>第二个p</p>
                    <div>第三个div</div>
                </div>

                <p>p~div 同级紧接在.p后面的所有div</p>
                <div className="fa1">
                    <p>
                        一个div
                        <div>第一个里面的div</div>
                        <p>第一个div里的p
                            <div>
                                div里的p里的div
                            </div>
                        </p>
                    </p>
                    <div>
                        第二个div
                    </div>
                    <div>第三个div</div>
                </div>
            </div>
        );
    }
}