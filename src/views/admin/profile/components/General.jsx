import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="mb-5 px-2 text-3xl font-bold text-navy-700 dark:text-white">
          Profil Singkat Desa
        </h4>
        <p className="mt-2 px-2 text-justify text-base text-gray-600">
          Desa Begaganlimo merupakan desa yang berada di kecamatan Gondang,
          Kabupaten Mojokerto , Provinsi Jawa Timur. Desa begaganlimo terdiri
          dari dua dusun yakni dusun Troliman dan Dusun Begagan. Desa ini
          termasuk daerah dataran tinggi dengan ketinggian mencapai 365m dari
          permukaan laut. Potensi sumber daya alam yang ada di desa ini sebagian
          besar berasal dari komoditas perkebunan. sehingga mata pencarian
          pepnduduk desa Begaganlimo sebagian besar bertani, pengerajin serta
          menghasilkan berbagai macam olahan kripik. Desa Begaganlimo, Kecamatan
          Gondang, Kabupaten Mojokerto, Jawa Timur, memiliki potensi yang baik
          untuk menjadi daerah wisata budaya. Potensi tersebut adalah sejarah
          yang dapat dirunut hingga kerajaan Majapahit; alam pegunungan yang
          indah; warisan produk budaya berupa seni gamelan, seni tari dan
          kuliner; dan hasil bumi yang dicari orang, terutama durian
        </p>
      </div>
    </Card>
  );
};

export default General;
