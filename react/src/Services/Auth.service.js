import axios from "axios";
import { getInfo } from "./Auth.header";

const TOKEN = getInfo();

const API_URL = "http://localhost:8989/";

let axiosConfig = {
  header: {
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
};

// Signup
export const userSignup = async (firstname, lastname, mobileno, email, password, add_line1,add_line2,state,city) => {
    // console.log("fname service",firstname);
    // console.log("fname service",lastname);
    // console.log("fname service",mobileno);
    // console.log("fname service",email);
    // console.log("fname service",password);
    // console.log("fname service",array);
    return await axios.post(
      API_URL + "user/signup",
      {
        firstname,
        lastname,
        mobileno,
        email,
        password,
        add_line1,
        add_line2,
        state,
        city
      },
      axiosConfig
    );
  };

// Login
export const userLogin = async (email, password) => {
  // console.log("login service",email);
  // console.log("login service",password);
  try {
    const response = await axios.post(
      API_URL + "user/login",
      {
        email,
        password,
      },
      axiosConfig
    );
    if (response.data.status === true) {
      localStorage.setItem("users", JSON.stringify(response.data));

      return response;
    } else {
      return response;
    }
  } catch (e) {
    return null;
  }
};

// Get ID
export const getUserId = async (_id) => {
  // console.log("service _id", _id);
  return axios.put(
    API_URL + "user/getByID",
    {
      _id,
    },
    axiosConfig
  );
};

// Update Profile
export const updateUserData = async (_id,firstname,lastname,mobileno,add_line1,add_line2,state,city) => {

  console.log(_id);
  console.log(firstname);
  console.log(lastname);
  console.log(mobileno);
  console.log(add_line1);
  console.log(add_line2);
  console.log(state);
  console.log(city);

  return axios.post(
    API_URL + "user/update",
    {
      _id,
      firstname,
      lastname,
      add_line1,
      add_line2,
      state,
      city
    },
    axiosConfig
  );
};

