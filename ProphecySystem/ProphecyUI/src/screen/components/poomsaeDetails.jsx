import React from 'react'

function PoomsaeDetails({level , division , gender , category }) {
    return (
        <>
         <div className={"buttonDetails w-full h-10 m-2 flex flex-row justify-around"}>
             <p>Level: {level}</p>
             <p>Division: {division}</p>
             <p>Gender: {gender}</p>
             <p>Category: {category}</p>
         </div>
         <hr/>
        </>
       )
}

export default PoomsaeDetails