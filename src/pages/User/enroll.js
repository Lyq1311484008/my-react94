import React from 'react'
import { Form, Input, Button , message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '@/pages/User/enroll.less'
import { newApi } from '@/utils/newApi'
import { Link } from 'react-router-dom'
class enroll extends React.Component {
    onFinish = values => {
        console.log(values);
        let obj = {
            userName:values.username,
            passWord:values.password,
            rePassWord:values.confirm
        }
        // 发送注册请求
        newApi("/sampleReg",obj).then((res)=>{
            console.log(res)
            if(res.code == "200"){
                message.success("注册成功！")
                const {history} = this.props
                history.push("/login")
            }else{
                message.error("注册失败！")
            }
        })
    };
    render() {
        return (
            <div className="enroll">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <p className="title">注册账号</p>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
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
                            placeholder="请输入密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password 
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请再次输入密码"
                        />
                    </Form.Item>
                    <Link className="En" to="/login">已有账号？立即登录</Link>
                  <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default enroll;