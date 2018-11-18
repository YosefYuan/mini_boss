import React, {
    Component
} from 'react'
import axios from 'axios'
import {
    Card,
    WhiteSpace,
    WingBlank
} from 'antd-mobile'

class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('/user/list?type=genius')
            .then(res => {
                if (res.data.code === 0) {
                    this.setState({
                        data: res.data.data
                    })
                    console.log('data',res.data.data)
                }
            })
    }
    render() {
        const CardHeader = Card.Header
        const CardBody = Card.Body
        return (
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.state.data.map(v => {
                    return (
                        v.avatar ? <Card key={v._id}>
                            <CardHeader
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></CardHeader>
                            <CardBody>{v.desc.split('\n').map(v=>(
                                <div key={v}>{v}</div>
                            ))}</CardBody>
                        </Card> : null
                    )
                })}
            </WingBlank>
        )
    }
}

export default Boss