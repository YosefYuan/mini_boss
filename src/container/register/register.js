import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

@connect(
    state => state.user,
    { register }
)
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
        this.handleChange = this.handleChange.bind(this)
    }
    register() {
        // console.log(this.state)
        this.props.register(this.state)
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                <List>
                    <InputItem
                        onChange={v => { this.handleChange('user', v) }}
                    >用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={v => { this.handleChange('pwd', v) }}
                        type='password'
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={v => { this.handleChange('repeatpwd', v) }}
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