import { useState } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState({
    status: "",
    feedback: "",
    baseUrl: "",
  });

  const reset = () => {
    setData({
      status: "",
      feedback: "",
      baseUrl: "",
    });
  };

  async function get() {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_TMDB_API_BASE_URL}/${url}?api_key=${process.env.REACT_APP_TMDB_KEY}`,
        {}
      );
      console.log(res);
      if (res.status === 200) {
        setData({
          status: true,
          feedback: res.data,
          baseUrl: process.env.REACT_APP_TMDB_BASE_IMAGE_URL,
        });
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setData({
        status: error.response.data.message,
        feedback: "",
        baseUrl: "",
      });
    }
  }

  return { data, get, reset };
};

export default useGet;
