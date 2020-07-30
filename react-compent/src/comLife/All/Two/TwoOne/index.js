import React from 'react';
import "./index.less";

export default class TwoOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.info("================>TwoOne--constructor");
    }
    //新建、更新，都会走
    static getDerivedStateFromProps(){
        console.info("================>TwoOne--getDerivedStateFromProps");
        return "";
    }

    //新建render后
    componentDidMount() {
        console.info("================>TwoOne--componentDidMount");
    }

    //更新前，不返回会报错
    // shouldComponentUpdate(nextProps, nextState){
    //     console.info("================>OneOne--shouldComponentUpdate");
    // }

    //更新render后，
    getSnapshotBeforeUpdate(){
        console.info("================>TwoOne--getSnapshotBeforeUpdate");
        return null;
    }
    
    //getSnapshotBeforeUpdate 之后
    componentDidUpdate(){
        console.info("================>TwoOne--componentDidUpdate");
    }
    //卸载前
    componentWillUnmount(){
        console.info("================>TwoOne--componentWillUnmount");
    }


    render() {
        console.info("================>TwoOne--render");
        return (
            <div className="twoOne">
                TwoOne
            </div>
        );
    }
}