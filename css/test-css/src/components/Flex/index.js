import React from 'react';
import "./index.less";

export default class Flex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="flex">
                <div className="flex-in">
                    <div className="flex-in1">
                        ddiv1
                    </div>
                    <div className="flex-in2">
                        ddiv2
                    </div>
                    <div className="flex-in3">
                        ddiv3
                    </div>
                </div>
            </div>
        );
    }
}