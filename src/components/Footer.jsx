import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export default function Footer() {
  const{page,PageHandler,totalPage}= useContext(AppContext)
  return(
    <div className=" w-full flex border mb-3 mt-2  shadow-md bottom-0 justify-center items-center">
      <div className=" w-11/12 max-w-[800px] justify-between flex py-2 ">
      <div className=" flex gap-x-10">
      {page>1&&
        <button className=" hover:bg-blue-800 transition-all duration-[0.5s] rounded-md border-2 p-2 border-blue-700" onClick={()=>PageHandler(page-1)}>
          Previous
        </button>}

        {
          page<totalPage &&
          <button className="hover:bg-blue-800 transition-all duration-[0.5s]   rounded-md border-2 px-4 border-blue-700" onClick={()=>PageHandler(page+1)}>
            Next
          </button>

        }
      </div>
       
        <p>
          Page {page} of {totalPage}
        </p>
      </div>

    </div>
  )
}
