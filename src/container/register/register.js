import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
        this.register = this.register.bind(this)
    }
    register() {
        console.log(this.state)
    }
    handleChange(key, val) {
        this.setState({
            [key]:val
        })
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <List>
                    <InputItem
                        onClick={v => { this.handleChange('user', v) }}
                    >用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onClick={v => { this.handleChange('pwd', v) }}
                        type='password'
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onClick={v => { this.handleChange('repeatpwd', v) }}
                        type='password'
                    >确认密码</InputItem>
                </List>
                <WhiteSpace />
                <RadioItem
                    onClick={() => { this.handleChange('type', 'genius') }}
                    checked={this.state.type === 'genius'}>牛人</RadioItem>
                <RadioItem
                    onClick={() => { this.handleChange('type', 'boss') }}
                    checked={this.state.type === 'boss'}>BOSS</RadioItem>
                <WhiteSpace />
                <Button onClick={this.register} type='primary'>注册</Button>
            </div>
        )
    }
}

export default Register