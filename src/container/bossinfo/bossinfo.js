import React, { Component } from "react"
import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile"
import AvatarSelector from "../../component/avatar-selector/avatar-selector"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { update } from "../../redux/user.redux"

@connect(
	state => state.user,
	{ update }
)
class BossInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			company: "",
			money: "",
			desc: "",
			avatar: ""
		}
	}
	onChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	render() {
		const path = this.props.location.pathname
		const redirectTo = this.props.redirectTo
		return (
			<div>
				{redirectTo && redirectTo != path ? <Redirect to={redirectTo} /> : null}
				<NavBar mode="dark">bossinfo 完善信息页面</NavBar>
				<AvatarSelector
					selectAvatar={text => {
						this.setState({
							avatar: text
						})
					}}
				/>
				<InputItem
					onChange={v => {
						this.onChange("title", v)
					}}
				>
					招聘职位
				</InputItem>
				<InputItem
					onChange={v => {
						this.onChange("company", v)
					}}
				>
					公司名称
				</InputItem>
				<InputItem
					onChange={v => {
						this.onChange("money", v)
					}}
				>
					职位薪资
				</InputItem>
				<TextareaItem
					onChange={v => {
						this.onChange("desc", v)
					}}
					title="职位要求"
					rows={3}
					autoHeight
				/>
				<Button type="primary" onClick={() => this.props.update(this.state)}>
					保存
				</Button>
			</div>
		)
	}
}

export default BossInfo
