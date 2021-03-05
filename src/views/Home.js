import React from "react";
import { Link } from "react-router-dom";
import vectorBg from "../assets/vector-bg.png";
import IlusLanding from "../assets/Ilustration-landing.png";
function Home() {
  return (
    <div>
      <section>
        <div className="container mx-auto static">
          <nav className="relative z-10">
            <div className="flex items-center justify-between p-6 font-montserrat">
              <Link to="/" className="font-bold">
                NulisNovel
              </Link>
              <div className="pl-32 ml-96 space-x-12 font-bold text-white">
                <Link to="/">Populer</Link>
                <Link to="/">Artikel</Link>
                <Link to="/">Review</Link>
              </div>
              <div className="space-x-12 font-bold text-white">
                <Link to="/">Masuk</Link>
                <Link
                  to="/"
                  className="py-3 px-4 rounded bg-yellow-500 hover:ring-4 hover:ring-yellow-300 hover:ring-opacity-50"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </nav>
          <img
            className="absolute top-0 right-0 z-0"
            src={vectorBg}
            alt="vector"
          />
          <div className="container mx-auto flex h-96 items-center mt-10">
            <div className="font-montserrat px-6 max-w-lg">
              <h1 className="font-black text-5xl">Yuk Nulis Novel!</h1>
              <p className="text-xl">
                Keluarkan ide liarmu dan tuangkan disini, banyak orang lain
                menunggu karyamu
              </p>
            </div>
          </div>
          <img
            src={IlusLanding}
            alt="Ilustration"
            className="absolute top-24 right-36"
          />
        </div>
      </section>
      <section className="mt-64">
        <div className="font-montserrat text-center">
          <h1 className="font-extrabold text-4xl">Novel Populer</h1>
          <p className="text-lg">
            mungkin kamu akan suka dengan novel-novel berikut
          </p>
        </div>
        <div className="px-36 flex justify-around font-montserrat">
          <div>
            <img
              className="h-80 w-56"
              src="https://static.zerochan.net/Sailor.Moon.%28Character%29.full.3155634.jpg"
              alt="mamang punk"
            />
            <div className="max-w-56">
              <h2 className="font-bold text-lg">Maling Kundang 2077</h2>
              <p className="font-medium text-sm">Mamang udin</p>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-56"
              src="https://static.zerochan.net/Sailor.Moon.%28Character%29.full.3155634.jpg"
              alt="mamang punk"
            />
            <div className="max-w-56">
              <h2 className="font-bold text-lg">Maling Kundang 2077</h2>
              <p className="font-medium text-sm">Mamang udin</p>
            </div>
            {/* <div className="text-sm p-1 rounded bg-gray-400">fiksi</div> */}
          </div>
          <div>
            <img
              className="h-80 w-56"
              src="https://static.zerochan.net/Sailor.Moon.%28Character%29.full.3155634.jpg"
              alt="mamang punk"
            />
            <div className="max-w-56">
              <h2 className="font-bold text-lg">Maling Kundang 2077</h2>
              <p className="font-medium text-sm">Mamang udin</p>
            </div>
            {/* <div className="text-sm p-1 rounded bg-gray-400">fiksi</div> */}
          </div>
          <div>
            <img
              className="h-80 w-56"
              src="https://static.zerochan.net/Sailor.Moon.%28Character%29.full.3155634.jpg"
              alt="mamang punk"
            />
            <div className="max-w-56">
              <h2 className="font-bold text-lg">Maling Kundang 2077</h2>
              <p className="font-medium text-sm">Mamang udin</p>
            </div>
            {/* <div className="text-sm p-1 rounded bg-gray-400">fiksi</div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
