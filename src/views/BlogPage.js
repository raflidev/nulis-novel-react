import React from "react";
import { Link } from "react-router-dom";
function BlogPage() {
  return (
    <div className="font-montserrat">
      <section className="h-screen w-full">
        <div className="flex justify-center w-full h-screen">
          <div className="w-1/3 h-full pb-11">
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
            <h1 className="font-bold text-2xl text-center py-3">
              Cara Menulis Dengan Efektif
            </h1>

            <hr className="mt-10" />
            <div className="space-y-4 mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                veritatis labore ducimus, debitis reiciendis perspiciatis sunt
                aspernatur beatae odio ullam dignissimos!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                unde ratione corrupti accusantium soluta delectus vero molestias
                alias adipisci aut, mollitia beatae reprehenderit earum dolores
                doloribus eos nobis fugit minima a blanditiis saepe!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veritatis laudantium excepturi, aliquam velit illum ad
                modi saepe!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam adipisci iusto hic voluptatibus nemo deleniti,
                debitis vel aspernatur. Esse mollitia reprehenderit distinctio
                molestias nihil dolore aut excepturi numquam recusandae vel
                commodi, saepe corporis accusantium dolor ullam nostrum! Non
                ullam rem est?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, similique!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                molestiae architecto quo minima doloremque!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, dolore fugit vero ea magni voluptatem deserunt? Nulla
                natus debitis rerum eius distinctio iusto eligendi fugit.
                Maiores doloribus nisi architecto iusto.
              </p>
            </div>
            <div className="flex space-x-4 mt-3 justify-end text-xs text-center">
                <div>
                <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Love
                </div>
                <div>

                <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                </svg>
                Share
                </div>
            </div>
            <div className="pb-14">
              <div className="mt-8 flex space-x-5">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/men/60.jpg"
                    alt=""
                    className="rounded-full w-10"
                    srcset=""
                  />
                </div>
                <div className="w-full">
                  <textarea
                    className="w-full px-4 pt-3 text-sm"
                    placeholder="Leave a comment"
                    type="text"
                  ></textarea>
                  <button className="bg-yellow-500 text-white text-xs float-right mt-3 rounded font-bold py-1 px-3">
                    Post
                  </button>
                </div>
              </div>
              <div className="mt-8 flex space-x-5">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt=""
                    className="rounded-full w-10"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-medium">penulisbaru087</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                  <p>makasih bang</p>
                </div>
              </div>
              <div className="mt-8 flex space-x-5">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/men/31.jpg"
                    alt=""
                    className="rounded-full w-10"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-medium">bacaajaudah44</p>
                  <p className="text-xs text-gray-500">2 day ago</p>
                  <p>nice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default BlogPage;
