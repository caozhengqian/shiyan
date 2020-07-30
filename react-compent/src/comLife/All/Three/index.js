import React from 'react';
import "./index.less";

export default class Three extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.info("=========>Three--constructor");
    }
    //新建、更新，都会走
    static getDerivedStateFromProps(){
        console.info("=========>Three--getDerivedStateFromProps");
        return "";
    }
    //新建render后
    componentDidMount() {
        console.info("=========>Three--componentDidMount");
    }

    //更新前，不返回会报错
    // shouldComponentUpdate(nextProps, nextState){
    //     console.info("=========>Two--shouldComponentUpdate");
    // }
    //更新render后，
    getSnapshotBeforeUpdate(){
        console.info("=========>Three--getSnapshotBeforeUpdate");
        return null;
    }
    //getSnapshotBeforeUpdate 之后
    componentDidUpdate(){
        console.info("=========>Three--componentDidUpdate");
    }
    //卸载前
    componentWillUnmount(){
        console.info("=========>Three--componentWillUnmount");
    }

    render() {
        console.info("=========>Three--render");
        return (
            <div className="three">
                Three
            </div>
        );
    }
}