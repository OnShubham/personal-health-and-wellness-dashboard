import React from "react";
import "../Style/Login&Signup.css";

import { Link } from "react-router-dom";
import Background from "../../Assets/landing.jpg";
import logo from "../../Assets/logo.png";

function Signup() {
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
            <Link to="/login">
              <button className="bg-gray-50 w-36 h-14 border   rounded-xl shadow-lg text-blue-950 hover:bg-gray-300">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Header End */}
{/* box */}
<div class="centered-rectangle ">

            
</div>
       

        {/* margin top roght left */}
      </div>
       
      {/*  */}
    </div>
    
  );
}

export default Signup;
