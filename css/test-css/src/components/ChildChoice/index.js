import React from 'react';
import "./index.less";

export default class ChildChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="childChoice">
                <p>first-of-type， &lt;p&gt; 元素的每个 &lt;p&gt; 元素</p>
                <p>div里的div里的p列表</p>
                <div className="first-of-type">
                    <div>
                        <div>
                            <p>
                                第一个p
                            </p>
                            <p>
                                第二个p
                            </p>
                            <p>
                                第三个p
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}