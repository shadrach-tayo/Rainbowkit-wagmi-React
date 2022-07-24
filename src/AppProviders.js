import './App.css';
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig } from 'wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, client } from './connectors';


function AppProviders({children}) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default AppProviders;
