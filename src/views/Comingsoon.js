import React from "react";
import { Link } from "react-router-dom";
function Comingsoon() {
  return (
    <div className="h-screen flex justify-center flex-col space-y-3 items-center font-montserrat">
      <h1 className="font-black text-4xl">Coming soon..</h1>
      <Link
        to="/"
        className="font-medium text-xl hover:text-red-500 hover:underline"
      >
        back to homepage
      </Link>
    </div>
  );
}

export default Comingsoon;
