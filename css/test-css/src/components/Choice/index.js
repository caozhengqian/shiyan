import React from 'react';
import "./index.less";

export default class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="choice">
                <div className="aaaaaa">
                    <p>，分组选择器</p>
                    <div>
                        一个div
                    </div>
                    <p>一个p</p>
                </div>
            </div>
        );
    }
}