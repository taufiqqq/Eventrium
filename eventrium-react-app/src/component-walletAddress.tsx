import { PeraWalletConnect } from '@perawallet/connect';
//import algosdk, { waitForConfirmation } from 'algosdk';
import { useEffect, useState } from 'react';

// Create the PeraWalletConnect instance outside the component
const peraWallet = new PeraWalletConnect();

// The app ID on testnet
//const appIndex = 122184273;

// connect to the algorand node
//const algod = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', 443);

function WalletAddress() {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // reconnect to session when the component is mounted
    peraWallet.reconnectSession().then((accounts) => {
      // Setup the disconnect event listener
      peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
    
      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });

  }, []);

  return (
      <div>
        <div><a className="btn-wallet"
          onClick={
            isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick
          }>
          {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
        </a></div>
      </div>
  );

  function handleConnectWalletClick() {
    peraWallet.connect().then((newAccounts) => {
      // setup the disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

      setAccountAddress(newAccounts[0]);
    });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }

  }


export default WalletAddress;
