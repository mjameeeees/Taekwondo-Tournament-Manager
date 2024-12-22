import React from "react";
import Navbar from "../../components/navbar";
import PoomsaeDetails from "../../components/poomsaeDetails";
import ButtonPoomsae from "../../components/buttonPoomsae";
import Header from "../../components/header";

function Poomsae() {
  return (
    <>
      <Navbar />
      <Header headerTitle={"Poomsae"}/>
      <p className={" font-semibold text-3xl ml-10 mt-2"}>Choose Tournament</p>
      <div>
          <ButtonPoomsae level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"}/>
          <ButtonPoomsae level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"}/>
          <ButtonPoomsae level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"}/>
      </div>
     
    </>
  );
}

export default Poomsae;
