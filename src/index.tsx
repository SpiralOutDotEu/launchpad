import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';

import { Mainnet, DAppProvider, Config, Goerli, Mumbai, Polygon } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

console.log(process.env.REACT_APP_POLYGON_PROVIDER)

const config: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Polygon.chainId]: process.env.REACT_APP_POLYGON_PROVIDER as string,
    [Mumbai.chainId]: process.env.REACT_APP_MUMBAI_PROVIDER as string,
  },
  pollingInterval: 100000
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <DAppProvider config={config}>
        
      <App />
      
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
