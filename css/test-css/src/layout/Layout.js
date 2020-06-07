import React from 'react';
import {Link} from 'react-router-dom'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Link to="/vh" >vh100,上下3个div，中间div高度100%。</Link>
            </div>
        );
    }
}