import React from "react";
import { GetData } from "../../Helper/helper";
import { useEffect } from "react";
import { useState } from "react";
import "./Orignal.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Orignal = ({ dataUrl, title }) => {
  const [data, setdata] = useState([]);
  const [id, setId] = useState();

  const MovieUrl = async (MovieName) => {
    const uRL = await movieTrailer(MovieName);
    uRL = new URL(uRL);
    const search = new URLSearchParams(uRL.search);
    const movieID = search.get("v");
    setId(movieID);
  };

  
  const playVideo = async (name) => {
    if (!name) {
      alert("Movie Trailer is not available");
      return;
    }
    const url = await MovieUrl(name);
    console.log(url);
  };

  useEffect(() => {
    const DataR = async () => {
      const response = await GetData(dataUrl);
      //  console.log(response)
      setdata(response?.data?.results);
    };
    // console.log(DataR);
    DataR();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>{title}</h1>
      <div className="img_div">
        {data.map((obj, index) => (
          <div onClick={() => playVideo(obj.original_title)}>
            <img
              className="M_img"
              key={index}
              src={`https://image.tmdb.org/t/p/w500${obj.poster_path} `}
              alt={obj.original_title}
            />
            {/* { MovieUrl(obj.original_name) } */}
            <span className="orgT">{obj.original_title}</span>
          </div>
        ))}
      </div>
      <div>{id && <YouTube videoId={id} />}</div>
    </div>
  );
};
export default Orignal;
