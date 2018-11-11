import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'

@connect(
    state => state.user,
    { login }
)
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    login() {
        // console.log(this.state)
        this.props.login(this.state)
    }
    register() {
        // console.log(this.props)
        this.props.history.push('./register')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                <List>
                    <InputItem
                        onChange={v => { this.handleChange('user', v) }}
                    >用户</InputItem>
                    <InputItem
                        onChange={v => { this.handleChange('pwd', v) }}
                        type="password"
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button type='primary'
                        onClick={this.login}
                    >登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login