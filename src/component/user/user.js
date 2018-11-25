import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { Result, List, WhiteSpace, Modal } from "antd-mobile"
import browserCookies from "browser-cookies"
import { logoutSubmit } from "../../redux/user.redux"

@connect(
	state => state.user,
	{ logoutSubmit }
)
class User extends Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout() {
		const alert = Modal.alert
		alert("注销", "确认退出登录吗？", [
			{
				text: "取消",
				onPress: () => console.log("cancel")
			},
			{
				text: "确认",
				onPress: () => {
					browserCookies.erase("userid")
					this.props.logoutSubmit()
				}
			}
		])
	}
	render() {
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
		return props.user ? (
			<div>
				<Result
					img={
						<img
							src={require(`../img/${props.avatar}.png`)}
							alt={props.avatar}
							style={{ width: 50 }}
						/>
					}
					message={props.type == "boss" ? props.company : null}
					title={props.title}
				/>
				<List renderHeader={() => "简介"}>
					<Item multipleLine>
						{props.title}
						{this.props.desc.split("\n").map(v => (
							<Brief key={v}>{v}</Brief>
						))}
						{props.money ? (
							<Brief>
								薪资：
								{props.money}
							</Brief>
						) : null}
					</Item>
				</List>
				<WhiteSpace />
				<List>
					<Item onClick={this.logout}>退出登录</Item>
				</List>
			</div>
		) : (
			<Redirect to={this.props.redirectTo} />
		)
	}
}

export default User