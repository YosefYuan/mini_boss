import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Login from './container/login/login'
import Register from './container/register/register'

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
