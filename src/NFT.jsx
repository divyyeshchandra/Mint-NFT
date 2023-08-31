import abi from "./abis/src/contracts/NFT.sol/NFT.json";
import address from "./abis/contractAddress.json";
import { getGlobalState, setGlobalState } from "./store";
import { errors, ethers } from "ethers";

const { ethereum } = window;
const contractAddress = address.address;
const contractAbi = abi.abi;
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`;

const getEthereumContract = () => {
  const connectedAccount = getGlobalState("connectedAccount");
  console.log(connectedAccount);
  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    return contract;
  } else {
    return getGlobalState("contract");
  }
};

const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const chainId = "0x5";
    // if (chainId != ethereum.chainId) {
    //   reportError("Connect to Goerli Testnet to proceed further.");
    //   return;
    // }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });
    window.ethereum.on("accountsChanged", async () => {
      setGlobalState("connectedAccount", accounts[0]);
      await isWalletConnected();
    });
    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0]);
    } else {
      alert("Please connect wallet.");
      console.log("No accounts found.");
    }
  } catch (error) {
    reportError(error);
  }
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install MetaMask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]);
  } catch (error) {
    console.log(error);
    reportError(error);
  }
};

const payToMint = async () => {
  try {
    if (!ethereum) return alert("Please install MetaMask");
    const connectedAccount = getGlobalState("connectedAccount");
    const contract = getEthereumContract();
    const amount = ethers.utils.parseEther("0.001");
    await contract.payToMint({
      from: connectedAccount,
      value: amount._hex,
    });
    console.log("Divyyesh Here");
    window.reload.location();
  } catch (error) {
    reportError(error);
  }
};

const loadNfts = async () => {
  try {
    if (!ethereum) return alert("Please install MetMask");
    const contract = getEthereumContract();
    const nfts = await contract.getAllNFTs();
    console.log(structuredNfts(nfts));
    setGlobalState("nfts", structuredNfts(nfts));
  } catch (error) {
    reportError(error);
  }
};

const structuredNfts = (nfts) =>
  nfts
    .map((nft) => ({
      id: Number(nft.id),
      url: opensea_uri + nft.id,
      buyer: nft.buyer,
      imageURL: nft.imageURL,
      cost: parseInt(nft.cose._hex) / 10 ** 18,
      Timestamp: new Date(nft.timestamp.toNumber()).getTime(),
    }))
    .reverse();

const reportError = (error) => {
  console.log(error.message);
  throw new Error("No ethereum object, Connect to Goerli Testnet on MetaMask");
};

export { isWalletConnected, connectWallet, payToMint, loadNfts };
