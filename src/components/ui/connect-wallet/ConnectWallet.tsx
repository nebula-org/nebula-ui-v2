import { useLogin, useLogout, usePrivy, User } from '@privy-io/react-auth';
import { Button, Dropdown, Tooltip, MenuProps, Typography } from 'antd';
import { DownOutlined, CopyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import "./ConnectWallet.scss";
import { useState } from 'react';

const { Text } = Typography;

export const Arbitrumicon = () => {
    return (
        <div
            className='NB-connect-wallet__icon'
        >
            <img
                className='NB-connect-wallet__icon__image'
                src="/images/arbitrum.png"

            />
        </div>)
}

export const WalletAddress = ({ user }: { user: User | null }) => {
    const [copied, setCopied] = useState(false);
    const text = user?.wallet?.address || "";

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch((err) => console.error('Failed to copy: ', err));
    };
    return (
        <div
            className='NB-connect-wallet__address'

        >

            <Text
                className='NB-connect-wallet__address__txt'

            >{text.slice(0, 8)}...{text.slice(-4)}</Text>
            <Tooltip title={copied ? 'Copied!' : 'Copy'}>
                <CopyOutlined
                    onClick={handleCopy}
                    className='NB-connect-wallet__address__copy'
                />
            </Tooltip>
        </div>
    )
}
const ConnectWallet = () => {
    const navigate = useNavigate()
    const { ready, authenticated, user } = usePrivy();
    const { logout } = useLogout({
        onSuccess: () => {
            console.log('User logged out');
            navigate("/")
        },
    });

    const { login } = useLogin({
        onComplete: () => {
            console.log('User logged in');
            navigate("/dashboard")
        },
    });


    const disableLogout = !ready || (ready && !authenticated);
    console.log("user: ", user)

    const items: MenuProps['items'] = [
        {
            key: "1",
            label: (<div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }} >
                <Text
                    style={{
                        color: '#A1A0A6',
                        fontWeight: 500,
                        display: 'block',
                        marginBottom: '1rem'
                    }}>{user?.email?.address}
                </Text>
                <Text style={{
                    color: '#A1A0A6',
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: '1rem'
                }}>{user?.wallet?.address}
                </Text>

            </div >)
        },
        {
            key: "2",
            label: (<Button type='default' disabled={disableLogout} onClick={logout}>Disconnect</Button>)
        }
    ]

    return (
        <Dropdown
            className='NB-connect-wallet'
            menu={{ items, className: 'NB-connect-wallet--custom' }}
            placement="bottomLeft"
            arrow
            trigger={['click']}>
            <div className='NB-connect-wallet__container'>
                <Button
                    className='NB-connect-wallet__btn'
                    style={{ height: '3rem' }}>
                    {authenticated ? (
                        <>
                            <div
                                className='NB-connect-wallet__connected'

                            >
                                <Arbitrumicon />

                                <div
                                    className='NB-connect-wallet__connected__account'

                                >
                                    <div
                                        className='NB-connect-wallet__connected__account__txt'

                                    >Account <DownOutlined
                                            style={{ fontSize: 16 }}
                                        /></div>
                                    <WalletAddress user={user} />
                                </div>
                            </div>

                        </>
                    ) : (

                        <div onClick={login}>Connect Wallet</div>
                    )}
                </Button>
            </div>
        </Dropdown>
    );
}

export default ConnectWallet