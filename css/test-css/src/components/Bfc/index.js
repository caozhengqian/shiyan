import React from 'react';
import "./index.less";

export default class Bfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="bfc">
                <div className="hebing">
                    <div className="one">
                        margin50px,两个会被合并，按照最大的margin
                    </div>
                    <div className="two">
                        margin20px;
                    </div>
                </div>
                <div className="hebingbfc">
                    <div className="one-div" >
                        <div className="one">
                           第一个div再套一层div，overflow：hidden，就可以把margin正常显示了。
                        </div>
                    </div>
                    <div className="two">
                        margin20px;
                    </div>
                </div>
                <div className="hebingbfc-one">
                    <div className="column">
                        float:left后，margin-right：10px，不会显示的。
                    </div>
                    <div className="column">
                        使用 overflow: hidden;就可以显示了。
                    </div>
                </div>
                <div className="hebingbfc-two">
                    <div className="left"></div>
                    <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                        你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                        你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                    </p>
                </div>
                <div className="hebingbfc-three">
                    <div className="left"></div>
                    <p>左侧有float：left；右侧overflow: hidden;就可以清除左侧left 你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                        你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                        你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                    </p>
                </div>
            </div>
        );
    }
}