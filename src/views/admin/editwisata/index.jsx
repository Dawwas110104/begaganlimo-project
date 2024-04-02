import Banner from "./components/Banner";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Add from "assets/img/umkm/Add.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Wisata = () => {
  const { edit } = useParams();
  const navigate = useNavigate();
  const [getDatas, setDatas] = useState([]);
  const [getNama, setNama] = useState([]);
  const [getHarga, setHarga] = useState([]);
  const [getTanggal, setTanggal] = useState([]);
  const [getTelp, setTelp] = useState([]);
  const [getDesc, setDesc] = useState([]);
  const [getGambar, setGambar] = useState([]);

  const inputHandlerNama = (e) => {
    return setNama(e);
  };
  const inputHandlerHarga = (e) => {
    return setHarga(e);
  };

  const inputHandlerTanggal = (e) => {
    return setTanggal(e);
  };

  const inputHandlerDesc = (e) => {
    return setDesc(e);
  };

  const inputHandlerGambar = (e) => {
    return setGambar(e);
  };

  const inputHandlerTelp = (e) => {
    // const noPhone = e.target.value.replace(/[^0-9]+/g, "");

    // if (noPhone.length < 12) {
    //   return setTelp(noPhone);
    // } else if (noPhone.length == 12) {
    //   const number = noPhone.replace(
    //     /(\d{3})(\d{3})(\d{3})(\d{3})/,
    //     "($1) $2-$3-$4"
    //   );
    return setTelp(e);
    // }
  };
  const dataById = (e) => {
    console.log(e.nama);
    return (
      setNama(e.nama),
      setHarga(e.harga),
      setTanggal(e.tanggal),
      setTelp(e.telp),
      setDesc(e.desc)
    );
    // setGambar(e.gambar)
  };

  const showData = () => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/wisata/${edit}`,
    }).then((res) => {
      dataById(res.data.content);
    });
  };

  function saveWisata() {
    if (getNama == "") {
      Swal.fire({
        title: "Warning",
        text: "Nama Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getHarga == "") {
      Swal.fire({
        title: "Warning",
        text: "Harga Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getTanggal == "") {
      Swal.fire({
        title: "Warning",
        text: "Tanggal Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getTelp == "") {
      Swal.fire({
        title: "Warning",
        text: "Nomer Telepon Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getDesc == "") {
      Swal.fire({
        title: "Warning",
        text: "Deskripsi Tidak Boleh Kosong",
        icon: "warning",
      });
    } else if (getGambar == "") {
      Swal.fire({
        title: "Warning",
        text: "Gambar Tidak Boleh Kosong",
        icon: "warning",
      });
    } else {
      axios({
        method: "POST",
        url: `http://127.0.0.1:8000/api/wisata/${edit}`,
        data: {
          nama: getNama,
          tanggal: getTanggal,
          harga: getHarga,
          telp: getTelp,
          desc: getDesc,
          gambar: getGambar,
        },
      }).then((res) => {
        if (res.data.response_code == 200) {
          Swal.fire({
            title: "Success",
            text: "Data Berhasil Diedit",
            icon: "success",
          });
          navigate("/admin/pendataan-wisata");
        } else {
          Swal.fire({
            title: "Erorr",
            text: res,
            icon: "error",
          });
        }
      });
    }
  }

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
              Edit Wisata
            </h4>
          </div>

          <div className="mt-2 ml-5 mr-5">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="group relative z-0 mb-5 w-full">
                <label
                  for="nama Umkm"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Wisata
                </label>
                <input
                  type="text"
                  id="namaUmkm"
                  placeholder="Nama UMKM"
                  name="nama"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getNama}
                  // onChange={(e) => inputHandlerNama(e.target.value)}
                />
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Harga Tiket
                </label>
                <input
                  type="number"
                  id="hargaUmkm"
                  name="harga"
                  placeholder="Harga Tiket"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getHarga}
                  onChange={(e) => inputHandlerHarga(e.target.value)}
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
                  value={getTanggal}
                  onChange={(e) => inputHandlerTanggal(e.target.value)}
                />
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  No WhatsApp
                </label>
                <input
                  type="number"
                  id="noWA"
                  name="telp"
                  placeholder="Nomer WhatsApp"
                  className="bg-transparent block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  value={getTelp}
                  onChange={(e) => inputHandlerTelp(e.target.value)}
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
                value={getDesc}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Tuliskan deskripsi Wisata..."
                onChange={(e) => inputHandlerDesc(e.target.value)}
              ></textarea>

              <label
                className="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-white"
                for="user_avatar"
              >
                Upload foto Wisata
              </label>
              <input
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                value={getGambar}
                onChange={(e) => inputHandlerGambar(e.target.value)}
              ></input>
            </div>
            <div className="flex justify-end">
              <div className="mb-4 grid grid-cols-2 justify-items-end gap-2">
                <button className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
                  Back
                </button>
                <button
                  className="w-full  rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  onClick={() => saveWisata()}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wisata;
