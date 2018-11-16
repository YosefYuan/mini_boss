import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class NavLinkBar extends Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    render(){
        const navList = this.props.data.filter(v=> !v.hide)
        const {pathname} = this.props.location
        console.log(navList)
        const TabBarItem = TabBar.Item
        return (
            <TabBar>
                {navList.map(v=>(
                    <TabBarItem
                        key={v.path}
                        title={v.text}
                        icon={{uri:require(`./img/${v.icon}.png`)}}
                        selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
                        selected={v.path == pathname}
                        onPress={
                            ()=> {
                                this.props.history.push(v.path)
                            }
                        }
                    ></TabBarItem>
                ))}
            </TabBar>
        )
    }
}

export default NavLinkBar