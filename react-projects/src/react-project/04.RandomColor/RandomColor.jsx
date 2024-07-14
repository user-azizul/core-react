import React, { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#333333");
  const [isHex, setHex] = useState(true);
  const RandomNum = (length) => {
    return Math.floor(Math.random() * length);
  };
  const hexGenerator = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += arr[RandomNum(arr.length)];
    }

    setColor(hexCode);
  };
  const rgbGenerator = () => {
    let r = RandomNum(256);
    let g = RandomNum(256);
    let b = RandomNum(256);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center "
      style={{ backgroundColor: color }}
    >
      <div className="h-82 w-4/12 mx-auto rounded flex flex-col gap-2 bg-gray-700 p-8 ">
        <div className=" flex justify-center items-center">
          {isHex ? (
            <button
              onClick={() => setHex(!isHex)}
              className="bg-blue-500 text-gray-300  font-bold px-3 py-2 rounded "
              type="button"
            >
              Change to RGB Color
            </button>
          ) : (
            <button
              onClick={() => setHex(!isHex)}
              className="bg-orange-500 text-gray-300 font-bold px-3 py-2 rounded"
              type="button"
            >
              Change to HEX Color
            </button>
          )}
        </div>
        <div
          className="bg-red-500 text-center rounded"
          onClick={isHex ? () => hexGenerator() : () => rgbGenerator()}
        >
          <button className=" px-3  text-gray-300 font-bold py-2" type="button">
            Change Bg
          </button>
        </div>
        <div className="bg-white  text-center p-4">
          {" "}
          <h2>
            {isHex ? `Hex Code : ` : " RGB Code : "} {color}
          </h2>{" "}
        </div>
      </div>
    </div>
  );
}

export default RandomColor;
