import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import KyorugiDetails from '../../components/kyorugiDetails'
import Fightbox from '../../components/FightDiagramComponent/fightbox'

function Fightdiagram() {
  return (
    <>
        <Navbar/>
        <KyorugiDetails level={"Novice"} division={"Junior"} gender={"Mens"} category={"Fin"} />
        <div className="diagram flex justify-start flex-col">
          <Fightbox/>
          <Fightbox/>

        </div>
    </>
   
  )
}

export default Fightdiagram