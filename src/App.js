import React from 'react'

class App extends React.Component {
    render() {
        const store = this.props.store
        const num = store.getState()
        const addGun = this.props.addGun
        const minusGun = this.props.minusGun
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={() => store.dispatch(addGun())}>ADD</button>
                <button onClick={() => store.dispatch(minusGun())}>MINUS</button>
                <button onClick={() => store.dispatch(addGunAsync())}>MINUS in 2 seconds</button>
            </div>)
    }
}

export default App