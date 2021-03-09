import React from "react";
import { Link } from "react-router-dom";
import glogo from "../assets/g-logo.png";
import flogo from "../assets/fb-logo.png";
function Masuk() {
  return (
    <div>
      <section className="flex justify-center font-montserrat items-center h-screen">
        <div className="w-1/3 min-h-0 pb-10 pt-5 rounded text-black bg-gray-100">
          <h1 className="font-black text-3xl text-center pb-0 p-4 px-3">
            Masuk dulu yuk!
          </h1>
          <p className="text-center px-10">
            Dengan masuk kamu bisa membuat novel dan memberi dukungan kepada
            pembuat novel lho!
          </p>

          <div className="mt-8">
            <div className="px-10 flex flex-col space-y-6">
              <div>
                <h1 className="text-sm pb-2">
                  Alamat Email <span className="text-red-600">*</span>
                </h1>
                <input
                  className="p-2 rounded-lg w-full shadow-md"
                  type="email"
                />
              </div>
              <div>
                <h1 className="text-sm pb-2">
                  Kata Sandi <span className="text-red-600">*</span>
                </h1>
                <input
                  className="p-2 rounded-lg w-full shadow-md"
                  type="password"
                />
              </div>
              <Link to="#" className="font-medium text-sm text-right">
                Forgot Password?
              </Link>
              <button className="rounded-full font-black text-white bg-yellow-600 p-3">
                Daftar Sekarang
              </button>
              <div className="text-center space-y-2">
                <h1 className="font-black">Daftar Dengan</h1>
                <div className="flex flex-row justify-center space-x-6">
                  <button className="p-4 bg-white rounded-full">
                    <img src={glogo} alt="" srcset="" />
                  </button>
                  <button className="p-4 bg-white rounded-full">
                    <img src={flogo} alt="" srcset="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Masuk;
