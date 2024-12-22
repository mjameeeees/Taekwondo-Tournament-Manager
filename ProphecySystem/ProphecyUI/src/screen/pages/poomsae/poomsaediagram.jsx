import React from 'react'
import Navbar from '../../components/navbar'
import PoomsaeDetails from '../../components/poomsaeDetails'

function PoomsaeDiagram() {
  return (
    <>
      <Navbar />
      <PoomsaeDetails
        level={"Advance"}
        division={"Junior"}
        gender={"Mens"}
        category={"Fin"}
      />
      <div className={"w-full flex justify-center m-2"}>
        <table className={"w-3/4 text-center"}>
          <tr>
            <td className={"font-bold"}>Name</td>
            <td className={"font-bold"}>Ranking</td>
          </tr>
          <tr>
            <td>Mark James Dinong</td>
            <td>Mark James Dinong</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default PoomsaeDiagram