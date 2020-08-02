import React from 'react';
import "./index.less";

export default class HookReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="hook-react">
                HookReact
            </div>
        );
    }
}