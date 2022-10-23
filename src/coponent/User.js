import React  from "react";
import Nav from "../Nav";
import {
  faXmark,
  faHandHolding,
  faDumpster,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const fetch = async () => {
  try {
    const {data} = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data , "data")
    return data;
  } catch {


    throw Error("sunil")
  }
};



const User = () => {
  const { data, } = useQuery("pos", () => fetch());
  console.log(data);

  
  return (
    <div className="user">
      <Nav />
      <div className="user_maindiv p-2 lg:p-10 flex justify-center flex-col space-y-5">
        <div className="user_logo">
          <h4>Manage Team/</h4>
          <h4 className="text-3xl space-x-3">Users Roles</h4>
        </div>
        <div className="user banner w-full flex  gap-4 flex-col lg:flex-row">
          <div className="user_banner_left lg:w-2/3 w-full  ">
          <div className="user_banner_k  bg-white shadow-lg  ">
            
                <>
                  <div className="user_banner_  ">
                    
                      <div className="user_1 flex   bg-gray-300 px-3 justify-between">
                      <h4>name</h4>
                      <h4>Description</h4>
                      <h4>Status</h4>
                      <h4>Actions</h4>
                    </div>

                    {data?.filter((data, index) => index < 4)?.map((data , index) => (
                <>   <div className="user_banner_2 flex items-baseline justify-between m-3 gap-3">
                    <h4>{data?.userId}</h4>
                    <h4>data handling of a company</h4>
                    <h4>Active</h4>
                    <div className="user_banner_icon flex items-baseline space-x-4">
                      <FontAwesomeIcon icon={faXmark} />
                      {/* <FontAwesomeIcon icon={faHandHolding} onClick ={()=> navigate("/Edit")} /> */}
                      <Link to = "/Edit">
                      <FontAwesomeIcon icon={faHandHolding}  />
                      </Link>
                      <FontAwesomeIcon icon={faDumpster} />
                    </div>
                  </div>
                    <div className="border border-gray-300 m-3"></div>
                  </>
                    ))}

                  </div>
                </>
              
            </div>
          </div>

          {/* right */}
          <div className="banner2 w-full lg:w-4/12  object-contain  lg:pl-0 ">
            <div className="banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 ">
              <h1>Post a new Job</h1>
              <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
                post a job
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
  );
};

export default User;
