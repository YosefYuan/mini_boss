import React from 'react'
import { connect } from 'react-redux'
import {addGun,minusGun,addGunAsync} from './index.redux'

const mapStateToProps = (state) => ({
    num: state
})
const actionCreator = {addGun,minusGun,addGunAsync}
// App = connect(mapStateToProps,actionCreator)(App)
@connect(
    (state) => ({
        num: state
    }),
    {addGun,minusGun,addGunAsync}
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>ADD</button>
                <button onClick={this.props.minusGun}>MINUS</button>
                <button onClick={this.props.addGunAsync}>MINUS in 2 seconds</button>
            </div>
        )
    }
}

export default App