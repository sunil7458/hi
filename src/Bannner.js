import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner2 from "./Banner2";
// import Nav from "./Nav";

const Bannner = () => {
  return (
    <>
    {/* <Nav/> */}
    <div className="banner flex items-center flex-col justify-center  w-full">
      <h1 className=" text-3xl  my-8">Dashboard</h1>
      <div className="main_banner  lg:items-center w-11/12 flex  lg:gap-28 flex-col md:flex-row  ">
        <div className="banner_left md:w-8/12 w-full  ">
          <div className="banner_content w-full md:flex-row  flex-col gap-10  ">
            <div className="banner_header shadow-md    my-8 py-3 pl-6  text-orange-400 lg:text-xl bg-white rounded-md w-full   ">
              Congrats your company has successfully hired 1 candidates
            </div>
            <div className="banner_con flex items-center flex-col lg:flex-row w-full gap-9  ">
              <div className="shadow-md  bg-white w-full   rounded-md h-1/2 py-6 px-10  lg:w-1/2  ">
                <h4 className="font-bold">Status of Application(s)</h4>
                <div className="color">
                  <div className="color_g  ">
                    <span className="bg-green-600 h-2 w-2 text-green-600 rounded-md ">
                      ldd
                    </span>
                    <h4>1 exist</h4>
                  </div>
                  <div className="color_g">
                    <span className="bg-green-600 h-2 w-2 text-green-600 rounded-md ">
                      ldd
                    </span>
                    <h4>1 Hired</h4>
                  </div>Welcome hiringplug

                  <div className="color_g">
                    <span className="bg-green-600 h-2 w-2 text-green-600 rounded-md ">
                      ldd
                    </span>
                    <h4>1 Offered</h4>
                  </div>
                  <div className="color_g">
                    <span className="bg-green-600 h-2 w-2 text-green-600 rounded-md ">
                      ldd
                    </span>
                    <h4>2 Proposed</h4>
                  </div>
                  <div className="color_g">
                    <span className="bg-green-600 h-2 w-5 px-2 text-green-600 rounded-md ">
                      ldd
                    </span>
                    <h4>2 Reject</h4>
                  </div>
                  <div className="color_g">
                    <span className="bg-green-600 h-2 w-5 px-2 text-green-600 rounded-md">
                      ldd
                    </span>
                    <h4>6 ShortListed</h4>
                  </div>
                  <div className="color_g">
                    <span className="bg-green-600 h-2 w-2 px-4 text-green-600 rounded-md ">
                      ldd
                    </span>
                    <h4>3 Viewed</h4>
                  </div>
                </div>

                <span className="flex justify-end text-green-700 ">
                  See Funnel{" "}
                </span>
              </div>

              <div className="banner_2 h-2/5    mt-4 bg-white px-7 py-7shadow-md lg:w-1/2 w-full  ">
                <div className="banner_2 logo">
                  <h4>Since your last visit</h4>
                  <span>22 hour(s) ago</span>
                </div>
                <div className="main_banner2 py-6  flex gap-5">
                  <div className="banner_1   pb-4 border-2 border-green-400 ... w-60 rounded-md flex justify-center flex-col items-center h-28 ">
                    <h1 className="font-bold-200 text-5xl py-3 ">224</h1>
                    <span>New Application</span>
                  </div>

                  <div className="banner_1 pb-4 border-2 border-green-400 ... w-60 rounded-md flex justify-center flex-col items-center h-28 ">
                    <h1 className="font-bold-200 text-5xl py-3">224</h1>
                    <span>Upcoming interview</span>
                  </div>
                </div>
                <div className="main_banner2 py-8  flex gap-5">
                  <div className="banner_1   pb-4 border-2 border-green-400 ... w-60 rounded-md flex justify-center flex-col items-center h-28 ">
                    <h1 className="font-bold-200 text-5xl py-3 ">224</h1>
                    <span>Engaged agencies</span>
                  </div>

                  <div className="banner_1 pb-4 border-2 border-green-400 ... w-60 rounded-md flex justify-center flex-col items-center h-28 ">
                    <h1 className="font-bold-200 text-5xl py-3">224</h1>
                    <span>Job in draft</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_bottom ">
              <div className="banner_bott    my-6 bg-white shadow-md  rounded-md w-full px-7 py-7 ">
                <h1 className="ml-32 ">Jobs Actions</h1>
                <div className="job_header flex justify-around items-center bg-slate-200 xl:w-3/4  w-full ml-0 lg:ml-32 py-1  ">
                  <span>Job Details</span>
                  <span>Activity</span>
                  <span>Status</span>
                </div>

                <div className="banner_bottom_b flex justify-between   ">
                  <div className="banner_bottom_first flex justify-center m-10 flex-col items-center">
                    <h3>new test</h3>
                    <span>Anantapur | 7 days ago</span>
                  </div>

                  <div className="banner_bottom_second flex gap-10  items-center text-center">
                    <h3>active</h3>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="border border-gray-500"></div>
                <div className="banner_bottom_b flex justify-between ">
                  <div className="banner_bottom_first flex justify-center m-10  flex-col items-center">
                    <h3>new test</h3>
                    <span>Anantapur | 7 days ago</span>
                  </div>

                  <div className="banner_bottom_second flex gap-10  items-center text-center">
                    <h3>active</h3>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="border border-gray-500"></div>
                <div className="banner_bottom_b flex justify-between ">
                  <div className="banner_bottom_first flex justify-center m-10 flex-col items-center">
                    <h3>new test</h3>
                    <span>Anantapur | 7 days ago</span>
                  </div>

                  <div className="banner_bottom_second flex gap-10  items-center text-center">
                    <h3>active</h3>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="border border-gray-500"></div>
                <div className="banner_bottom_b flex justify-between  ">
                  <div className="banner_bottom_first flex justify-center m-10  flex-col items-center">
                    <h3>new test</h3>
                    <span>Anantapur | 7 days ago</span>
                  </div>

                  <div className="banner_bottom_second flex gap-10  items-center text-center">
                    <h3>active</h3>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="border border-gray-500"></div>
                <div className="banner_bottom_b flex justify-between  ">
                  <div className="banner_bottom_first flex justify-center m-10 flex-col items-center">
                    <h3>new test</h3>
                    <span>Anantapur | 7 days ago</span>
                  </div>

                  <div className="banner_bottom_second flex gap-10  items-center text-center">
                    <h3>active</h3>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="border border-gray-500"></div>
                <div className="banner_bottom_b flex justify-between ">
                  <div className="banner_bottom_first flex justify-center  m-10 flex-col items-center">
                    <h3>new test</h3>
                    <span>Anantapur | 7 days ago</span>
                  </div>

                  <div className="banner_bottom_second flex gap-10  items-center text-center">
                    <h3>active</h3>

                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="border border-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
        <Banner2 />
      </div>
    </div>
    </>

  );
};

export default Bannner;
