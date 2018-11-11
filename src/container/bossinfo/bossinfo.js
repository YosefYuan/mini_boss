import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatorSelector from '../../component/avator-selector/avator-selector'

class BossInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'title': '',
            'company': '',
            'money': '',
            'desc': '',
            'avator': ''
        }
    }
    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div>
                <NavBar mode="dark">bossinfo 完善信息页面</NavBar>
                <AvatorSelector
                    selectAvator={(text) => {
                        this.setState({
                            'avator': text
                        })
                    }}
                ></AvatorSelector>
                <InputItem
                    onChange={(v) => { this.onChange('title', v) }}
                >
                    招聘职位
                </InputItem>
                <InputItem
                    onChange={(v) => { this.onChange('company', v) }}
                >
                    公司名称
                </InputItem>
                <InputItem
                    onChange={(v) => { this.onChange('money', v) }}
                >
                    职位薪资
                </InputItem>
                <TextareaItem
                    onChange={(v) => { this.onChange('desc', v) }}
                    title="职位要求"
                    rows={3}
                    autoHeight
                />
                <Button type="primary">保存</Button>
            </div>
        )
    }
}

export default BossInfo