import axios from "axios"
import { getRedirectPath } from "../utils"
const AUTH_SUCCESS = "AUTH_SUCCESS"
const ERROR_MSG = "ERROR_MSG"
const LOAD_DATA = "LOAD_DATA"

const initState = {
	redirectTo: "",
	user: "",
	msg: "",
	type: ""
}

export function user(state = initState, action) {
	switch (action.type) {
	case AUTH_SUCCESS:
		return { ...state, msg: "", redirectTo: getRedirectPath(action.payload), ...action.payload }
	case LOAD_DATA:
		return { ...state, ...action.payload }
	case ERROR_MSG:
		return { ...state, redirectTo: "", msg: action.msg }
	default:
		return state
	}
}

function _errorMsg(msg) {
	return { msg, type: ERROR_MSG }
}

function _authSuccess(payload) {
	return { payload, type: AUTH_SUCCESS }
}

export function register({ user, pwd, repeatpwd, type }) {
	if (!user || !pwd || !type) {
		return _errorMsg("用户名和密码必须输入")
	}
	if (pwd != repeatpwd) {
		return _errorMsg("密码和确认密码不一致")
	}
	return dispatch => {
		axios.post("/user/register", { user, pwd, type }).then(res => {
			if (res.status == 200 && res.data.code == 0) {
				dispatch(_authSuccess(res.data.data))
			} else {
				dispatch(_errorMsg(res.data.msg))
			}
		})
	}
}

export function login({ user, pwd }) {
	if (!user || !pwd) {
		return _errorMsg("用户名和密码必须输入")
	}
	return dispatch => {
		axios.post("/user/login", { user, pwd }).then(res => {
			if (res.status == 200 && res.data.code == 0) {
				dispatch(_authSuccess(res.data.data))
			} else {
				dispatch(_errorMsg(res.data.msg))
			}
		})
	}
}

export function loadData(userinfo) {
	return { type: LOAD_DATA, payload: userinfo }
}

export function update(data) {
	return dispatch => {
		axios.post("/user/update", data).then(res => {
			if (res.status == 200 && res.data.code == 0) {
				dispatch(_authSuccess(res.data.data))
			} else {
				dispatch(_errorMsg(res.data.msg))
			}
		})
	}
}
