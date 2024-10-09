import React from 'react';
import ReactDOM from 'react-dom/client';

import { PrivyProvider } from '@privy-io/react-auth';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import customTheme from './theme';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={process.env.REACT_APP_PRIVY_APP_ID!}
      config={{
        // Display email and wallet as login methods
        loginMethods: ['email', 'wallet', 'google'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <ConfigProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>

    </PrivyProvider>
  </React.StrictMode>,
);


