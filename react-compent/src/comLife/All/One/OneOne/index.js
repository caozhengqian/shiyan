import React from 'react';
import "./index.less";

export default class OneOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.info("================>OneOne--constructor");
    }
    //新建、更新，都会走
    static getDerivedStateFromProps(){
        console.info("================>OneOne--getDerivedStateFromProps");
        return "";
    }

    //新建render后
    componentDidMount() {
        console.info("================>OneOne--componentDidMount");
    }

    //更新前，不返回会报错
    // shouldComponentUpdate(nextProps, nextState){
    //     console.info("================>OneOne--shouldComponentUpdate");
    // }

    //更新render后，
    getSnapshotBeforeUpdate(){
        console.info("================>OneOne--getSnapshotBeforeUpdate");
        return null;
    }
    
    //getSnapshotBeforeUpdate 之后
    componentDidUpdate(){
        console.info("================>OneOne--componentDidUpdate");
    }
    //卸载前
    componentWillUnmount(){
        console.info("================>OneOne--componentWillUnmount");
    }


    render() {
        console.info("================>OneOne--render");
        return (
            <div className="oneone">
                OneOne
            </div>
        );
    }
}