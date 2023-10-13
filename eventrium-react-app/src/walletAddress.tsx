import React from 'react'
import ReactDOM from 'react-dom/client'
import WalletAddress from './walletConnect'

ReactDOM.createRoot(document.getElementById('walletAddress')!).render(
    <React.StrictMode>
      <WalletAddress />
    </React.StrictMode>,
)

//return walletAddress