import axios from "axios"
import { getRedirectPath } from '../utils'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN = 'LOGIN'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo: '',
    isAuth: false,
    user: '',
    msg: '',
    type: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case LOAD_DATA:
            return { ...state, ...action.payload }
        case LOGIN:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case ERROR_MSG:
            return { ...state, isAuth: false, redirectTo: '', msg: action.msg }
        default:
            return state
    }
}

function _errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

function _registerSuccess(payload) {
    return { payload, type: REGISTER_SUCCESS }
}

function _loginSuccess(payload) {
    return { payload, type: LOGIN }
}

export function register({ user, pwd, repeatpwd, type }) {
    if (!user || !pwd || !type) {
        return _errorMsg('用户名和密码必须输入')
    }
    if (pwd != repeatpwd) {
        return _errorMsg('密码和确认密码不一致')
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd, type })
            .then(res => {
                if (res.status == 200 && res.data.code == 0) {
                    dispatch(_registerSuccess(res.data.data))
                } else {
                    dispatch(_errorMsg(res.data.msg))
                }
            })
    }
}

export function login({ user, pwd }) {
    if (!user || !pwd) {
        return _errorMsg('用户名和密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', { user, pwd })
            .then(res => {
                if (res.status == 200 && res.data.code == 0) {
                    dispatch(_loginSuccess(res.data.data))
                } else {
                    dispatch(_errorMsg(res.data.msg))
                }
            })
    }
}

export function loadData(userinfo) {
    return { type: LOAD_DATA, payload: userinfo }
}