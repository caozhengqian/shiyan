import React from 'react';
import "./index.less";

export default class Extends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="extends">
                <div className="first">
                    i is love
                    <div className="second">
                        bbb
                        <div className="third">
                            color:red;<br/>
                            font-family: "Adobe Arabic";<br/>
                            font-size: 30px;<br/>
                            text-align: center;<br/>
                            line-height:60px;<br/>
                            letter-spacing: 30px;//字母间距、汉字间距<br/>
                            word-spacing: 30px;//单词间距 i am love<br/>
                            text-transform:capitalize;//uppercase,lowercase<br/>
                            visibility:visible;<br/>
                            cursor:pointer;
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}