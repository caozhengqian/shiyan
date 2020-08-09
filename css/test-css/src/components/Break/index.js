import React from 'react';
import "./index.less";

export default class Break extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="break">
                <p className="word">word: thisisaveryveryvaaaaaaaaa</p>
                <span> word-wrap: break-word;</span>
                <p className="word1">word: thisisaveryveryvaaaaaaaaa</p>
                <span>word-break: break-all;</span>
            </div>
        );
    }
}