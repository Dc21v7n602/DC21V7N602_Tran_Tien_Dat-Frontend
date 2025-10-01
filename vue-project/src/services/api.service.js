import axios from "axios";

export default (baseURL = "/api") => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
