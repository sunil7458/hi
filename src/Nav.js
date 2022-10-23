import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../src/logo-header.png";
// import Nav from "./Nav"
import {
  faBars,
  faMessage,
  faBell,
  faUser,
  // faXmark,
  faDashboard,
  // faSignsPost,
  faPodcast,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  const [mobile, setmobile] = useState(false);
  const [hide, sethide] = useState(false);

  return (
    <div className="nav  bg-white lg:bg-[#f4f5f8] flex justify-between items-center h-20 sticky top-0 ">
      <div
        className="logo   text-2xl ml-3  z-10 "
        onClick={() => setmobile(!mobile)}
      >
        {!mobile ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faBars} className=" " />
        )}
      </div>

      {/* responsive nav */}
      <div
        className={
          !mobile
            ? "hidden"
            : "ull   block bg-white top-0   absolute w-full items-center lg:w-80 "
        }
      >
        <img alt="" src={img2} className="ml-16" />
        <ul className="flex flex-col gap-9 ml-16 mt-20  text-gray-600">
          <Link to="/dash">
            {/* <Nav/> */}
            <li className="flex items-center gap-4 text-xl  hover:text-green-500 cursor-pointer ">
              {" "}
              <FontAwesomeIcon icon={faDashboard} /> Dashboard{" "}
            </li>
          </Link>
          <Link to="/post">
            <li className="flex items-center gap-4  text-xl hover:text-green-500  cursor-pointer ">
              <FontAwesomeIcon icon={faPodcast} />
              Post a job
            </li>
          </Link>
          <Link to="/job">
            <li className="flex items-center gap-4 text-xl hover:text-green-500 cursor-pointer ">
              {" "}
              <FontAwesomeIcon icon={faDashboard} />
              My job{" "}
            </li>
          </Link>
          <Link to="/age">
            <li className="flex items-center gap-4 text-xl hover:text-green-500 cursor-pointer ">
              <FontAwesomeIcon icon={faPodcast} />
              Agengies
            </li>
          </Link>

          <Link to="/sh">
            <li className="flex items-center gap-4 text-xl hover:text-green-500 cursor-pointer ">
              <FontAwesomeIcon icon={faPodcast} />
              Shedule
            </li>
          </Link>
          <Link to="/can">
            <li className="flex items-center gap-4 text-xl hover:text-green-500 cursor-pointer">
              {" "}
              <FontAwesomeIcon icon={faDashboard} />
              candidates{" "}
            </li>
          </Link>
          <li className="flex  gap-4 text-xl hover:text-green-500  cursor-pointer flex-col ">
            <div className="post_job flex items-center gap-4">
              <FontAwesomeIcon icon={faPodcast} />
              <h4>Manage jobs </h4>
              <FontAwesomeIcon
                icon={faArrowDown}
                onClick={() => sethide(!hide)}
              />
            </div>
            <div className={!hide ? "hidden" : " block capitalize space-y-2  "}>
              <Link to="/pan">
                <h4 className="hover:text-black ">panal user</h4>
              </Link>
              <Link to="/use">
                <h4 className="hover:text-black ">user role</h4>
              </Link>
              <Link to="/user">
                <h4 className="hover:text-black ">user communication</h4>
              </Link>
              <Link to="/u">
                <h4 className="hover:text-black ">Report</h4>
              </Link>
              <Link to="/c">
                <h4 className="hover:text-black ">Form</h4>
              </Link>
            </div>
          </li>
          <Link to="/Help">
            <li className="flex items-center gap-4 text-xl hover:text-green-500 cursor-pointer">
              {" "}
              <FontAwesomeIcon icon={faDashboard} />
              Help
            </li>
          </Link>
          <Link to="/ed">
            <li className="flex items-center gap-4 text-xl hover:text-green-500 cursor-pointer">
              <FontAwesomeIcon icon={faPodcast} />
              Faq
            </li>
          </Link>
        </ul>
      </div>
      {/*  */}

      <div className="header_logo ">
        <h1 className="sm:text-sm">
          Welcome <span className="font-bold">hiringplug</span>
        </h1>
      </div>

      <div className="post_icon  flex justify-between items-center gap-6 ">
        <div className="space-x-6 item-center hidden md:block ">
          <span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">
            post a job
          </span>
          <FontAwesomeIcon icon={faMessage} className="text-2xl" />

          <FontAwesomeIcon icon={faBell} className="text-2xl" />
        </div>
      </div>
      <div className="whatsapp flex justify-between items-center gap-6 mr-10 ">
        <h2> sunil</h2>
        <FontAwesomeIcon icon={faUser} className="text-2xl" />
        <FontAwesomeIcon icon={faUser} className="text-2xl" />
      </div>
    </div>
  );
};

export default Nav;
