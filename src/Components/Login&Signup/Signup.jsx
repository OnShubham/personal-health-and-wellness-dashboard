import React from "react";
import { Link } from "react-router-dom";
import Background from "../../Assets/landing.jpg";
import logo from "../../Assets/logo.png";

function Signup() {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat overflow-hidden relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Header */}
      <header className="p-16">
        <div className="flex justify-between items-center mx-10 my-4">
          <Link to={"/"}>
            {" "}
            <img
              src={logo}
              alt="logo"
              width="120px"
              height="120px"
              className="-mt-10"
            />
          </Link>

          <nav className="space-x-10 text-2xl font-sans">
            <Link to="/login">
              <button className="bg-gray-50 w-36 h-14 border rounded-xl shadow-lg text-blue-950 hover:bg-gray-300">
                Login
              </button>
            </Link>
          </nav>
        </div>
      </header>
      {/* Header End */}

      {/* Signup Form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* Signup Form End */}
    </div>
  );
}

export default Signup;
