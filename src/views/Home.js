import React from "react";
import { Link } from "react-router-dom";
import vectorBg from "../assets/vector-bg.png";
function Home() {
  return (
    <div className="container mx-auto static">
      <nav className="absolute">
        <div className="flex items-center justify-between p-6 font-montserrat">
          <Link to="/" className="font-bold">
            NulisNovel
          </Link>
          <div className="pl-60 ml-96 space-x-10 font-bold">
            <Link to="/">Populer</Link>
            <Link to="/">Artikel</Link>
            <Link to="/">Review</Link>
          </div>
          <div className="space-x-10 font-bold  ">
            <Link to="/">Masuk</Link>
            <Link to="/">Daftar</Link>
          </div>
        </div>
      </nav>
      <img className="absolute top-0 right-0 z-0" src={vectorBg} alt="vector" />
    </div>
  );
}

export default Home;
