import React from "react";
import { Link } from "react-router-dom";
class TheFooter extends React.Component {
  render() {
    return (
      <section>
        <div className="font-montserrat w-full flex justify-around items-center bg-red-500 h-64">
          <div className="text-white">
            <h1 className="font-bold text-2xl ">NulisNovel</h1>
            <p className="w-80">
              NulisNovel adalah platform menulis novel yang bertujuan
              meningkatkan literasi di Indonesia
            </p>
          </div>
          <div className="flex w-96 space-x-20 justify-center">
            <div className="text-white">
              <h2 className="font-bold text-lg">Explore</h2>
              <div className="flex flex-col w-36">
                <Link to="blog">Blog</Link>
                <Link to="blog">Contact Us</Link>
                <Link to="blog">Term & Privacy</Link>
                <Link to="blog">Copyright</Link>
              </div>
            </div>
            <div className="text-white">
              <h2 className="font-bold text-lg">Bantuan</h2>
              <div className="flex flex-col w-36">
                <Link to="blog">Buat Novel</Link>
                <Link to="blog">Tips Menulis</Link>
                <Link to="blog">Dokumentasi</Link>
              </div>
            </div>
            <div className="text-white">
              <h2 className="font-bold text-lg">Sosial</h2>
              <div className="flex flex-col w-36">
                <Link to="blog">Facebook</Link>
                <Link to="blog">Instagram</Link>
                <Link to="blog">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TheFooter;
