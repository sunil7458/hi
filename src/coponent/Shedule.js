import React from "react";
import Nav from "../Nav";

const Shedule = () => {
  return (
    <div>
      <Nav />

      <div className="shedule p-8 mt-10 ">
        <div className="log text-4xl">Shedular</div>

        <div className="buttons mt-8 flex gap-3">
          <div className="button-1   border border-green-600 rounded-full text-center bg-white p-1 w-28 text-green-500">
            pending (5)
          </div>
          <div className="button-1   border border-green-600 rounded-full text-center bg-white p-1 w-28 text-green-500">
            confirmed (5)
          </div>
          <div className="button-1   border border-green-600 rounded-full text-center bg-white p-1 w-32 text-green-500">
            reshuduled (5)
          </div>
        </div>

        <div className="name mt-6"> calaender View</div>

        <div className="shedule_nav  w-full ">
<div className = "shedular    w-2/4">
<div   className="shedular_box bg-white   " >




</div>




</div>





        </div>
      </div>
    </div>
  );
};

export default Shedule;
