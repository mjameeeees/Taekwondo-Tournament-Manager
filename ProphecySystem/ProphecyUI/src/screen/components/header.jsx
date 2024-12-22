import React from 'react'

function Header({headerTitle}) {
  return (
    <>
    <div className="w-full">
      <div className="header flex justify-center flex-col">
        <p className='textColor text-center text-2xl font-semibold p-2'>{headerTitle}</p>
        <hr/>
      </div>
      </div>
    </>
  )
}

export default Header