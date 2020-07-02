import React from 'react';
import "./index.less";

export default class DivMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="divMore">
                <div className="first">
                    第一个div，100*100px,文本内容超出
                    要超出超出我要超出超出我要超出超出
                </div>
                <div className="two">
                    <div className="two-chao">
                        我要超出div1
                    </div>
                    <div className="two-chao">
                        我要超出div2
                    </div>
                </div>
                <div className="three">
                    <div className="three-chao">
                        lineheight50px,会被继承到下面所有元素，所以不能用
                    </div>
                    <div className="three-chao">
                        我要超出div2
                    </div>
                </div>
            </div>
        );
    }
}