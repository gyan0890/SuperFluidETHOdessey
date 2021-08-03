import SuperfluidSDK from '@superfluid-finance/js-sdk';
import Web3 from 'web3';

const sf = new SuperfluidSDK.Framework({
    web3: new Web3(window.ethereum),
});

await sf.initialize()

export const walletAddress = await window.ethereum.request({
    method: 'eth_requestAccounts',
    params: [
      {
        eth_accounts: {}
      }
    ]
  });
      
export const carol = sf.user({
      address: walletAddress[0],
      token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
});