import React, { useState } from "react";
import { data, datas, mohit, sunil } from "../Sdata";

const Active = ({ setj, id }) => {
  // const [ mt , setmt] = useState(datas)
  const [col, setcol] = useState("");
  const han = () => {
    setj(datas);
    setcol("active");
  };

  const hanf = (id) => {
    setj(data);
    setcol(id);
    setcol("l");
  };
  const hand = (id) => {
    setj(sunil);
    setcol(id);
    setcol("k");
  };

  const hanfg = () => {
    setj(mohit);
    setcol("hj");
    setcol(id);
  };

  return (
    <div>
      <div className="mt-5 flex items-center gap-5 text-center flex-wrap lg:w-full">
        <div
          className={`${
            col === "active"
              ? "bg-green-500 text-white"
              : "bg-white text-black "
          }  border border-green-500 p-1 cursor-pointer rounded-2xl text-white  w-24 `}
          onClick={han}
        >
          Active ()
        </div>
        <div
          className={`    ${
            col === "k" ? "bg-green-500 text-white" : "bg-white text-black"
          } border border-green-500 p-1 rounded-2xl cursor-pointer w-24 `}
          onClick={hand}
        >
          Draft (42)
        </div>
        <div
          className={` ${
            col === "hj" ? "bg-green-500 text-white" : "bg-white text-black"
          }  border border-green-500 p-1 rounded-2xl cursor-pointer  w-28`}
          onClick={hanfg}
        >
          Archived (0)
        </div>
        <div
          className={` ${
            col === "hj" ? "bg-green-500 text-white" : "bg-white text-black"
          }  border border-green-500 p-1 rounded-2xl cursor-pointer  w-28`}
          onClick={hanfg}
        >
          On hold (0)
        </div>
        <div
          className={` ${
            col === "hj" ? "bg-green-500 text-white" : "bg-white text-black"
          }  border border-green-500 p-1 rounded-2xl cursor-pointer  w-28`}
          onClick={hanfg}
        >
          Paused (9)
        </div>
        <div
          className={` ${
            col === "hj" ? "bg-green-500 text-white" : "bg-white text-black"
          }  border border-green-500 p-1 rounded-2xl cursor-pointer  w-40sa`}
          onClick={hanfg}
        >
          wating for approval (49)
        </div>

        <div
          className={`${
            col === "l" ? "bg-green-500  text-white " : "bg-white text-black "
          }  border border-green-500 p-1 rounded-2xl text-white  cursor-pointer w-24`}
          onClick={hanf}
        >
          Alljobs
        </div>
      </div>
    </div>
  );
};

export default Active;
