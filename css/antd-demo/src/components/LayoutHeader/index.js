import React from 'react';
import { AutoComplete ,Tooltip,Badge} from 'antd';
import {
    SearchOutlined,
    QuestionCircleOutlined,
    BellOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import styles from './index.less';
export default class LayoutHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const options = [
            { value: 'Burns Bay Road' },
            { value: 'Downing Street' },
            { value: 'Wall Street' },
        ];
        return (
            <div className="group">
                <div  className="search">
                    <Icon component={SearchOutlined}/>
                </div>
                <AutoComplete
                    style={{ width: 200,display:"inlineBlock" }}
                    options={options}
                    placeholder=""
                    filterOption={(inputValue, option) =>
                        0
                    }
                />
                <Tooltip title="帮助文档">
                    <QuestionCircleOutlined/>
                </Tooltip>
                <Badge count={12}>
                    <Icon component={BellOutlined} style={{padding:"4px",fontSize:"26px"}}/>
                </Badge>

            </div>
        );
    }
}