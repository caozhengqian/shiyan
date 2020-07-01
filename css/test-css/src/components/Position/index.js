import React from 'react';
import "./index.less";

export default class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="position">
                <p>position基本有四种：static、absolute、relative、fixed</p>
                <p>static是正常生成元素,用的比较少；</p>
                <p>absolute是当前元素往上找position不为static的元素，根据他们来定位自己的位置</p>
                <p className="ml3">脱离文档流</p>
                <p className="ml3">使用left、right=0，会将没有宽度的div拉伸到100%</p>
                <p className="ml3">使用left、right=auto，拉不了100%宽度</p>
                <p>relative是相对于该元素的正常位置，进行偏移定位</p>
                <p className="ml3">不脱离文档流</p>
                <p className="ml3">使用left、right=auto和=0，都能拉100%宽度</p>
                <p>fixed，移动端用的比较多</p>
                <p className="ml3">脱离文档流</p>
                <p className="ml3">使用left、right=0，会将没有宽度的div拉伸到100%</p>
                <p className="ml3">使用left、right=auto，拉不了100%宽度</p>

                <div className="abs">
                    <div>
                        <div className="abss">
                            第二层的absolute
                        </div>
                        <div className="abs-two">
                            第二层的relative
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}