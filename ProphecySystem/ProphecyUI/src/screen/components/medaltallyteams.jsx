import React from 'react'

function Medaltallyteams({team , gold , silver , bronze , overall}) {
  return (

         <tr>
                <td>{team}</td>
                <td>{gold}</td>
                <td>{silver}</td>
                <td>{bronze}</td>
                <td>{overall}</td>
              </tr>
  )
}

export default Medaltallyteams