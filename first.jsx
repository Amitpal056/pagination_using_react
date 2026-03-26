import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallerycard from "../component/Gallerycard";
const First = () => {
  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setuserData(response.data);
  };

  useEffect(() => {
    getdata();
  }, [index]);

 let printdata = (
  <div className="relative flex h-40 w-40 items-center justify-center">
    {/* The Spinning Ring */}
    <div className="absolute h-full w-full animate-spin rounded-full border-8 border-gray-100 border-t-gray-700"></div>

    {/* The Static Text */}
    <h1 className="text-xl  font-bold text-gray-700">Loading</h1>
  </div>
);

  if (userData.length > 0) {
    printdata = userData.map((elem, key) => {
      return (
        <Gallerycard elem={elem} key={key}/>
      );
    });
  }
  return (
    <div className="">
      <div className="overflow-auto flex-wrap flex h-80 gap-4">{printdata}</div>
      <div className="flex gap-4 mt-4 items-center justify-center">
        <button onClick={()=>{
            if(index>1){
                setindex(index-1);
                setuserData([]);
            }
        }} style={{opacity: index==1? 0.5 : 1 }}
         className="bg-red-300 text-amber-950 cursor-pointer hover:bg-red-400 rounded active:bg-red-900 active:text-white p-1 ">
          Prev
        </button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
            setindex(index+1)
            setuserData([])
        }}
         className="bg-red-300 text-amber-950 cursor-pointer hover:bg-red-400 rounded active:bg-red-900 active:text-white p-1 ">
          Next
        </button>
      </div>
    </div>
  );
};

export default First;
