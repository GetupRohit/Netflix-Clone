// import React from "react";
import "./helper.css";
import axios from "axios";

const basURl = "https://api.themoviedb.org/3";

export const GetData = (path) => {
 return axios
    .get(`${basURl}${path}`)
    .then((response) => {
		// console.log(response)
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
