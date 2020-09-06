import React from 'react'
import { Switch , Route , Redirect } from 'react-router-dom'
import Enroll from '@/pages/User/enroll'
import Login from '@/pages/User/Login'
import PageView from '@/pages/Home/PageView'
import '@/pages/warp.less'
class App extends React.Component{
    render(){
        return (
            <div className="warp">
                <Switch>
                    <Route path="/pageView"  render = {()=>{
                        let userName = localStorage.getItem("userName")
                        if(userName){
                            return <PageView />
                        } return <Redirect to="/login"/>
                    }} />
                    <Route path="/enroll"  component={Enroll} />
                    <Route path="/login"  component={Login} />
                    <Redirect from="/" to="/login"/>
                </Switch>
            </div>
        )
    }
}
export default App;