import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from "../Dapps/Dapp"; // Import MyContext
import abi from "./ABI.json";
import { ethers } from 'ethers';

function Display() {
  const { provider, signer, address } = useContext(MyContext);
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(false);

  // Check Number of addresses
  const Clicked = async () => {
    try {
      const contractAddress = "0x7bE6A4e78EFaab90D9C7921D4EC64664c5552f2d";
      console.log(address, "address");
      if (contractAddress && abi && provider) {
        try {
          const contract = new ethers.Contract(contractAddress, abi, provider);
          const tickets = await contract.checkNum();
          console.log(tickets.toString());
        } catch (error) {
          console.log(error, "check error");
        }
      } else {
        console.log("Contract address, ABI, or provider is missing.");
      }
    } catch (error) {
      console.log("Error in oneall:", error);
    }
  }

  // Check all Information about Uploaded Images and addresses
  useEffect(() => {
    const Detail = async () => {
      try {
        setLoading(true);
        const contractAddress = "0x7bE6A4e78EFaab90D9C7921D4EC64664c5552f2d";
        if (contractAddress && abi && provider && signer) {
          try {
            const contract = new ethers.Contract(contractAddress, abi, signer);
            const tickets = await contract.checkUp();
            const all = tickets.join(',');
            const one = all.split(',');
            console.log(one);
            setShow(one);
          } catch (error) {
            console.log(error, "check error");
          }
        } else {
          console.log("Contract address, ABI, provider, or signer is missing.");
        }
      } catch (error) {
        console.log("Error in Detail:", error);
      } finally {
        setLoading(false);
      }
    };
    Detail();
  }, [provider, signer]);

  return (
    <div>
      {/* First row class Line */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        show.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))
      )}

      {/* Last row class Line */}
      <br />
      <br />

      {/* Check counting number */}
      <button onClick={Clicked}>Click Number</button>
    </div>
  );
}

export default Display;
