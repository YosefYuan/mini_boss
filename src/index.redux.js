const ADD = 'ADD'
const MINUS = 'MINUS'

// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return 10
    }
}

export function addGun(){
    return {type: ADD}
}

export function minusGun(){
    return {type: MINUS}
}

export function addGunAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        },2000)
    }
}