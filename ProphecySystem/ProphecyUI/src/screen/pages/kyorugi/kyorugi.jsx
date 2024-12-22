import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import ButtonKyorugi from '../../components/buttonKyorugi'

function Kyorugi() {
  return (
    <>
      <Navbar/>
      <Header headerTitle={"Kyorugi"}/>
      <p className={" font-semibold text-3xl ml-10 mt-2"}>Choose Tournament</p>
      <div>
          <ButtonKyorugi level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"}/>
          <ButtonKyorugi level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"}/>
          <ButtonKyorugi level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"}/>
      </div>
    </>
  )
}

export default Kyorugi