import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
    null,
    { loadData }
)
class AuthRoute extends Component {
    componentDidMount() {
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        axios.get('/user/info')
            .then(res => {
                console.log({ res })
                if (res.status == 200) {
                    console.log({ res })
                    if (res.data.code == 0) {
                        // TODO successful after login
                        console.log(res.data.data)
                        this.props.loadData(res.data.data)
                    } else {
                        this.props.history.push('/login')
                    }
                }
            })
    }
    render() {
        return null
    }
}
export default AuthRoute