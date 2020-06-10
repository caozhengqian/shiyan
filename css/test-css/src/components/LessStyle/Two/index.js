import React from 'react';
import "./index.less";
import classnames from 'classnames';
export default class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="two-div">
                <div className="two-one">
                    two-one
                    <div className="lessStyle-div">
                        ddiv
                    </div>
                </div>
                two-div
            </div>
        );
    }
}