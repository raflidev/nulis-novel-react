import React from "react";
import { Link } from "react-router-dom";
function NovelPage() {
  return (
    <div className="font-montserrat">
      <section className="h-screen w-full">
        <div className="flex justify-center items-center h-screen space-x-10">
          <div>
            <Link
              to="/"
              className="flex flex-row space-x-2 text-sm my-3 hover:underline cursor-pointer"
            >
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Kembali ke halaman utama</span>
            </Link>
            <img
              className="h-72 w-56 rounded-sm"
              src="https://i.pinimg.com/originals/64/66/36/646636200a17e13a700c346604590f85.png"
              alt="mamang punk"
            />
            <div className="flex flex-row my-4 items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt=""
                className="rounded-full w-10"
                srcset=""
              />
              <div className="space-y-0 flex flex-col">
                <span className="font-black">Mamang udin</span>
                <span className="text-xs">Anaknya novel banget.</span>
              </div>
            </div>
            <div className="mt-3 space-x-3  w-56">
              <button className="py-1 px-4 text-sm rounded-full  bg-gray-300">
                fiksi
              </button>
              <button className="py-1 px-4 text-sm rounded-full  bg-gray-300">
                fiksi
              </button>
              <button className="py-1 px-4 text-sm rounded-full  bg-gray-300">
                fiksi
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/2 items-start space-y-1">
            <h1 className="font-black text-2xl p-0">Malin Kundang 2077</h1>
            <p className="w-96 pb-6 font-light text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, dolorem aliquam? Adipisci distinctio deserunt ipsum
              modi labore debitis! Recusandae, accusamus.
            </p>
            <div className="space-y-0 rounded-md  w-full text-sm overflow-y-auto max-w-md bg-gray-100">
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
              <div className="flex justify-between m-0 bg-gray-100  px-4 py-3 hover:bg-gray-300 ">
                <Link to="/novel/chapter/1">
                  <span className="font-bold">Chapter 1</span> - Lorem, ipsum.
                </Link>
                <span>19 Des 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default NovelPage;
