import React from "react";
import Nav from "../Nav";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const View = () => {
  return (
    <div className="View">
      <Nav />
      <div className="main_view flex flex-col justify-between  md:px-10 md:py-20  py-10 px-5">
        <div className="main_view_content">
          <h4>Candidate Assessment/</h4>
          <h2 className="text-4xl">N/A</h2>
        </div>
        <div className="view_first bg-white shadow-md w-full mt-7 items-baseline md:flex md:justify-between p-5 gap-8  flex-wrap">
          <div className="view flex ">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h4>Previous Candidate</h4>
          </div>
          <div className="viewlist flex  gap-5 flex-wrap">
            <div className="bg-green-600 text-white py-1 rounded-md  px-4 ">
              forward/share
            </div>
            <div className="bg-green-600 text-white py-1 rounded-md  px-4 ">
              My Assessment
            </div>
            <div className="bg-green-600 text-white py-1 rounded-md  px-4 ">
              Shedule candidates
            </div>
            <div className="bg-green-600 text-white py-1 rounded-md  px-4 ">
              change status
            </div>
          </div>
          <div className="view flex ">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h4>Previous Candidate</h4>
          </div>
        </div>

        {/* banner */}
        <div className="view_bannner  w-full mt-8">
          <div className=" lg:w-2/3 w-full ">
            <div className="view_bfirt bg-white shadow-md w-full p-6  ">
              <div className=" lg:w-3/4 gap-12 flex w-full flex-col md:flex-row p-3 justify-between">
                <div className="viwe_imf  text-8xl">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="view_sf gap-6">
                  <h3>Domain</h3>
                  <h4>N/A</h4>
                  <h4>Total Experience</h4>
                  <h4>N/A</h4>
                  <h4>Current CTC</h4>
                  <h4>N/A</h4>
                </div>
                <div className="view_sf">
                  <h3>Domain</h3>
                  <h4>N/A</h4>
                  <h4>Total Experience</h4>
                  <h4>N/A</h4>
                  <h4>Current CTC</h4>
                  <h4>N/A</h4>
                </div>
              </div>
              <hr className="border-gray-500  border mx-2"></hr>
              <div className="second_  flex justify-between  m-2 w-full lg:w-3/4 my-5">
                <div className="id ">
                  <h4>EmailId</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
                <div className="id">
                  <h4>Contact number</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
                <div className="id">
                  <h4>Date of birth</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
              </div>

              {/*  */}
              <hr className="border-gray-500  border mx-2"></hr>
              <div className="second_  flex justify-between  m-2 w-full lg:w-3/4 my-5">
                <div className="id ">
                  <h4>EmailId</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
                <div className="id">
                  <h4>Contact number</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
                <div className="id">
                  <h4>Date of birth</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
              </div>
              {/*  */}
              {/* kiuy */}
              <hr className="border-gray-500  border mx-2"></hr>
              <div className="second_  flex justify-between  m-2 w-full lg:w-3/4 my-5">
                <div className="id ">
                  <h4>EmailId</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
                <div className="id">
                  <h4>Contact number</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
                <div className="id">
                  <h4>Date of birth</h4>
                  <h4 className="my-7">N/A</h4>
                </div>
              </div>
              {/*  */}
              <div className="border border-black rounded-md p-5" >
<h4>Screening Questions:</h4>
<div className="mt-8">
  <h4>Question1 : Please specify the current and preferred location of the candidate?</h4>

  <h4>
Answer 1 : Hyderabad, Bengaluru - 1/1</h4>
</div>

</div>
<div className="tavle">
<h4>Experience</h4>
<table   >
<tr>


</tr>

</table>

</div>
            </div>
          </div>
        </div>

        {/*  */}




      </div>
    </div>
  );
};

export default View;
