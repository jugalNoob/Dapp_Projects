import React, { useContext, useState } from 'react';
import { MyContext } from "../Dapps/Dapp"; // Import MyContext
import abi from "./ABI.json";
import { ethers } from 'ethers';
import axios from 'axios';

function Upload() {
  const { provider, signer, address } = useContext(MyContext);
  const [file, setFile] = useState(null);
  const [img, setImg] = useState('');
  const [add, setAdd] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const metadata = JSON.stringify({ name: "File name" });
      formData.append("pinataMetadata", metadata);
      const options = JSON.stringify({ cidVersion: 0 });
      formData.append("pinataOptions", options);

      const res = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'pinata_api_key': "11547dbbf5473e25d412",
            'pinata_secret_api_key': "d061e811156d19dc8beb5d81d444e40d74c58a8ca0d5f4054f3a3ca24a9d2be8",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const ImgHash = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
      setImg(ImgHash);
 
      try {
        const contractAddress = "0x7bE6A4e78EFaab90D9C7921D4EC64664c5552f2d";
        if (contractAddress && abi && provider && signer && img && add) {
          const contract = new ethers.Contract(contractAddress, abi, signer);
          const tx = await contract.uploadImage( ImgHash , add);
          await tx.wait();
          console.log(tx);
          setMessage('Image and address successfully recorded on the blockchain.');
        } else {
          setMessage('Missing contract address, ABI, provider, signer, image URL, or address.');
        }
      } catch (error) {
        console.log(error, "check error");
        setMessage('Failed to record on the blockchain.');
      }


    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to upload image to IPFS.');
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div>
  
   
  

   

      <form onSubmit={handleSubmit}>
      <input    type="text"
        onChange={(e) => setAdd(e.target.value)}
        placeholder='Add address'
      />

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" disabled={loading}>Upload to IPFS</button>
      </form>

     {loading && <p>Loading...</p>}
      {message && <p>{message}</p>} 
    </div>
  );
}

export default Upload;
