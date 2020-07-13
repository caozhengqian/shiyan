import React from 'react';
import "./index.less";
import OneOne from "./OneOne";

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //新建、更新，都会走
    static getDerivedStateFromProps(){
        console.info("=========>One--getDerivedStateFromProps");
        return "";
    }
    //新建render后
    componentDidMount() {
        console.info("=========>One--componentDidMount");
    }

    //更新前
    shouldComponentUpdate(nextProps, nextState){
        console.info("=========>One--shouldComponentUpdate");
    }
    //更新render后，
    getSnapshotBeforeUpdate(){
        console.info("=========>One--getSnapshotBeforeUpdate");
        return null;
    }
    //getSnapshotBeforeUpdate 之后
    componentDidUpdate(){
        console.info("=========>One--componentDidUpdate");
    }
    //卸载前
    componentWillUnmount(){
        console.info("=========>One--componentWillUnmount");
    }

    render() {
        return (
            <div className="one">
                One
                <OneOne/>
            </div>
        );
    }
}