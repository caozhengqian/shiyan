import React from 'react';
import "./index.less";
import classnames from 'classnames';
import One from "./One";

export default class LessStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        // let css = classnames('foo')

        return (
            <div className="lessStyle-div">
                <div>lessYANGSHI</div>

                <One/>
            </div>
        );
    }
}