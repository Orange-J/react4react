import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                selectedKeys={[this.props.location.pathname]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="/lifecycle"><Link to="/lifecycle">Lifecycle</Link></Menu.Item>
                <SubMenu key="sub1" title={'G1'}>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sidebar;
