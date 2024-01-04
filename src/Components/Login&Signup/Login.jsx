import React from "react";
import "../Style/Login&Signup.css";

import { Link } from "react-router-dom";
import Background from "../../Assets/landing.jpg";
import logo from "../../Assets/logo.png";

function Login() {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat  overflow-hidden  relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Header */}
      <div className="p-16">
        <div className="flex  justify-between items-center mx-10 my-4  ">
          <img
            src={logo}
            alt="logo"
            width={"120px"}
            height={"120px"}
            className="  -mt-10 "
          />

          <div className=" space-x-10 text-2xl font-sans">
            {" "}
            <Link to="/Signup">
              <button className="bg-indigo-700 w-36 h-14  rounded-xl shadow-lg text-white hover:bg-indigo-900">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* Header End */}

        {/* Content */}
        <div class="centered-rectangle ">
          <div className="login-form-1 ">
            <h1
              style={{ fontFamily: "Poppins", fontSize: "36px" }}
              className="text-2xl  font-bold text-[#030E32]"
            >
              Log in to your Account
            </h1>
            <h5
            style={{
              fontFamily: "Poppins",
              fontSize: "15px",
              letterSpacing: "0.15px",
            }}
            className="text-[#7E7E7E]"
          >
            Enter your email to receive your reset password link.
          </h5>
          <input
            className="register-input"
            type="text"
            placeholder="Email"
    
      
          />
          <input
            className="register-input mt-4"
            type="password"
            placeholder="password"
            
            
          />
          </div>
        </div>

        {/* margin top roght left */}
      </div>
      {/*  */}
    </div>
  );
}

export default Login;
