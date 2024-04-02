import Banner from "./components/Banner";
import IMG1 from "assets/img/umkm/kaos.png";
import IMG2 from "assets/img/umkm/sate.png";
// import IMG2
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
            UMKM Songgoriti
          </h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Kaos 1"
            author="Pak Dawwas"
            price="Rp 69.000"
            nohp="+6285746684976"
            image={IMG1}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Kaos 2"
            author="Kek Aryes"
            price="Rp. 69.000"
            nohp="+6285746684976"
            image={IMG1}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Kaos 3"
            author="Pak Daffa & Bu Lintang"
            price="Rp. 69.000"
            nohp="+6285746684976"
            image={IMG1}
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
            title="Sate Usus"
            author="Mas Raka"
            price="Rp. 9.000"
            nohp="+6289666802021"
            image={IMG2}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Sate Kambink"
            author="Ning Je"
            price="Rp. 7.000"
            nohp="+6289666802021"
            image={IMG2}
          />
          <UmkmCard
            // bidders={[avatar1, avatar2, avatar3]}
            title="Sate Ayam"
            author="Bu Asmaul"
            price="Rp. 2.910"
            nohp="+6289666802021"
            image={IMG2}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
