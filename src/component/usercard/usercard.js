import React, { Component } from "react"
import { Card, WhiteSpace, WingBlank } from "antd-mobile"
class UserCard extends Component {
	render() {
		const CardHeader = Card.Header
		const CardBody = Card.Body
		return (
			<WingBlank>
				<WhiteSpace />
				{this.props.userList.map(v => {
					return v.avatar ? (
						<Card key={v._id}>
							<CardHeader
								title={v.user}
								thumb={require(`../img/${v.avatar}.png`)}
								extra={<span>{v.title}</span>}
							/>
							<CardBody>
								{v.type == "boss" ? <div>公司: {v.company}</div> : null}
								{v.desc.split("\n").map(d => (
									<div key={d}>{d}</div>
								))}
								{v.type == "boss" ? <div>待遇: {v.money}</div> : null}
							</CardBody>
						</Card>
					) : null
				})}
			</WingBlank>
		)
	}
}

export default UserCard
