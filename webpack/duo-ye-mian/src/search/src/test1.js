import React, {  lazy } from "react";
const Calculate = lazy(() => import("./common33"));
export default class test1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="test1">
                test1bbbbbb
            </div>
        );
    }
}