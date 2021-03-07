import React from "react";
class PopulerNovel extends React.Component {
  render() {
    return (
      <div>
        <img
          className="h-80 w-56 rounded-sm"
          src="https://i.pinimg.com/originals/64/66/36/646636200a17e13a700c346604590f85.png"
          alt="mamang punk"
        />
        <div className="max-w-56 py-2">
          <h2 className="font-bold text-lg">Maling Kundang 2077</h2>
          <p className="font-medium text-sm">Mamang udin</p>
        </div>
        <button className="text-sm p-1 rounded bg-gray-400">fiksi</button>
      </div>
    );
  }
}
export default PopulerNovel;
