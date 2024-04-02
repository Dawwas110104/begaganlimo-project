import Banner from "./components/Banner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Add from "assets/img/umkm/Add.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
const Wisata = () => {
  const [getDatas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/wisata");
      setDatas(response.data.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const descWisata = (e) => {
    Swal.fire({
      title: "Deskripsi Wisata!",
      text: e,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        <Banner />

        <div className="mb-4 mt-5 flex flex-row justify-between px-4  md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Pendataan Wisata
          </h4>

          <Link to={"/admin/pendataan-wisata/insert"}>
            <img src={Add} alt="" srcset="" className="-mt-2 h-12" />
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3">
                  No.wa
                </th>

                <th scope="col" className="px-6 py-3">
                  Deskripsi
                </th>

                <th scope="col" className="px-6 py-3">
                  Gambar
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getDatas.map((data, index) => {
                return (
                  <tr
                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">{index + 1}</div>
                    </td>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {data.nama}
                    </th>
                    <td className="px-6 py-4"> {data.harga}</td>
                    <td className="px-6 py-4"> {data.tanggal}</td>
                    <td className="px-6 py-4"> {data.telp}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-[#2563EB]"
                        onClick={() => descWisata(data.desc)}
                      >
                        Detail
                      </button>
                    </td>
                    <td className="px-6 py-4"> {data.telp}</td>
                    <td className="px-6 py-4">
                      <Link
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </Link>
                      {""}
                      <Link
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wisata;
