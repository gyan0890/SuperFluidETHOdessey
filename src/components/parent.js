import React, {useState} from 'react'
import SuperfluidSDK from '@superfluid-finance/js-sdk';
import Web3 from 'web3';

export default function Parent() {
    let walletAddress = "";
    alert("Hello");
    async function initialisation() {
        window.init = true;
        const sf = new SuperfluidSDK.Framework({
            web3: new Web3(window.ethereum),
        });
        
        await sf.initialize()
        const walletAddress1 = await window.ethereum.request({
            method: 'eth_requestAccounts',
            params: [
              {
                eth_accounts: {}
              }
            ]
          });
          walletAddress = walletAddress1[0];

        const carol = sf.user({
            address: walletAddress,
            token: '0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947'
      });
      try {
        const details = await carol.details();
        console.log(details);
      } catch(event){
        debugger

      }

      await carol.flow({
        recipient: '0x5d519e11E98Cd230D3e8d18C12E740D449fd05cD',
        flowRate: '385802469135802'
      });
    
    const details = await carol.details();
    console.log(details);

      
    }

    if(!window.init){ 
        initialisation();
    }
    
    return (
        <div>
         
        </div>
    )
}


