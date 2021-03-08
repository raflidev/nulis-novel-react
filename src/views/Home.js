import React from "react";
import { Link } from "react-router-dom";
import vectorBg from "../assets/vector-bg.png";
import IlusLanding from "../assets/Ilustration-landing.png";
import plantLeft from "../assets/plant-left.png";
import topLeaves from "../assets/top-leaves.png";

// Component
import { PopulerNovel, HighlightArticle, TheFooter } from "../components";

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
              <div className="2xl:pl-96 xl:pl-72 lg:pl-10 pl-92 lg:ml-32 ml-96 space-x-12 font-bold text-white">
                <a href="#populer">Populer</a>
                <a href="#artikel">Artikel</a>
                <a href="#review">Review</a>
              </div>
              <div className="space-x-12 font-bold text-white">
                <Link to="/">Masuk</Link>
                <Link
                  to="/daftar"
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
      <section id="populer" className="mt-64">
        <div className="font-montserrat text-center">
          <h1 className="font-extrabold text-4xl">Novel Populer</h1>
          <p className="text-lg">
            mungkin kamu akan suka dengan novel-novel berikut
          </p>
        </div>
        <div className="mt-20 px-32 flex space-x-9 justify-center font-montserrat">
          <PopulerNovel />
          <PopulerNovel />
          <PopulerNovel />
          <PopulerNovel />
        </div>
      </section>
      <section id="artikel" className="mt-36">
        <div className="font-montserrat text-center">
          <h1 className="font-extrabold text-4xl">Artikel</h1>
          <p className="text-lg">Artikel tips dan trik dari kami</p>
        </div>
        <div className="mt-20 px-32 flex space-x-9 justify-center font-montserrat">
          <HighlightArticle />
          <HighlightArticle />
          <HighlightArticle />
        </div>
      </section>
      <section id="review" className="mt-36">
        <div className="font-montserrat text-center">
          <h1 className="font-extrabold text-4xl">Feedback</h1>
          <p className="text-lg">
            Komentar pembaca untuk novel yang sedang populer
          </p>
        </div>
        <div className="mt-20 px-20 flex justify-center font-montserrat">
          <div className="bg-red-500 w-full flex flex-row p-10 justify-center space-x-10">
            <img
              className="h-72 w-56 rounded-sm"
              src="https://i.pinimg.com/originals/64/66/36/646636200a17e13a700c346604590f85.png"
              alt="mamang punk"
            />
            <div className="">
              <h1 className="font-black text-4xl text-white">
                Malin Kundang 2077
              </h1>
              <p className="font-medium text-white pt-4 w-96 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                error sed eaque, veritatis enim veniam ratione amet ipsum quos
                iusto magni.
              </p>
              <div className="flex flex-row space-x-5 items-center mt-5">
                <img
                  src="https://randomuser.me/api/portraits/men/57.jpg"
                  alt=""
                  className="rounded-full w-14"
                  srcset=""
                />
                <span className="text-white">Ahmad Tunrih</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-36">
        <div className="font-montserrat text-center w-full flex flex-col justify-center items-center bg-red-500 h-64 static">
          <div className="font-bold text-2xl text-white">
            Tertarik Menjadi Penulis?
          </div>
          <button className="px-8 py-2 mt-3 font-bold text-white bg-yellow-500 rounded shadow-md ">
            Mulai Menulis
          </button>
          <img
            src={plantLeft}
            className="absolute h-64 left-20"
            alt=""
            srcset=""
          />
          <img
            src={topLeaves}
            className="absolute h-64 right-20"
            alt=""
            srcset=""
          />
        </div>
      </section>
      <TheFooter />
    </div>
  );
}

export default Home;
