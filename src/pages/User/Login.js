import React from 'react'
import { Form, Input, Button, Checkbox ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '@/pages/User/login.less'
import { newApi } from '@/utils/newApi'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    state={
        Yzm:true
    }
    onFinish = values => {
        let obj = {
            userName:values.username,
            passWord:values.password,
        }
        // console.log(values)
        // 发送注册请求
        newApi("/sampleLogin",obj).then((res)=>{
            console.log(res)
            if(res.code == "200"){
                message.success("登录成功！")
                const {history} = this.props
                localStorage.setItem("userName",res.result)
                localStorage.setItem("flag",0)
                history.push("/pageView")
            }else{
                message.error("登录失败！")
                let flag = JSON.parse(localStorage.getItem("flag"));
                console.log(flag)
                if(flag == 0){
                    localStorage.setItem("flag",1)
                }else{
                    flag += 1 
                    localStorage.setItem("flag",flag)
                }
                if(flag >= 3){
                    this.setState({
                        Yzm:false
                    })
                }
            }
        })
    };
    render() {
        return (
            <div className="login">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="Yzm"
                        hidden={this.state.Yzm}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="验证码"
                            placeholder="请输入验证码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>
                        <Link className="En" to="/enroll">还没账号？立即注册</Link>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           登录
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
}
export default Login;