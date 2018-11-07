import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Login extends Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }
    register() {
        console.log('register')
        this.props.history.push('/register')
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>登录页</h2>
                <List>
                    <InputItem>用户</InputItem>
                    <InputItem>密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login