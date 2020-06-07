import React from 'react';
import "./index.less"

export default class Vh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="vh">
                <div className="vh-1">aaa</div>
                <div className="vh-2">height:100vh</div>
                <div className="vh-3">ccc</div>
            </div>
        );
    }
}