import React, { useState } from "react";
import Nav from "./Nav";
import img6 from "../src/action-md.png";

import { data } from "./Sdata";
import img13 from "../src/logo-header.png";
import {
  faMagnifyingGlass,
  faFileAlt,
  faUser,
  faShopLock,
  faPhone,
  faX,
  faR,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUp from "./coponent/PopUp";
import Popup2 from "./Popup2";
import Active from "./coponent/Active";
import { Link } from "react-router-dom";

const Candidataes = () => {
  const [j, setj] = useState(data);
  const [open  , setOpen] = useState(false)
  const [ope  , setOpe] = useState(false)
  return (
    <div className="candidates">
      <Nav />
      <div className="main_can flex flex-col justify-center p-6">
        <div className="left_job  lg:w-2/3 p-5 w-full  ">
          <div className="job_header flex     justify-between items-center ">
            <h4 className="text-3xl tracking-normal">Myjobs</h4>
            <div
              className="in  border border-gray-500  w-2/3 flex justify-between items-center text-black "
              placeholder="search by jobs"
            >
              <input className="p-2 w-full" type="text" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="p-2 text-xl bg-green-500 border border-green-500"
              />
            </div>

            <FontAwesomeIcon icon={faFileAlt} className="text-3xl" />
          </div>

<div className="bg-blue-500 px-3 py-2 w-40 my-10 rounded-3xl text-white">switch to  agil view</div>

          <Active setj={setj} />
        </div>
        <div className="can_ban w-full mt-6 flex gap-10 flex-col lg:flex-row ">
          <div className="w-full xl:w-2/3">
          {j.map((value) => {
            return (
              <div className="ban_content  w-full mt-6 ">
                <div className="bg-white shadow-md w-full md:flex items-center top-0 p-5 ">
                  <div className="ban_div md:flex justify-between items-center p-5  w-full flex-col md:flex-row ">
                    <div>
                      <FontAwesomeIcon icon={faUser} className="text-6xl" />

                      <div className="flex  items-baseline gap-2 mt-28">
                        <FontAwesomeIcon icon={faArrowAltCircleDown} />
                        <h4>download</h4>
                      </div>
                    </div>
<PopUp open={open} setOpen={setOpen} />
<Popup2 ope  = {ope} setOpe = {setOpe}/>
                  
                    

                    <div className="can_fnme">
                      <h4>{value.name}</h4>
                      <h4>{value.address.street}</h4>

                      <h4>exprience:N/A</h4>
                      <div className="sh flex gap-2 items-baseline mt-24">
                        <FontAwesomeIcon icon={faShopLock} />
                        <h4>Schedule</h4>
                      </div>
                    </div>
                    <div className="ban_">
                      <img src={img13} alt="" />
                      <h3 className="mt-1">HELLO BUDDY JOB</h3>
                      <h4 className="mt-1">{value.email}</h4>
                      <div className="phone flex items-center gap-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <h4>{value.address.zipcode}</h4>
                      </div>
                      <h4>June 2nd 2022, 5:12 pm</h4>
                      <div className="x flex items-center gap-2 mt-8 text-red-500">
                        <div className="xl flex items-center gap-2">
                          <FontAwesomeIcon icon={faX} />
                          <h4 onClick={() => setOpen(true)}>Reject</h4>
                        </div>
                        <div className="r flex items-center gap-2 text-green-500">
                          <FontAwesomeIcon icon={faR} />
                          <h4 className=""  onClick={()=> setOpe(true)}>Shorlist</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                 <div className="imgdd group relative" >
                 <img src={img6} className=" cursor-pointer p-3  lg:ml-0 ml-3  " alt="" />
<div className="hidden group-hover:block absolute w-52 right-0 bg-white  p-3 h-28 rounded-md  shadow-2xl  hover:translate-x-4 hover:transition-all   ">
<Link  to="/vie">
<h1 className="text-lg text-green-600 hover:text-black cursor-pointer " >view candidates</h1>
</Link>
<hr className="mt-2"></hr>
<h4 className="flex mt-1 text-lg  text-green-600 hover:text-black cursor-pointer">Schedule candidates</h4>

</div>

                 </div>


                </div>
                {/* <img  src={img6}/> */}
              </div>
            );
          })}
          </div>
          <div className='banner2 w-full lg:w-4/12  object-contain  lg:pl-0 '>

<div className='banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 '>
<h1>Post a new Job</h1>
<span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">post a job</span>
</div>

<div className='banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 '>
<h1>226 New candidates has been proposed Assess now.</h1>
<span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">Rewiew</span>
</div>





    </div>
          
        </div>
      </div>
    </div>
  );
};

export default Candidataes;
