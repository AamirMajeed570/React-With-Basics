import React, { useEffect, useState } from "react";

const ReactApi = () => {
    const [images,setImages] = useState([]);
  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        if (!response.ok) {
          throw new Error("Error Finding Images");
        }
        const data = await response.json();
        setImages(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getImages();
  },[]);
  return (
    <>
      <div className="conatiner">
        <button onClick={()=>{
            getImages()
        }} className="bg-violet-400 w-28 h-11 cursor-pointer rounded text-xl hover:transition-all">
          Generate
        </button>
      </div>
      <div className="p-10 grid grid-cols-5">
       {images.map((element,i)=>{
          return  <img key={i} src={element.download_url} width={300} height={300} className="m-10 rounded px-4"/>
       })}
      </div>
    </>
  );
};

export default ReactApi;
