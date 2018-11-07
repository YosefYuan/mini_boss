import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'genius'
        }
        this.register = this.register.bind(this)
    }
    register() {
        console.log('register')
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <List>
                    <InputItem>用户</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码</InputItem>
                </List>
                <WhiteSpace />
                <RadioItem checked={this.state.type === 'genius'}>牛人</RadioItem>
                <RadioItem checked={this.state.type === 'BOSS'}>BOSS</RadioItem>
                <WhiteSpace />
                <Button onClick={this.register} type='primary'>注册</Button>
            </div>
        )
    }
}

export default Register