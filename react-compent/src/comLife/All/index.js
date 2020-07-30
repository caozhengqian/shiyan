import React from 'react';
import "./index.less";
import { Table, Tag, Space ,Button } from 'antd';

import One from "./One";
import Two from "./Two";
import Three from "./Three";

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
            change:true,
            columns :[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: (text,record,index) => <span onClick={(e)=>this._name(e,record)}>{text}</span>,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: tags => (
                        <>
                            {tags.map(tag => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';
                                if (tag === 'loser') {
                                    color = 'volcano';
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </>
                    ),
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <span>Invite {record.name}</span>
                            <span>Delete</span>
                        </Space>
                    ),
                },
            ],
            data : [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ]
        };
        console.info("=>All--constructor");
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
        e.stopPropagation();
        console.info("handleClick")
        this.setState({change:!this.state.change});
    };
    handleOn=()=>{
      this.props.addGun();
    };
    _table(record,event){
        console.info("点击了行")
        console.info(record)
        console.info(event)
        event.stopPropagation ()
    }
    _button(e){
        console.info("点击了_button")
        e.stopPropagation();
    }
    _name(e,re){
        console.info("点击了_name");
        console.info(e)
        console.info(re)
        e.stopPropagation()
    }
    render() {
        console.info("=>All--render");
        return (
            <div className="All-div" onClick={this.handleClick}>
                <p>redux的值{this.props.counter}</p>
                <button onClick={this.handleOn}>加一个redux的值</button>
                <p className="p-point">{this.state.change+''}</p>
                <Button onClick={this._button}>aaa</Button>
                <Two/>
                <One/>

                <Three/>
                <Table  onRow={record => {
                    return {
                        onClick: (event)=>this._table(record,event)// 点击行
                    };
                }} columns={this.state.columns} dataSource={this.state.data} />
            </div>
        );
    }
}

export default All