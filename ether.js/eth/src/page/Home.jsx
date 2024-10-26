import React, { useContext } from 'react';

import { MyContext } from "./ApiEth/Eth"; // Import MyContext from Means


function Home() {

  const { provider, signer, address } = useContext(MyContext );






  // const {check}=useContext(MyChanging)





    return (
        <div>

     
        </div>
    );
}

export default Home;
