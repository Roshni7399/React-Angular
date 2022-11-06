import React, { useState, useEffect } from "react";
import '../Signup/Signup.css'
import { toast } from "react-toastify";
import { userSignup } from '../../Services/Auth.service'
import { useNavigate, Link } from "react-router-dom";



export default function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobileno: "",
    email: "",
    password: "",
    add_line1: "",
    add_line2: "",
    state: "",
    city: "",

  });


  const signuphandler = async () => {
    const apiResponse = await userSignup(
      data.firstname,
      data.lastname,
      data.mobileno,
      data.email,
      data.password,
      data.add_line1,
      data.add_line2,
      data.state,
      data.city,

    );
    //  console.log("apiResponse", apiResponse);
    setLoading(true);
    if (apiResponse.data.status === true) {
      toast.info(
        "Signup Successfully.",
        {
          position: toast.POSITION.TOP_CENTER,
        },
        { autoClose: 1000 }
      );
      setTimeout(() => {
        navigate("/login");
      }, 1000)
    }
    else {
      toast.error(
        "Signup unSuccessfully.",
        {
          position: toast.POSITION.TOP_RIGHT,
        },
        { autoClose: 1000 }
      );

    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  // Validations
  const [valid, setValid] = useState({
    email: false,
    password: false,
    firstname: false,
    lastname: false,
    add_line1: false,
    add_line1Error: "",
    add_line2: false,
    add_line2Error: "",
    state: false,
    stateError: "",
    city: false,
    cityError: "",
    mobileno: false,
    mobilenoError: "",
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: "",
  });

  const validatefirstname = (firstname) => {
    if (firstname.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        firstname: true,
        firstnameError: "Please enter firstname",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        firstname: false,
        firstnameError: "",
      }));
    }
  };

  const validatelastname = (lastname) => {
    if (lastname.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        lastname: true,
        lastnameError: "Please enter lastname",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        lastname: false,
        lastnameError: "",
      }));
    }
  };

  const validateemail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = pattern.test(email);

    if (emailIsValid) {
      setValid((previousValue) => ({
        ...previousValue,
        email: false,
        emailError: "",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        email: true,
        emailError: "Please enter your correct email",
      }));
    }
  };
  const validatepassword = (password) => {
    if (password.length < 1) {
      setValid((previousValue) => ({
        ...previousValue,
        password: true,
        passwordError: "Enter your correct password",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        password: false,
        passwordError: "",
      }));
    }
  };

  const validatemobileno = (mobileno) => {
    if (mobileno.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        mobileno: true,
        mobilenoError: "Please enter mobileno",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        mobileno: false,
        mobilenoError: "",
      }));
    }
  };

  const validateaddline1 = (add_line1) => {
    if (add_line1.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        add_line1: true,
        add_line1Error: "Please enter add_line1",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        add_line1: false,
        add_line1Error: "",
      }));
    }
  };

  const validateaddline2 = (add_line2) => {
    if (add_line2.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        add_line2: true,
        add_line2Error: "Please enter add_line2",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        add_line2: false,
        add_line2Error: "",
      }));
    }
  };

  const validatestate = (state) => {
    if (state.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        state: true,
        stateError: "Please enter state",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        state: false,
        stateError: "",
      }));
    }
  };

  const validatecity = (city) => {
    if (city.length == 0) {
      setValid((previousValue) => ({
        ...previousValue,
        city: true,
        cityError: "Please enter city",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        city: false,
        cityError: "",
      }));
    }
  };



  // console.log("data",data);
  // console.log("address",address);


  return (
    <div>
      <div className="form-gap"></div>
      <div className="container">
        <div className="text-center">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
              <form role="form" onSubmit={(e) => handleSubmit(e)}>
                <h2 style={{ color: "white" }}>Please Sign Up <small>It's free and always will be.</small></h2>
                <hr className="colorgraph" />
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="firstname" id="first_name" className="form-control input-lg" placeholder="First Name" onBlur={(e) => validatefirstname(e.target.value)} onChange={handleChange} />
                      {valid.firstname && (
                        <span className="text-danger">{valid.firstnameError}</span>)}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="lastname" id="last_name" className="form-control input-lg" placeholder="Last Name" onBlur={(e) => validatelastname(e.target.value)} onChange={handleChange} />
                      {valid.lastname && (
                        <span className="text-danger">{valid.lastnameError}</span>)}
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email" onBlur={(e) => validateemail(e.target.value)} onChange={handleChange} />
                  {valid.email && (
                    <span className="text-danger">{valid.emailError}</span>
                  )}
                </div>
                <br />
                <div className="form-group">
                  <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" onBlur={(e) => validatepassword(e.target.value)} onChange={handleChange} />
                  {valid.password && (
                    <span className="text-danger">{valid.passwordError}</span>
                  )}
                </div>
                <br />
                <div className="form-group">
                  <input type="text" name="mobileno" id="mobileno" className="form-control input-lg" placeholder="Mobile Number" onBlur={(e) => validatemobileno(e.target.value)} onChange={handleChange} />
                  {valid.mobileno && (
                    <span className="text-danger">{valid.mobilenoError}</span>)}
                </div>
                <br />

                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="add_line1" id="add_line1" className="form-control input-lg" placeholder="Address line 1" onBlur={(e) => validateaddline1(e.target.value)} onChange={handleChange} />
                      {valid.add_line1 && (
                        <span className="text-danger">{valid.add_line1Error}</span>)}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="add_line2" id="add_line2" className="form-control input-lg" placeholder="Address line 2" onBlur={(e) => validateaddline2(e.target.value)} onChange={handleChange} />
                      {valid.add_line2 && (
                        <span className="text-danger">{valid.add_line2Error}</span>)}
                    </div>
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="city" id="city" className="form-control input-lg" placeholder="City" onBlur={(e) => validatecity(e.target.value)} onChange={handleChange} />
                      {valid.city && (
                        <span className="text-danger">{valid.cityError}</span>)}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="state" id="state" className="form-control input-lg" placeholder="State" onBlur={(e) => validatestate(e.target.value)} onChange={handleChange} />
                      {valid.state && (
                        <span className="text-danger">{valid.stateError}</span>)}
                    </div>
                  </div>
                </div>
                <br />

                <hr className="colorgraph" />

                <div className="row">
                  <div className="d-grid gap-2 col-md-12">
                    <button className="btn btn-warning btn-lg " name="Submit" value="Login" type="Submit" onClick={signuphandler}>
                      {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : "Register"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
