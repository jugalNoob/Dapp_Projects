const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/865786e4424b444381caac0eedc42b98"
);

const query = async () => {
    const block = await provider.getBlockNumber();
    console.log(`Current Ethereum Block Number: ${block}`);
};

query();




// To calculate the Ether value in wei for the given gas costs, you'll need to multiply the gas cost by the gas price.

// However, the gas price isn't provided here, so let's assume it's given or that you're using the current gas price. Here's the calculation formula:

// Gas Used (in units of gas) × Gas Price (in wei) = Cost (in wei)
// Since you haven't provided the gas price, I'll outline the calculations based on the formulas:

// Transaction Cost (in wei) = Transaction Cost (in gas) × Gas Price (in wei)
// Execution Cost (in wei) = Execution Cost (in gas) × Gas Price (in wei


