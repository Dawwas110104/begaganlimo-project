import Banner from "./components/Banner";
import Add from "assets/img/umkm/Add.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Marketplace = () => {
  const [getDatas, setDatas] = useState([]);

  const descUmkm = (e) => {
    Swal.fire({
      title: "Deskripsi UMKM!",
      text: e,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const gambarUmkm = (e) => {
    Swal.fire({
      title: "Gambar UMKM!",
      text: <img src="assets/img/umkm/Add.png" alt="" />,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const deleteData = (id) => {
    Swal.fire({
      title: "Apakah Yakin Ingin Menghapus?",
      text: "Kamu tidak dapat mengembalikan datanya!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "DELETE",
          url: `http://127.0.0.1:8000/api/umkm/${id}`,
        }).then((res) => {
          fetchData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/umkm");
      setDatas(response.data.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
            Pendataan UMKM
          </h4>

          <Link to={"/admin/pendataan-umkm/insert"}>
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
                        onClick={() => descUmkm(data.desc)}
                      >
                        Detail
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      <button
                        className="text-[#2563EB]"
                        onClick={() => gambarUmkm(data.gambar)}
                      >
                        Detail
                      </button>
                    </td>
                    <td className="grid grid-rows-1 px-6 py-4">
                      <button
                        type="button"
                        class="mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium font-medium text-white  me-2 hover:bg-blue-800 hover:underline focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:text-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <Link href="#" className="">
                          Edit
                        </Link>
                      </button>

                      <button
                        type="button"
                        className="mb-2 mt-1 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium font-medium text-white me-2 hover:bg-red-800 hover:underline focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-blue-500 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => deleteData(data.id)}
                      >
                        Hapus
                      </button>
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

export default Marketplace;
