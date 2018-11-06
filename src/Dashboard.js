import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'
import { Button } from 'antd-mobile';

function Erying() {
    return <h2>Erying</h2>
}
function Qibinglian() {
    return <h2>Qibinglian</h2>
}
@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        console.log(this.props)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <h2>独立团</h2>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li>
                        <Link to="/dashboard/">yiying</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/erying">erying</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/qibinglian">qibinglian</Link>
                    </li>
                </ul>
                <Route path='/dashboard/' exact component={App}></Route>
                <Route path='/dashboard/erying' component={Erying}></Route>
                <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
            </div>
        )
        return (this.props.isAuth ? app : redirectToLogin)
    }
}

export default Dashboard