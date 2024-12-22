import React from 'react'
import { Link } from 'react-router-dom'

function ButtonKyorugi({level ,division, gender , category}) {
  return (
   <>
   <Link to={"/tournament/kyorugi/fight-diagram-kyorugi"}>
    <button className={"w-52 h-full ml-10 mt-5 text-left"}>
            <div className={'buttonKyorugi w-50 h-48 flex flex-col justify-center'}>
             <p>Level: {level}</p>
             <p>Division: {division}</p>
             <p>Gender: {gender}</p>
             <p>Category: {category}</p> 
             </div>
          </button>
   
   </Link>
  
   </>
  )
}

export default ButtonKyorugi