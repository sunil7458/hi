import React from "react";
import Nav from "./Nav";
import img99 from "./action-md.png";

import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panal = () => {
  return (
    <div className="main_panal">
      <Nav />
      <div className="panal_div mt-10 md:p-10  p-2">
        <div className="logo">
          <h4>Manage team/</h4>
          <span className="text-3xl  capitalize">panal user</span>
        </div>

        <div className=" mainpanaldiv1  w-full mt-7 flex flex-col lg:flex-row items-baseline lg:space-x-9">
          <div className="panal_left  lg:w-2/3 w-full ">
            <div className="bg-white shadow-lg ">
              <div className=" bg-gray-200 text-black flex  space-x-6 p-1 capitalize">
                <div className="name  lg:w-1/2 flex justify-between">
                  <span>name</span>
                  <span>role</span>
                </div>

                <div className="name lg:w-1/2 w-full flex justify-between">
                  <span>Allotod jobs</span>
                  <span>fulfilded</span>
                  <span>action</span>
                </div>
              </div>

              <div className="name_s p-3 flex justify-between">
                <div className="kapil w-1/3 flex justify-between ">
                  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  <h1>kapil</h1>
                  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                </div>

                <div className="number w-1/4 flex justify-between">
                  <span>12</span>
                  <span>12</span>
                </div>
                <img src={img99} alt="" />
              </div>
<div className="border border-gray-300 mx-3"></div>
              {/*  */}
              <div className="name_s p-3 flex justify-between">
                <div className="kapil w-1/3 flex justify-between ">
                  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  <h1>kapil</h1>
                  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                </div>

                <div className="number w-1/4 flex justify-between">
                  <span>12</span>
                  <span>12</span>
                </div>
               <div className="main_hover relative group  ">
               <img src={img99} alt="" className="cursor-pointer" />
<div className="hidden group-hover:block absolute w-52 right-0 bg-white  p-3 h-28 rounded-md  shadow-2xl  hover:translate-x-4 hover:transition-all   "  >
<span>mark as default</span>
<span>Activate</span>
<span>Edit</span>
<span>change email</span>
<span>delete</span>
</div>

               </div>
              </div>
            </div>
          </div>

          <div className="right_jobs lg:w-2/6  w-full ">
            <div className="banner2 w-full  lg:mr-8 object-contain  lg:pl-0 ">
              
              <div className="banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 ">
                <h1>Mobile notifications</h1>
                <span>Never miss an important update</span>
                <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
                  Verify
                </span>
              </div>
              
              <div className="banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 ">
                <h1>Add Users</h1>
                <span>up to 10 Users</span>
                <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
                  Add Users
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panal;
