import React from "react";
import logo from "../Assets/logo.png";
import Content from "../Assets/img-1.png";
import Background from "../Assets/landing.jpg";

function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat  overflow-hidden  relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Header */}
      <div className="p-16">
        <div className="flex  justify-between items-center mx-10 my-4  ">
          <img src={logo} alt="logo" className="h-20 w-20 -mt-10 " />
          <ul className="justify-center flex space-x-32  text-2xl font-sans ">
            <li className=" text-white hover:text-indigo-900 ">Home</li>
            <li className=" text-white hover:text-indigo-900">About</li>
            <li className=" text-white hover:text-indigo-900">Contact</li>
          </ul>

          <div className=" space-x-5 text-2xl font-sans">
            {" "}
            <button className="bg-indigo-700 w-28 h-12 borde rounded-lg text-white hover:bg-indigo-900">
              Login
            </button>
            <button className="bg-indigo-700 w-28 h-12 borde rounded-lg text-white hover:bg-indigo-900">
              Sign Up
            </button>
          </div>
        </div>
        {/* Header End */}
        <div className="Content p-10">
          <div className="flex justify-around">
            <div className="">
              <h1 className="uppercase text-green-100  pt-40 text-6xl font-serif font-bold">
                personal health <br /> and wellness
              </h1>
              <br />
              <p className="mt-5 text-lg font-thin text-white">
                True wellness is about balance – nourishing our bodies with a
                diet rich in diverse, wholesome foods,
                <br /> not just for the sake of calorie counts, but for overall
                health. It's about understanding that what we consume directly
                impacts not only <br /> our physical well-being but also the
                radiance of our skin. Embrace a lifestyle where mindful eating
                harmonizes with self-care, where each meal is an
                <br />
                opportunity to fuel the body and soul. Remember, the glow of
                good health is the best foundation any skincare routine can
                have. Let your daily habits reflect a journey towards a
                healthier, happier you, inside and out.
              </p>
            </div>
            <img src={Content} alt="content" className="w-2/6" />
          </div>
        </div>

        {/* margin top roght left */}
      </div>
      {/*  */}
    </div>
  );
}

export default Home;
  