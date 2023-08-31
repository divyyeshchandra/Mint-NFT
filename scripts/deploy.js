const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const base_uri =
    "https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/";
  const Contract = await ethers.getContractFactory("NFT");
  const contract = await Contract.deploy("NFT AI", "NDC", base_uri);

  await contract.deployed();

  console.log(`NFT Contract Address: ${contract.target}`);

  const address = JSON.stringify({ address: contract.address }, null, 4);

  fs.writeFile("./src/abis/contractAddress.json", address, "utf8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
