import React, { useState } from 'react'
import { data, moht, sunil,  } from '../Sdata'

const JActive = ({sej}) => {
const [   col , setcol  ] = useState("")

  const sun = () =>{

sej(moht)
setcol("active")


  }

  const fun  =() =>{
sej(sunil)
setcol("fg")

  }


  return (
    <div className="mt-5 flex items-center gap-5 text-center flex-wrap lg:w-full">
              <div
          className={`${
            col === "active"
              ? "bg-green-500 text-white"
              : "bg-white text-black "
          }  border border-green-500 p-1 cursor-pointer rounded-2xl text-white  w-24 `}
          onClick={sun}
        >
          Active ()
        </div>
              <div className={`  ${col === "fg" ? "bg-green-500 text-white" :  " bg-white text-black" }  border border-green-500 p-1 rounded-2xl text-green-500 bg-white w-24`} onClick={fun}>
                Draft (42)
              </div>
              <div className="border border-green-500 p-1 rounded-2xl text-green-500 bg-white w-28" onClick={sun}>
                Archived (0)
              </div>
              <div className="border border-green-500 p-1 rounded-2xl text-green-500 bg-white w-24">
                On hold (0)
              </div>
              <div className="border border-green-500 p-1 rounded-2xl text-green-500 bg-white w-24">
                Paused (9)
              </div>
              <div className="border border-green-500 p-1 rounded-2xl text-green-500 bg-white w-52">
                wating for approval (49)
              </div>

              <div className="border border-green-500 p-1 rounded-2xl text-white bg-green-500 w-24">
                Alljobs
              </div>
            </div>
  )
}

export default JActive