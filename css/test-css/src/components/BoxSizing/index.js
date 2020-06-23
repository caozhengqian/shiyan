import React from 'react';
import "./index.less" ;

export default class BoxSizing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="boxSizing">
                <div className="context">
                    context-box padding-left:30px border:3px
                </div>
                <div className="border">
                    border-box padding-left:30px border:3px
                </div>
            </div>
        );
    }
}