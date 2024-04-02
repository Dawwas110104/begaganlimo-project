import Banner from "./components/Banner";
import Add from "assets/img/umkm/Add.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Wisata = () => {
  const [getDatas, setDatas] = useState([]);

  const showData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/umkm",
    }).then((res) => {
      setDatas(res.data.content);
    });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        <Banner />

        <div
          className={`!z-5 relative mt-5 flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none`}
        >
          <div className=" mt-3 flex  justify-between px-4  md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
              Edit UMKM
            </h4>
          </div>

          <form>
            <div className="mt-2 ml-5 mr-5">
              <div className="group relative z-0 mb-5 w-full">
                <label
                  for="nama Umkm"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  placeholder="Nama Pemilik"
                  name="nama"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-5 w-full">
                  <label
                    for="nama Umkm"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama UMKM
                  </label>
                  <input
                    type="text"
                    id="namaUmkm"
                    placeholder="Nama UMKM"
                    name="nama"
                    className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="group relative z-0 mb-5 w-full">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Harga UMKM
                  </label>
                  <input
                    type="number"
                    id="hargaUmkm"
                    name="harga"
                    placeholder="Harga UMKM"
                    className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-5 w-full">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Tanggal Produksi
                  </label>
                  <input
                    type="date"
                    id="tanggalUmkm"
                    name="tanggal"
                    className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="group relative z-0 mb-5 w-full">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    No WhatsApp
                  </label>
                  <input
                    type="text"
                    id="noWA"
                    name="telp"
                    placeholder="Nomer WhatsApp"
                    className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label
                  for="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Deskripsi
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Tuliskan deskripsi UMKM..."
                ></textarea>

                <label
                  className="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-white"
                  for="user_avatar"
                >
                  Upload foto UMKM
                </label>
                <input
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                ></input>
              </div>
              <div className="flex justify-end">
                <div className="mb-4 grid grid-cols-2 justify-items-end gap-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-full  rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wisata;
