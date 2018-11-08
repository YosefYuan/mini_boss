import React, { Component } from 'react'
import axios from 'axios'
class AuthRoute extends Component {
    componentDidMount() {
        axios.get('user/info')
            .then(res => {
                if (res.code == 200) {
                    console.log(res.data)
                }
            })
    }
    render() {
        return <p>666</p>
    }
}
export default AuthRoute