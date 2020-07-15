import React from 'react';
import "./index.less";

import One from "./One";
import Two from "./Two"

import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from '../../redux/index.redux'
@connect(
    // 你要state什么属性放到props里
    state=>({counter:state.counter}),
    // 你要什么方法，放到props里，自动dispatch
    { addGun, removeGun, addGunAsync }
)
class All extends React.Component {
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
        // console.info(this.props.counter);
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
        this.setState({change:!this.state.change});
    };
    handleOn=()=>{
      this.props.addGun();
    };
    render() {
        return (
            <div className="All-div" onClick={this.handleClick}>
                <p>redux的值{this.props.counter}</p>
                <button onClick={this.handleOn}>加一个redux的值</button>
                <p className="p-point">{this.state.change+''}</p>
                <One/>
                <Two/>
            </div>
        );
    }
}

export default All