// src/App.tsx
import { Col, Layout, Row, theme } from 'antd';

import ConnectWallet from '../../components/ui/connect-wallet/ConnectWallet';
import Sidebar from '../../components/ui/sidebar/Sidebar';

import { useState } from 'react';
import InfoCard from '../../components/info-card/InfoCard';
import NomineeStatusCard from '../../components/nominee-status-card/NomineeStatusCard';
import PolicyClaimStatusCard from '../../components/policy-claim-status-card/PolicyClaimStatusCard';
import PolicyListing from '../../components/policy-listing/PolicyListing';
import RenewInsuranceCard from '../../components/renew-insurance-card/RenewInsuranceCard';
import "./Home.scss";

const { Header, Content, Footer } = Layout;

const Home = () => {
    const { token } = theme.useToken(); // Access theme tokens
    const [selectedKey, setSelectedKey] = useState<string>("1")
    const handleMenuSelection = (key: any) => {
        setSelectedKey(key)
    }

    const renderContent = () => {
        switch (selectedKey) {
            case "1":
                // dashboard
                break;
            case "2":
                // Policies
                break;
            case "3":
                //  Claim
                break;
        }
    }

    const renderHeader = () => {
        switch (selectedKey) {
            case "1":
                return <span>Dashboard</span>
            case "2":
                return <span>Policies</span>
            case "3":
                return <span>Claims</span>
            case "4":
                return <span>Refer & Earn</span>
            case "5":
                return <span>Get a Quote</span>
        }
    }

    return (
        <Layout
            className='Dashboard'
        >
            <Layout style={{ flex: '1', display: 'flex' }}>
                <Sidebar selectedKey={[selectedKey]} setSelectedKey={handleMenuSelection} />

                <Layout className='Dashboard__content'>
                    <Header
                        className='bg-gradient--dark Dashboard__header'

                    >
                        <div className="logo" />
                        <div style={{ alignSelf: 'center' }} className='title-medium-bold'>
                            {renderHeader()}
                        </div>
                        {/* <Menu

                            className='bg-gradient--dark'
                            theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">Dashboard</Menu.Item>



                        </Menu> */}
                        <div style={{
                            marginLeft: 'auto',
                            display: 'flex',

                        }}>
                            <ConnectWallet /> {/* Place the WalletConnect component here */}
                        </div>
                    </Header>

                    <Content style={{ padding: '1.25rem' }}>
                        <Row gutter={16}>
                            <Col xs={24} sm={12} lg={8}>

                                <InfoCard width="22.5rem"
                                    innerStyle={{ height: '116px' }}
                                    outerStyle={{ height: '116px' }}
                                >
                                    <RenewInsuranceCard />

                                </InfoCard>

                            </Col>
                            <Col xs={24} sm={12} lg={8}>
                                <InfoCard width="22.5rem"
                                    innerStyle={{ height: '116px' }}
                                    outerStyle={{ height: '116px' }}
                                >
                                    <PolicyClaimStatusCard />

                                </InfoCard>
                            </Col>
                            <Col xs={24} sm={12} lg={8}>
                                <InfoCard width="22.5rem"
                                    innerStyle={{ height: '116px' }}
                                    outerStyle={{ height: '116px' }}
                                >
                                    <NomineeStatusCard />

                                </InfoCard>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <PolicyListing />
                            </Col>
                        </Row>
                    </Content>

                    {/* Footer */}
                </Layout >
            </Layout>
        </Layout>
    );
};

export default Home;
