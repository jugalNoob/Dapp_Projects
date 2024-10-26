
import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';


export const MyContext = createContext();
function Means({ children }) {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        address: null
    });

    useEffect(() => {
        const Checker = async () => {
            try {
                // Check if window.ethereum is available
                if (window.ethereum) {
                    // Initialize provider
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    // Request accounts
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const signer = provider.getSigner();
                    const addr = await signer.getAddress();

                    // console.log( addr)
                    // console.log(accounts)
                    setState({ provider, signer, address: addr });
                } else {
                    console.log('Metamask not detected.'); // or any other appropriate action
                }
            } catch (error) {
                console.error('Error fetching account:', error);
            }
        };

        Checker();
    }, []); // Removed state dependency from useEffect


    //Dark mode all check

 
  


    return (
        <>

        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>

        </>
    );
}

export default Means;