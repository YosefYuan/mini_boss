import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import thunk from 'redux-thunk'
import App from "./App"
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
console.log(store.getState())
function Erying() {
    return <h2>Erying</h2>
}
function Qibinglian() {
    return <h2>Qibinglian</h2>
}
class Test extends React.Component {
    render() {
        console.log(this.props)
        return <h2>测试组件</h2>
    }
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
