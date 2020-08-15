import React from 'react';
import "./index.less";

export default class ChildChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="childChoice">
                <p>一、first-of-type，div里第一个p</p>
                <p>div里的div里的3个p列表</p>
                <div className="first-of-type">
                    <div style={{marginLeft:'20px'}}>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第一个p
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                第二个p
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                第三个p
                            </p>
                        </div>
                    </div>
                </div>
                <p>二、last-of-type，div里最后一个p</p>
                <p>div里的div里的3个p列表</p>
                <div className="last-of-type">
                    <div style={{marginLeft:'20px'}}>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第一个p
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                第二个p
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                第三个p
                            </p>
                        </div>
                    </div>
                </div>
                <p>三、only-of-type，div里只有一个p（可以有span）</p>
                <p>div里的div里的1个p，div里两个p</p>
                <div className="only-of-type">
                    <div style={{marginLeft:'20px'}}>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第一个p
                            </p>
                            <span style={{marginLeft:'20px'}}>第一个span</span>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第二个p
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                第二个p
                            </p>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第三个p
                            </p>
                            <span style={{marginLeft:'20px'}}>adasdasspan</span>
                        </div>
                    </div>
                </div>
                <p>四、only-child，div里只有一个p（不可以有span）</p>
                <p>div里的div里的1个p，div里两个p</p>
                <div className="only-child">
                    <div style={{marginLeft:'20px'}}>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第一个p
                            </p>
                            <span style={{marginLeft:'20px'}}>
                                第一个span
                            </span>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第二个p,同级不能有span
                            </p>

                        </div>
                    </div>
                </div>
                <p>五、p:nth-child(1)，循环div里每一层元素，第一个是p元素</p>
                <div className="nth-child">
                    <div style={{marginLeft:'20px'}}>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第一个p
                            </p>
                            <span style={{marginLeft:'20px'}}>
                                第一个span
                                <span style={{marginLeft:'20px'}}>
                                    <p style={{marginLeft:'20px'}}>还能选中？？</p>
                                </span>
                            </span>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <p style={{marginLeft:'20px'}}>
                                第二个p,
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                第二个p2,
                            </p>
                            <span style={{marginLeft:'20px'}}>aa</span>
                        </div>
                    </div>
                    <p style={{marginLeft:'20px'}}>
                        第一个p
                    </p>
                    <h1>发现另一个问题</h1>
                    <span style={{marginLeft:'20px'}}>
                        ccc,span里的p，会换行，上行空白，写上字，就不会有空白了
                        <p style={{marginLeft:'20px'}}>
                            bbb
                        </p>
                    </span>
                </div>
                <p>六、p:last-child，同级p最后一个，会循环里面每个div</p>
                <div className="last-child">
                    <p style={{marginLeft:'20px'}}>第一个p</p>
                    <div style={{marginLeft:'20px'}}>
                        <p style={{marginLeft:'20px'}}>div里面的p1</p>
                        <p style={{marginLeft:'20px'}}>div里面的p2</p>
                    </div>
                    <p style={{marginLeft:'20px'}}>第二个p</p>
                    <p style={{marginLeft:'20px'}}>第一个p</p>
                    <p style={{marginLeft:'20px'}}>第一个p</p>
                </div>
                <p>七、p:first-child，同级p第一个，会循环里面每个div</p>
                <div className="first-child">
                    <div>第一个div</div>
                    <p style={{marginLeft:'20px'}}>第一个p</p>
                    <div style={{marginLeft:'20px'}}>
                        <p style={{marginLeft:'20px'}}>div里面的p1</p>
                        <p style={{marginLeft:'20px'}}>div里面的p2</p>
                    </div>
                    <p style={{marginLeft:'20px'}}>第二个</p>
                    <p style={{marginLeft:'20px'}}>第一个</p>
                    <p style={{marginLeft:'20px'}}>第一个</p>
                </div>
                <p>八、:not(p)循环所有div，    &:not(:last-child)，not的上级，除了最后一个</p>
                <div>
                    <div className="not">
                        <div>第一个div</div>
                        <div>
                            <div>div里面的div</div>
                            <p>div里面的p1</p>
                            <p>div里面的p2</p>
                        </div>
                        <p>第一个p</p>
                    </div>
                    <div>最后一个div</div>
                </div>
            </div>
        );
    }
}