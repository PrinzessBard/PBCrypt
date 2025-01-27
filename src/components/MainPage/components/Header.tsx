import { useState } from 'react'
import Icon from '../../../assets/icon-header.png'
import './Header.css'
import { createJetton } from '../../../AssetsSDK';
// import { TonConnectButton } from '@tonconnect/ui-react'

const Header = () => {
    const [jetton, setJetton] = useState({});

    const createWallet = () => {
        console.log("Function create wallet is started");
        
        setJetton(createJetton())

        console.log("Function create wallet is ended");
    }

    return (
        <div className="header">   
            <img className='logo' src={Icon} />
            <div className="logo-name">
            PBCRYPT
            </div>
            <div>
                {
                    Object.keys(jetton).length === 0 ? <button onClick={createWallet}>Click</button> : <span>Success</span>
                }
            </div>
      </div>
    )
}

export default Header;