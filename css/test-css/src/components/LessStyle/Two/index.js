import React from 'react';
import "./index.less";
// import classnames from 'classnames';
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
                    <p>two-one pbiaoqian</p>
                    <div className="two-three">
                        ddiv
                        <p>two-three pbiaoqian</p>
                    </div>
                </div>
                <p>pbiaoqian</p>
            </div>
        );
    }
}