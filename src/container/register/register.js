import React, { Component } from "react"
import Logo from "../../component/logo/logo"
import {
	List,
	InputItem,
	WingBlank,
	WhiteSpace,
	Button,
	Radio
} from "antd-mobile"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { register } from "../../redux/user.redux"
import ImoocForm from "../../component/imooc-Form/imooc-Form"

@connect(
	state => state.user,
	{ register }
)
@ImoocForm
class Register extends Component {
	constructor(props) {
		super(props)
		this.register = this.register.bind(this)
	}
	componentDidMount() {
		this.props.handleChange
			? this.props.handleChange("type", "genius")
			: () => {}
	}
	register() {
		this.props.register(this.props.state)
	}
	render() {
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
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
					<WhiteSpace />
					<InputItem
						onChange={v => {
							this.props.handleChange("pwd", v)
						}}
						type="password"
					>
						密码
					</InputItem>
					<WhiteSpace />
					<InputItem
						onChange={v => {
							this.props.handleChange("repeatpwd", v)
						}}
						type="password"
					>
						确认密码
					</InputItem>
				</List>
				<WhiteSpace />
				<RadioItem
					onClick={() => {
						this.props.handleChange("type", "genius")
					}}
					checked={this.props.state.type === "genius"}
				>
					牛人
				</RadioItem>
				<RadioItem
					onClick={() => {
						this.props.handleChange("type", "boss")
					}}
					checked={this.props.state.type === "boss"}
				>
					BOSS
				</RadioItem>
				<WhiteSpace />
				<Button onClick={this.register} type="primary">
					注册
				</Button>
			</div>
		)
	}
}

export default Register
