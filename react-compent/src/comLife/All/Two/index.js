import React from 'react';
import "./index.less";

export default class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //新建、更新，都会走
    static getDerivedStateFromProps(){
        console.info("=========>Two--getDerivedStateFromProps");
        return "";
    }
    //新建render后
    componentDidMount() {
        console.info("=========>Two--componentDidMount");
    }

    //更新前，不返回会报错
    // shouldComponentUpdate(nextProps, nextState){
    //     console.info("=========>Two--shouldComponentUpdate");
    // }
    //更新render后，
    getSnapshotBeforeUpdate(){
        console.info("=========>Two--getSnapshotBeforeUpdate");
        return null;
    }
    //getSnapshotBeforeUpdate 之后
    componentDidUpdate(){
        console.info("=========>Two--componentDidUpdate");
    }
    //卸载前
    componentWillUnmount(){
        console.info("=========>Two--componentWillUnmount");
    }

    render() {
        return (
            <div className="two">
                Two
            </div>
        );
    }
}