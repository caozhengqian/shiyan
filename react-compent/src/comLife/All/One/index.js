import React from 'react';
import "./index.less";
import OneOne from "./OneOne";

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {

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