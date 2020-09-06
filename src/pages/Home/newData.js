import React from 'react'
import { Layout } from 'antd';
import { Switch , Route , Redirect } from 'react-router-dom'
import Management from '@/pages/Home/branch/Management'
import '@/pages/Home/less/newData.less'

const { Content } = Layout;
class Con extends React.Component{
    render(){
        return (
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <p className="Nav">我是导航</p>
                <Switch>
                    <Route path="/pageView/management" component={Management} />
                    <Redirect from="/pageView" to="/pageView/management" />
                </Switch>
            </Content>
        )
    }
}
export default Con;