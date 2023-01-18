import React from "react";
import "./Card.css";
import { useEffect } from "react";
import { GetData } from "../../Helper/helper";
import { useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Card = ({dataUrl,title}) => {
  const [data, setdata] = useState([]);
   const [id, setId] = useState();

     const getMovieUrl = async (movieName) => {
       let url = await movieTrailer(movieName);
       url = new URL(url);
       const search = new URLSearchParams(url.search);
       const movieID = search.get("v");
       setId(movieID);
     };

     const playVideo = async (name) => {
       if (!name) {
         alert("Movie Trailer is not available");
         return;
       }
       const url = await getMovieUrl(name);
       console.log(url);
     };

  useEffect(() => {
    const DataR = async () => {
      const response = await GetData(
     dataUrl
      );
      //  console.log(response)
      setdata(response?.data?.results);
    };
    DataR();
  }, []);
  console.log(data);

    const opts = {
      height: "400",
      width: "100%",
      playerVars: {
        
        autoplay: 1,
      },
    };

  return (
    <div>
      <h1>{title}</h1>
      <div className="img_div">
        {data.map((obj,index) => (
          <div
            key={index}
            className="img-cont"
            onClick={() => playVideo(obj.original_title)}
          >
            <img
              className="Main_img"
              key={index}
              src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path} `}
              alt={obj.original_title}
            />
            <span>{obj.original_title}</span>
          </div>
        ))}
      </div>
      <div className="V_play">
        {id && <YouTube className="YT" videoId={id} opts={opts} />}
      </div>
    </div>
  );
};
export default Card;
