import React, { Component } from "react"
import { connect } from "react-redux"
import { login } from "../../redux/user.redux"
import Logo from "../../component/logo/logo"
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile"
import { Redirect } from "react-router-dom"
import ImoocForm from "../../component/imooc-Form/imooc-Form"

@connect(
	state => state.user,
	{ login }
)
@ImoocForm
class Login extends Component {
	constructor(props) {
		super(props)
		this.login = this.login.bind(this)
		this.register = this.register.bind(this)
	}
	login() {
		this.props.login(this.props.state)
	}
	register() {
		this.props.history.push("./register")
	}
	render() {
		return (
			<div>
				{this.props.redirectTo && this.props.redirectTo != "/login" ? (
					<Redirect to={this.props.redirectTo} />
				) : null}
				<Logo />
				{this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
				<List>
					<InputItem
						onChange={v => {
							this.props.handleChange("user", v)
						}}
					>
						用户
					</InputItem>
					<InputItem
						onChange={v => {
							this.props.handleChange("pwd", v)
						}}
						type="password"
					>
						密码
					</InputItem>
				</List>
				<WhiteSpace />
				<WingBlank>
					<Button type="primary" onClick={this.login}>
						登录
					</Button>
					<WhiteSpace />
					<Button onClick={this.register} type="primary">
						注册
					</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login
