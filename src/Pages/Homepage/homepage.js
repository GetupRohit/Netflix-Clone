import React from "react";
import { useEffect } from "react";
import { GetData } from "../../Helper/helper";
import { useState } from "react";
import Card from "../../Component/Card/Card";
import "./homepage.css";
import Header from "../../Component/Card/header";
import Orignal from "../../Component/Orignal/Orignal";
import Navbar from "../../Component/Nav/Nav";


const HomePage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const DataR = async () => {
      const response = await GetData(
        "/trending/all/week?api_key=bfab9bc76a0366ea1b5d301f936f753e&language=en-us"
      );
      //  console.log(response)
      setdata(response?.data?.results);
    };
    DataR();
  }, []);
  console.log(data);
  return (
    <>
    <Navbar/>
      <Header
        picUrl="https://image.tmdb.org/t/p/original/uU6YW3N11qECNfz18LNGAGg3Uir.jpg"
        name=""
      />

      <Orignal
        dataUrl="/discover/tv?api_key=bfab9bc76a0366ea1b5d301f936f753e&with_networks=213"
        title="Netflix Originals"
      />

      {/* <>
        <Card />
      </> */}
      <>
        <Card
          dataUrl="/trending/all/week?api_key=bfab9bc76a0366ea1b5d301f936f753e&language=en-us"
          title="Trending Now"
        />
      </>
      <>
        <Card
          dataUrl="/movie/top_rated?api_key=bfab9bc76a0366ea1b5d301f936f753e&language=en-us"
          title="Top Rated"
        />
      </>
      <>
        <Card
          dataUrl="/discover/movie?api_key=bfab9bc76a0366ea1b5d301f936f753e&with_genres=28"
          title="Action Movies"
        />
      </>
      <>
        <Card
          dataUrl="/discover/movie?api_key=bfab9bc76a0366ea1b5d301f936f753e&with_genres=37"
          title="Comedy Movies"
        />
      </>
      <>
        <Card
          dataUrl="/discover/movie?api_key=bfab9bc76a0366ea1b5d301f936f753e&with_genres=27"
          title="Horrer Movies"
        />
      </>
      <>
        <Card
          dataUrl="/discover/movie?api_key=bfab9bc76a0366ea1b5d301f936f753e&with_genres=10749"
          title="Romantic Movie"
        />
      </>
      <>
        <Card
          dataUrl="/discover/movie?api_key=bfab9bc76a0366ea1b5d301f936f753e&with_genres=99"
          title="Documentaries"
        />
      </>
    </>
  );
};
export default HomePage;
