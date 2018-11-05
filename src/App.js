import React from 'react'
import { Button, List } from 'antd-mobile'
class App extends React.Component {
  render() {
    const boss = '李云龙'
    return (<div>
      <h2>独立团,团长是{boss}</h2>
      <Yiying boss='一营长'></Yiying>
      <Qibinglian boss='奇兵连连长'></Qibinglian>
    </div>)
  }
}

function Qibinglian(props) {
  return <h2>{props.boss}，冲啊</h2>
}

class Yiying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soldiers: [
        'soldier1',
        'soldier2',
        'soldier3'
      ]
    }
    this.addSoldier = this.addSoldier.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  addSoldier() {
    console.log('addSoldier')
    this.setState({
      soldiers: [
        ...this.state.soldiers,
        'new Soldier' + Math.random()
      ]
    })
  }

  render() {
    // const boss = '一营长'
    console.log('组件正在加载中...')
    const ListItem = List.Item
    return (<div>
      <h2>一营，boss是{this.props.boss}</h2>
      <Button type='primary' onClick={this.addSoldier}>新兵入伍</Button>
      <List renderHeader={() => '士兵列表'}>
        {this.state.soldiers.map(v => <ListItem key={v}>{v}</ListItem>)}
      </List>
    </div>)
  }
}
export default App