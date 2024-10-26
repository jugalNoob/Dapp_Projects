
import React, { useContext } from 'react';
import { MyContext } from './ApiEth/Eth'; // Ensure correct path to Means
// import { ethers } from 'ethers';
function Sol() {
    const context = useContext(MyContext);

    if (!context) {
        return <div>Context is not available. Ensure provider wraps this component.</div>;
    }

    const { provider, signer, address ,balanaces  ,block, network ,gasprice} = context;

    console.log(provider , signer , address , balanaces);

      const balanceAsNumber = parseFloat( balanaces);
  console.log("Balance as number:", balanceAsNumber);

  console.log("get Block Number" , block)
  console.log(JSON.stringify(network, null, 2)); // Pretty-print the object




        // // Format the gas price to Gwei
        // const gasPriceInGwei = ethers.utils.formatUnits(gasprice, "gwei");

        // // Log the gas price
        // console.log("Current Gas Price:", gasPriceInGwei, "Gwei");

 
//   // Convert BigNumber to a string, then to a number
//   const balanceInEther = ethers.utils.formatEther(balanaces ); // Convert to Ether (floating-point)

//   console.log("Balance in Ether:", balanceInEther); // This will show the balance in Ether as a human-readable string

//   // If you want to convert it to a number, you can do this (careful with precision):
//   const balanceAsNumber = parseFloat(balanceInEther);
//   console.log("Balance as number:", balanceAsNumber);


    return (
        <div>
            {/* {provider ? (
                <>
                    <p>Signer: {signer ? signer.toString() : 'No signer available'}</p>
                    <p>Address: {address || 'No address available'}</p>
                </>
            ) : (
                <p>Provider not connected. Please ensure MetaMask is installed and connected.</p>
            )} */}
        </div>
    );
}

export default Sol;



// import { ethers } from 'ethers';
// import React, { useEffect, useState } from 'react';
// function Sol() {

//     const [state, setState] = useState({
//         provider: null,
//         signer: null,
//         address: null,
//       });


//       useEffect(() => {
//         const Checker = async () => {
//           try {
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const accounts = await provider.send('eth_requestAccounts', []);
//             const signer = provider.getSigner();
//             const address = await signer.getAddress();
//             setState({ provider, signer, address });
//           } catch (error) {
//             console.error('Error fetching user account:', error);
//           }
//         };
//         Checker();
//       }, []);
    

//       const GrtInof=()=>{

//         const {address}=state
//         console.log(address)
//       }

//       GrtInof()

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Sol
