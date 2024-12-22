import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import GameHistoryButton from '../components/gameHistory'

function GameHistory() {
  return (
    <>
     <Navbar/>
        <Header headerTitle="Game History" />
        
        <div>
          <GameHistoryButton />

        </div>
    </>
  )
}

export default GameHistory