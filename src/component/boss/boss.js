import React, {
    Component
} from 'react'
import { connect } from 'react-redux'
import {
    Card,
    WhiteSpace,
    WingBlank
} from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.props.getUserList('genius')
    }
    render() {
        const CardHeader = Card.Header
        const CardBody = Card.Body
        return (
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userList.map(v => {
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