import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route
} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reducer'
import Login from './container/login/login'
import BossInfo from './container/bossinfo/bossinfo'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute'
import './index.css'

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

function Boss() {
    return <h2>Boss页面</h2>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/bossinfo' component={BossInfo}></Route>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
