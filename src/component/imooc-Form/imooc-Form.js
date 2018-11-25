import React from "react"

export default function imoocForm(Comp) {
	return class WrapperComp extends Comp {
		constructor(props) {
			super(props)
			this.state = {
				test: 666
			}
			this.handleChange = this.handleChange.bind(this)
		}
		handleChange(key, val) {
			this.setState({
				[key]: val
			})
		}
		render() {
			return (
				<Comp
					handleChange={this.handleChange}
					state={this.state}
					{...this.props}
				/>
			)
		}
	}
}
