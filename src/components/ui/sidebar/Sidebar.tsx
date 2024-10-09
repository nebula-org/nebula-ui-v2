// src/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';


import "./Sidebar.scss"
import { ClaimsIcon, DashboardIcon, PoliciesIcon, ReferAndEarnIcon, SupportIcon } from '../../icons/menu-icons';

const { Sider } = Layout;

const Sidebar = (props: { setSelectedKey: any, selectedKey: any }) => {
    const { selectedKey, setSelectedKey } = props;
    const [collapsed, setCollapsed] = useState(false);


    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='Nebula-Sidebar'>
            <Sider
                collapsible collapsed={collapsed} onCollapse={toggle}
                width={"16.5rem"} className="Nebula-Sidebar__sider">
                <Menu
                    mode="inline"
                    className="Nebula-Sidebar__sider__menu"
                    defaultSelectedKeys={['1']}
                    selectedKeys={selectedKey}
                    onSelect={(e) => setSelectedKey(e.key)}

                >
                    <Menu.Item
                        className={`custom-menu-item ${selectedKey == "1" ? 'active-menu' : ''}`}
                        key="1" icon={<DashboardIcon fill="white" marginRight='1rem' />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item
                        className={`custom-menu-item ${selectedKey == "2" ? 'active-menu' : ''}`}
                        key="2" icon={<PoliciesIcon fill="white" marginRight='1rem' />}>
                        Policies
                    </Menu.Item>
                    <Menu.Item
                        className={`custom-menu-item ${selectedKey == "3" ? 'active-menu' : ''}`} key="3" icon={<ClaimsIcon fill="white" marginRight='1rem' />}>
                        Claim
                    </Menu.Item>
                    <Menu.Item
                        className={`custom-menu-item ${selectedKey == "4" ? 'active-menu' : ''}`} key="4" icon={<ReferAndEarnIcon fill="white" marginRight='1rem' />}>
                        Refer & Earn
                    </Menu.Item>
                    <Menu.Item className={`custom-menu-item ${selectedKey == "5" ? 'active-menu' : ''}`} key="5" icon={<SupportIcon fill="white" marginRight='1rem' />}>
                        Get a Quote
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    );
};

export default Sidebar;
