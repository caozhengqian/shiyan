import React from 'react';
import "./index.less";

export default class YouXian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="youXian">
                继承过来的属性<br/>
                元素选择符<br/>
                class选择符<br/>
                id选择符<br/>
                元素标签内样式<br/>
            </div>
        );
    }
}