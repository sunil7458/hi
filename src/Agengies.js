import React, { useState } from "react";
import Nav from "./Nav";
import { data } from "./Sdata";
import img10 from "../src/sunil.jpeg";
// import img from "../src/empathy.png"
import img11 from "../src/action-md.png";

const Agengies = () => {
  const [t,] = useState(data);
  return (
    <div className="age">
      <Nav />
      <div className="main_Agensies mt-20 lg:px-10 lg:py-22  py-10 px-5">
        <div className="logo ">
          <h4>Engaged Agencies</h4>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-8 lg:gap-0">
          <div className="agen_form_main   w-full">
            <div className="agenleft_content  w-full bg-white shadow-md mt-10 p-1 lg:w-11/12">
              <div className="flex flex-col ">
                <h4 className="   ">Engaged [143]</h4>
                <div className="w-10 bg-green-500 "></div>
              </div>
              <div className="form_header mt-6 p-5">
                <div className="border border-gray-400"></div>
                <div className="form_first ">
                  <div className="radio flex justify-evenly items-center mt-3">
                    <div className="radioo flex items-center gap-1">
                      <input type="radio" name="gender" value="male" />
                      <h4>select</h4>
                    </div>
                    <select className=" p-2 bg-white border border-gray-300 w-1/2 text-gray-400">
                      {t?.map((data) => (
                        <option value={data}>{data.username}</option>
                      ))}
                    </select>

                    <div className="bg-green-500 px-6 rounded-2xl py-1">Go</div>
                  </div>
                </div>

                <div className="border border-gray-400 mt-5"></div>

                <div className="flex justify-center items-center ">
                  <div className="age_2 flex  justify-evenly w-full  mt-10 flex-col lg:flex-row items-center gap-10">
                    <div className="flex justify-evenly flex-col lg:flex-row gap-10">
                      <div className="agen_imd flex gap-6 justify-center">
                        <input type="radio" name="gender" value="male" />
                        <img src={img10} className="h-20" alt="hgfg" />
                      </div>

                      <div className="age_pagar w-full  lg:w-1/3">
                        <h4 className="text-gray-500 text-md">
                          Serving Skill Pvt Ltd Test
                        </h4>
                        <span className="">
                          <h4>Industries</h4>
                          <h5 className=" w-full lg:w-10/12 text-gray-500 ">
                            banking,Financial Svcs. (Non-bank &
                            Insurance),Information Technology,Investments &
                            Asset Management,Management Consulting,
                          </h5>
                        </span>
                        <div className="exp">
                          <h4>Experience</h4>
                          <h4 className="text-gray-500">5-years</h4>
                        </div>
                      </div>
                    </div>
                    <div className="age_y flex justify-between w-full lg:w-1/4 items-center text-center mb-12">
                      <span>
                        <h4>Location</h4>
                        <h4 className="text-gray-500">India</h4>
                        <h4>Rating</h4>
                      </span>
                      <img src={img11} className=" " alt="djhfg" />
                    </div>
                  </div>
                </div>
                <div className="last_para mt-9">
                  <span>Description</span>
                  <span className="">
                    GST: 27AFGPG8635Q1ZR) Nurtured and conceptualised by Preity
                    Goyyal, a Chartered Accountant and M.Phil. Our mission is to
                    serve skills to cater for Human Resource needs of different
                    industries. We serve our purpose with strong database and
                    analytical skills to identify right candidate to fit in the
                    work environment. We offer our expertise by screening the
                    candidate through technical, communication, reliability,
                    stability and economical parameters. Nurtured and
                    conceptualised by Preity Goyyal, a Chartered Accountant and
                    M.Phil. Our mission is to serve skills to cater for Human
                    Resource needs of different industries. We serve our purpose
                    with strong database and analytical skills to identify right
                    candidate to fit in the work environment. We offer our
                    expertise by screening the candidate through technical,
                    communication, reliability, stability and economical
                    parameters.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner2 w-full md:w-4/12 lg:mr-8 object-contain  lg:pl-0 ">
            <div className="banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 ">
              <h1>Post a new Job</h1>
              <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
                post a job
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
  );
};

export default Agengies;
