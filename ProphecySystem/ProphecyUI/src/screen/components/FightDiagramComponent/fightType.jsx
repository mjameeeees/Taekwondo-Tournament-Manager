import React from 'react'
import { Link } from 'react-router-dom'

function FightType() {
  return (
    <>
    <div className="compType w-full flex flex-row mt-3">
            <div className="compTypeContainer w-3/4 h-12 flex justify-around items-center flex-row">
              <Link className="kyorugi w-40 h-full flex justify-center items-center border border-opacity-60" to="/tournament/level/fight-diagram-kyorugi">
                <button><p>Kyorugi</p></button>
              </Link>
              <Link className="poomsae w-40 h-full flex justify-center items-center border border-opacity-60" to="/tournament/level/fight-diagram-poomsae">
              <button>Poomsae</button>  

              </Link>
            </div>
            <div className="menuContainer w-1/6 flex justify-evenly items-center">
              <Link to="/medal-tally" className="medalTally border rounded-full h-10 w-10 flex justify-center items-center">
                <button>m</button>
              </Link>
              <Link to="/history" className="gameHistory border rounded-full h-10 w-10 flex justify-center items-center">
              <button>g</button>
              </Link>
            </div>
        </div>
    </>
  )
}

export default FightType