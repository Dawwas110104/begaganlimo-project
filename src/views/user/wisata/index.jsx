import CardWisata1 from "./components/CardWisata1";
import CardWisata2 from "./components/CardWisata2";
import CardWisata3 from "./components/CardWisata3";

import nft1 from "assets/img/nfts/banner1.jpeg";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        <CardWisata1 img={nft1} />
        <CardWisata2 img={nft1} />
        <CardWisata3 img={nft1} />
      </div>
    </div>
  );
};

export default Marketplace;
