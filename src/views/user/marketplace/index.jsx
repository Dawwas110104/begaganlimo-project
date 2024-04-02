import Banner from "./components/Banner";
import IMG1 from "assets/img/umkm/kaos.png";
import IMG2 from "assets/img/umkm/sate.png";
import axios from "axios";
import UmkmCard from "components/card/UmkmCard";
import WisataCard from "components/card/WisataCard";
import { useEffect, useState } from "react";

const Marketplace = () => {
  const [umkm, setUmkm] = useState([]);
  const [wisata, setWisata] = useState([]);

  useEffect(() => {
    getDataUmkm();
    getDataWisata();
  }, []);
  
  function getDataUmkm() {
    axios.get("http://127.0.0.1:8000/api/umkm")
      .then((res) => {
        console.log("res.content : ", res.data.content);
        setUmkm(res.data.content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function getDataWisata() {
    axios.get("http://127.0.0.1:8000/api/wisata")
      .then((res) => {
        console.log("res.content : ", res.data.content);
        setWisata(res.data.content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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
          {umkm.map((item, index) => (
            <UmkmCard
              key={index}
              title={item.nama}
              author={item.penjual}
              price={item.harga}
              nohp={item.telp}
              image={`${process.env.REACT_APP_IMG_PATH}/${item.gambar}`}
            />
          ))}
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Wisata Begaganlimo
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {wisata.map((item, index) => (
            <WisataCard
              key={index}
              title={item.nama}
              price={item.harga}
              nohp={item.telp}
              image={`${process.env.REACT_APP_IMG_PATH}/${item.gambar}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
