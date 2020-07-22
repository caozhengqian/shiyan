import React from 'react';
import "./index.less";
import IMG from "./img/fuwuyoushi.png"
import classnames from "classnames"

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="test">
                <div className="padding">
                    <div className="paddings">
                        padding: 10px 20px 50px;
                    </div>
                </div>
                <div className="hong-bao">
                    <div className="left">
                        <span className="left-span">abc</span>
                        <img className="imgs" alt="Vue logo" src={IMG}/>
                    </div>
                    <div className="line">

                    </div>
                    <div className="right">
                            <span>领取</span>
                    </div>
                </div>
                <div className="text">
                    <div className="point">
                        <div className="">

                        </div>
                    </div>
                    <div className="text">
                        ad   afsaaafdsfsafdf

                    </div>
                </div>
                <div className="juzhong">
                    <div className="juzhong1">
                        div也会被line-height居中
                    </div>
                </div>
                <div    className={classnames('no-active', {
                    active: '2' === '1',
                })}>
sclas
                </div>
            </div>
        );
    }
}