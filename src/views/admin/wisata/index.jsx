import Banner from "./components/Banner";
import CardWisata1 from "./components/CardWisata1";
import CardWisata2 from "./components/CardWisata2";
import CardWisata3 from "./components/CardWisata3";
import ProfileWisata from "../profilewisata";
import nft1 from "assets/img/nfts/banner1.jpeg";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import NftCard from "components/card/NftCard";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* NFt Banner */}
        <Banner />
        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            UMKM Begaganlimo
          </h4>
        </div>
      <CardWisata1 img = {nft1}/>
      <CardWisata2 img = {nft1}/>
      <CardWisata3 img = {nft1}/>

        </div>
        </div>

      
    
  );
};

export default Marketplace;
