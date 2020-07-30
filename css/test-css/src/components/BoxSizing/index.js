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
                    《context-box width:500px;》 padding-left:30px 和 border:3px,会被计算到长度里面
                </div>
                <div className="border">
                    《border-box width:500px;》 padding-left:30px border:3px，
                </div>
            </div>
        );
    }
}