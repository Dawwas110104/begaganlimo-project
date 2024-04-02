import nft1 from "assets/img/nfts/tes.png";
import icon from "assets/img/nfts/icon.png";
import axios from "axios";
import React, { useState } from "react";

export default function SignIn() {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");

  const onLogin = () => {
    const data = {
      email: getUsername,
      password: getPassword,
    };
    axios.post("http://127.0.0.1:8000/api/login", data).then((res) => {
      console.log(res);
      console.log(res.data);
      // sessionStorage.setItem("id", result.data.id);
      // sessionStorage.setItem("username", result.data.username);
      // sessionStorage.setItem("token", result.data.token);
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1000);
    });
  };

  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${nft1})` }}
      >
        <div class="grid h-56 grid-rows-3 content-center justify-items-center">
          <div className=" tablet:mt-[150px] mt-[80px] text-[25px] uppercase text-white">
            <div className="grid grid-cols-2  gap-2">
              <h3 className="font-bold">Admin</h3>
              <p>Login</p>
            </div>
          </div>
          <div className="tablet:mt-[150px] mt-[60px] h-[450px] w-[350px] rounded-[40px] border-4 bg-[#cecfd3] p-4 md:w-[450px] ">
            <div className="flex flex-row">
              <img className="ml-2 h-12" src={icon} alt="" srcset="" />
              <p className="mt-5 ml-2 text-[12px]">Desa Songgoriti</p>
            </div>
            <div className="mt-12 grid justify-items-center">
              <h3 className="text-[27px] font-bold">Welcome Back!</h3>
              <p>Please Login To Your Account</p>
              <form>
                <input
                  className="focus:shadow-outline mt-10 h-12 w-[90%] appearance-none rounded-[10px] rounded border py-2 px-3  leading-tight shadow focus:outline-none"
                  id="username"
                  type="email"
                  placeholder="email"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="focus:shadow-outline mt-7 h-12 w-[90%] appearance-none rounded-[10px] rounded border py-2 px-3  leading-tight shadow focus:outline-none"
                  id="username"
                  type="email"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
              <button
                type="submit"
                onClick={() => onLogin()}
                className="mt-8 w-[50%] rounded-[10px] bg-[#11047A] py-2 px-4 font-bold text-white hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
