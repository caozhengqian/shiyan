import React from 'react';
import "./index.less";
import {
    SearchOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
export default class FlexHeight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
            <div className="Heard">
                <div className="group">
                    <div className="flex-icon">
                        <Icon component={SearchOutlined} />
                    </div>
                </div>
                <div className="group">
                    <div className="flex-icon">
                        <Icon component={SearchOutlined} />
                    </div>
                </div>
            </div>

                </>
        );
    }
}