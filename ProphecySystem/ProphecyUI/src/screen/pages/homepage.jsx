import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen flex justify-center">

            <div className="w-1/3 h-auto flex flex-col justify-center items-center">
              <p className="slogan w-full font-sans font-black text-center">The First Ever Taekwondo Tournament Manager</p>
              <Link className=" w-3/5 h-14   flex justify-center items-center mt-2 border-2 text-fuchsia-100 font-bold buttonColor" to="/tournament">
                <button>
                  Start
                </button>
              </Link>
            </div>
      

      </section>
    </>
  );
}

export default Homepage;
