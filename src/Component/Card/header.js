import React from "react";
import "./header.css"
import { useEffect } from "react";
import { GetData } from "../../Helper/helper";
import { useState } from "react";

const Header = ()=>{
  const [data, setdata] = useState([]);

  useEffect(() => {
    const DataR = async () => {
      const response = await GetData(
        "/trending/all/week?api_key=bfab9bc76a0366ea1b5d301f936f753e&language=en-us"
      );
      //  console.log(response)
      setdata(
        response.data.results[Math.floor(Math.random() * 20)]
      );
      return response;
    };
    DataR();
  }, []);
  console.log(data);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
 

	return (
    <div
      className="Main_Div"
      style={{
        backgroundSize: "Cover",
        backgroundImage: `url(${"https://image.tmdb.org/t/p/original"}${
          data.backdrop_path
        })`,
        backgroundPosition: "top center",
      }}
    >
      <div className="Head_inner">
        <h3 className="m_title">{data?.name || data?.title}</h3>
        <div className="btn">
          <button className="play">Play</button>
          <button className="MyList">My List</button>
        </div>
        <div className="pera">
          {truncateString(data?.overview || data?.description, 150)}
        </div>
      </div>
      <div className="linner"></div>
    </div>
  );
}
export default Header;