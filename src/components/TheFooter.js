import React from "react";
class TheFooter extends React.Component {
  render() {
    return (
      <section>
        <div className="font-montserrat w-full flex justify-around items-center bg-red-500 h-64">
          <div className="text-white">
            <h1 className="font-bold text-2xl ">NulisNovel</h1>
            <p className="w-56">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, dignissimos!
            </p>
          </div>
          <div className="flex w-96 space-x-24 justify-center">
            <div className="text-white">
              <h2 className="font-bold text-lg">Explore</h2>
              <div className="flex flex-col w-36">
                <a href="#">Blog</a>
                <a href="#">Contact Us</a>
                <a href="#">Term & Privacy</a>
                <a href="#">Copyright</a>
              </div>
            </div>
            <div className="text-white">
              <h2 className="font-bold text-lg">Bantuan</h2>
              <div className="flex flex-col w-36">
                <a href="#">Buat Novel</a>
                <a href="#">Tips Menulis</a>
                <a href="#">Dokumentasi</a>
              </div>
            </div>
            <div className="text-white">
              <h2 className="font-bold text-lg">Sosial</h2>
              <div className="flex flex-col w-36">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TheFooter;
