import React from "react";
import img9 from "../src/action-md.png";
import {
    faMagnifyingGlass,
    
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Right from "./Right";

const Jobs2 = ({data }) => {
  return (
      <>
    <div className="jobs2 w-full mb-9  ">
      <div className="Jobs2_left w-full flex ml-0` lg:ml-5">
        <div className="left_first w-full lg:w-full bg-white text-black shadow-md rounded-md  p-5 gap-10">
          <div className="left_first_name flex justify-between w-11/12 ">
            <span>{data.name}</span>
            <span className="text-black">{data.address.street}</span>
          </div>

          <div className="left_first_name mt-5 justify-between  flex">
            
              <span>{data.address.city}</span>
              <img src={img9} alt="" />
            
            
          </div>
          <div className="flex justify-between mt-4 w-11/12">
              <h4 className="text-gray-500">posted 5 days ago</h4>
              <div className=" flex items-center gap-5 ">
              <h4 className="text-green-500">view details </h4>

<FontAwesomeIcon icon={faMagnifyingGlass}/>
              </div>
            </div>
         
        </div>
      </div>

      {/* <Right /> */}
      
    </div>
    </>
  );
};

export default Jobs2;
