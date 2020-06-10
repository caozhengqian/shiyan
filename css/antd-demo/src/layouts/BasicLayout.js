import React from 'react';
import SiderMenu from "../components/SiderMenu"
import LayoutHeader from "../components/LayoutHeader"
import { Layout} from 'antd';
const { Content, Header, Footer,Sider } = Layout;
export default class BasicLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){

    }
    render() {

        return (
            <Layout className="basicLayout">
                <SiderMenu/>
                <Layout>
                    <Header  style={{backgroundColor:"#FFF",fontSize:"16px"}}>
                        <div className="header">
                            <LayoutHeader/>
                        </div>
                    </Header>
                    <Content style={{height:'100%'}}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}