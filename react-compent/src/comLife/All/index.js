import React from 'react';
import "./index.less";

import One from "./One";
import Two from "./Two"

export default class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            change:true
        };
    }
    //新建、更新，都会走
    static getDerivedStateFromProps(){
        console.info("=>All--getDerivedStateFromProps");
        return "";
    }
    //新建render后
    componentDidMount() {
        console.info("=>All--componentDidMount");
    }

    //更新前,不返回会报错
    // shouldComponentUpdate(nextProps, nextState){
    //     console.info("=>All--shouldComponentUpdate");
    // }
    //更新render后，
    getSnapshotBeforeUpdate(){
        console.info("=>All--getSnapshotBeforeUpdate");
        return null;
    }
    //getSnapshotBeforeUpdate 之后
    componentDidUpdate(){
        console.info("=>All--componentDidUpdate");
    }
    //卸载前
    componentWillUnmount(){
        console.info("=>All--componentWillUnmount");
    }

    handleClick = (e)=>{
        console.info("ee=",e)
        this.setState({change:!this.state.change})
    };
    render() {
        return (
            <div className="All-div" onClick={this.handleClick}>
                <p className="p-point">{this.state.change+''}</p>
                <One/>
                <Two/>
            </div>
        );
    }
}