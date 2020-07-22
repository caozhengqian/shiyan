import React, {  lazy } from "react";
const Calculate = lazy(() => import("./common33"));

export default class test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="test">
                testaaa
            </div>
        );
    }
}