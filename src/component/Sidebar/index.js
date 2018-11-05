import React, { Component } from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

class Sidebar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            collapsed: false
        };

        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed () {
        this.setState({
            collapsed: true
        });
    }

    render () {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <SubMenu key="sub1" title={'G1'}>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sidebar;
