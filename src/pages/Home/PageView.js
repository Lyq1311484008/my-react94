import React from 'react'
import { Layout, Menu } from 'antd';
import '@/pages/Home/less/pageView.less'
import Con from '@/pages/Home/newData'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider } = Layout;

class PageView extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div className="PageView">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                nav 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                nav 2
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                nav 3
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ paddingLeft: 20,fontSize: 20  }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Con />

                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default PageView;