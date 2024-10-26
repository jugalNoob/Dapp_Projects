import { ethers } from 'ethers';
import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();

function Means({ children }) {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        address: null,
       balanaces:null ,
       block:null,
       network:null,
       gasprice:null
    });

    useEffect(() => {
        const Checker = async () => {
            try {
                if (window.ethereum) {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const signer = provider.getSigner();
                    const addr = await signer.getAddress();
                  const balanaces = await provider.getBalance(addr);
              const block=    await provider.getBlockNumber()

          const network=    await provider.getNetwork()


        const gasprice = await provider.getGasPrice()

                    setState({ provider, signer, address: addr 
                         , balanaces ,block  ,network ,gasprice});
                } else {
                    console.log('Metamask not detected.');
                }
            } catch (error) {
                console.error('Error fetching account:', error);
            }
        };

        Checker();
    }, []); // Only run once on component mount

    return (
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
    );
}

export default Means;




