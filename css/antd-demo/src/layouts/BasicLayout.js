import React from 'react';
import SiderMenu from "../components/SiderMenu"
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
            <Layout>
                <SiderMenu/>
                <Layout style={{height:'100vh'}}>
                    <Header>Header</Header>
                    <Content style={{height:'100%',backgroundColor:'yellow'}}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}