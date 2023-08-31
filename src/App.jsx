import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Artworks from "./Component/Artworks";
import Footer from "./Component/Footer";
import Alert from "./Component/Alert";
import Loading from "./Component/Loading";
import { useEffect } from "react";
import { isWalletConnected, connectWallet, loadNfts, payToMint } from "./NFT";
import { useGlobalState } from "./store";
const App = () => {
  const [nfts] = useGlobalState("nfts");
  useEffect(async () => {
    await isWalletConnected().then(() => console.log("Blockchain Loaded"));
    await loadNfts();
  }, []);
  return (
    <div className="nin-h-0screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks Artworks={nfts} />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
};

export default App;
