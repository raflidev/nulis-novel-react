import React from "react";
import {Link} from "react-router-dom"
class HighlightArticle extends React.Component {
  render() {
    return (
      <div>
        <Link to="/blog/1">
          <img
            className="h-52 w-80 rounded-sm"
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="mamang punk"
          />
        </Link>
        <div className="w-80">
        <Link to="/blog/1">
          <h2 className="font-bold text-lg py-2">
            Cara Menulis Dengan Efektif
          </h2>
        </Link>
          <p className="font-medium text-sm pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur fugiat non architecto tenetur debitis illo esse
            dignissimos quia, ut vitae corporis.
          </p>
        </div>
        <Link to="/blog/1" className="text-sm p-1 rounded bg-blue-800 text-white px-5 font-medium">
          Read more
        </Link>
      </div>
    );
  }
}

export default HighlightArticle;
