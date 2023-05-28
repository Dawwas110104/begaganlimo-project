import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";

import UmkmCard from "components/card/UmkmCard";
// import NftCard from "components/card/NftCard";

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

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Keripik Goreng 1"
            author="Pak Dawwas"
            price="Rp 1.000"
            nohp="+6285746684976"
            image={NFt3}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Keripik 1000 Rasa"
            author="Kek Aryes"
            price="Rp. 7000"
            nohp="+6285746684976"
            image={NFt2}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Keripik Cinta"
            author="Pak Daffa & Bu Lintang"
            price="Rp. 1.100"
            nohp="+6285746684976"
            image={NFt4}
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            UMKM Begaganlimo
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Keripik Geming"
            author="Mas Raka"
            price="Rp. 9.000"
            nohp="+6289666802021"
            image={NFt4}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Keripik Yang Pernah Ada"
            author="Ning Je"
            price="Rp. 7.000"
            nohp="+6289666802021"
            image={NFt5}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Keripik Kebahagiaan"
            author="Bu Asmaul"
            price="Rp. 2.910"
            nohp="+6289666802021"
            image={NFt6}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
