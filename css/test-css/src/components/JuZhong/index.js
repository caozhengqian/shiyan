import React from 'react';
import "./index.less";

export default class JuZhong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="juZhong">
                <p>div(固定宽高)中的div（固定高宽）居中</p>
                <div className="center">
                    {/*<div className="fir-center">test</div>*/}
                    <div className="in-center">
                        position: relative;<br/>
                        top:50%;<br/>
                        transform: translateY(-50%);
                    </div>
                </div>
                <p style={{marginTop:'30px'}}>div(固定宽高)中的div（固定高宽）居中</p>
                <div className="center1">
                    <div className="in-center1">
                        display: flex;<br/>
                        flex-direction: row;<br/>
                        justify-content: center;<br/>
                        align-items: center;
                    </div>
                </div>
                <p style={{marginTop:'30px'}}>div(不固定)中的div（固定高宽）居中</p>
                <div className="center2">
                    <div className="in-center2">
                        父类使用<br/>
                        display: inline-block;<br/>
                        padding:30px ;
                    </div>
                </div>
                <p style={{marginTop:'30px'}}>div(固定)中的div（不固定）居中</p>
                <div className="center3">
                    <div className="in-center3">
                        父divpadding:30px ;<br/>
                        margin:30px;<br/>
                        padding:30px ;
                    </div>
                </div>
                <p style={{marginTop:'30px'}}>div(固定)span居中</p>
                <div className="center4">
                    <span className="in-center4">
                        父类使用
                            height:150px;
                             text-align: center;
                             line-height: 150px;
                    </span>
                </div>
                <p style={{marginTop:'30px'}}>div(不固定)span居中</p>
                <div className="center5">
                    <span className="in-center5">
                        父类使用
                            text-align: center;
                            padding:30px;
                        子类使用margin和padding无效
                    </span>
                </div>
                <p style={{marginTop:'30px'}}>div(不固定)span多行文本居中</p>
                <div className="center5">
                    <span className="in-center5">
                        父类使用
                            text-align: center;
                            padding:30px;
                        子类使用margin和padding无效
                    </span>
                </div>
            </div>
        );
    }
}