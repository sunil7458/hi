import React from "react";
import Nav from "./Nav";
import Jobs2 from "./Jobs2";
import { data } from "./Sdata";
import {
  faMagnifyingGlass,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import JActive from "./coponent/JActive";
// import img5 from "../src/jk.png"
const Job = () => {
  const [j, sej] = useState(data);
  return (
    <div className="job">
      <Nav />
      <div className="jobmain items-center justify-center flex flex-col">
        <div className="jobmaindiv flex  items-center w-full mt-20  ">
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
            


            <JActive  sej  = {sej}/>
          </div>
        </div>
        <div className=" flex w-full justify-center items-baseline  gap-8  lg:gap-20 flex-col md:flex-row p-3 ">
          <div className="lg:w-2/3 w-full">
            {j.map((data, index) => {
              return <Jobs2 data={data} key={index} className="" />;
            })}
          </div>
          <div className="right_jobs md:w-2/6  w-full ">
            <div className="banner2 w-full  lg:mr-8 object-contain  lg:pl-0 ">
              
              <div className="banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 ">
                <h1>Mobile notifications</h1>
                <span>Never miss an important update</span>
                <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
                  Verify
                </span>
              </div>
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
              <div className="banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 ">
                <h1>226 New candidates has been proposed Assess now.</h1>
                <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
                  Rewiew
                </span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Job;
