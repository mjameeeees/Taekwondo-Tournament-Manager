import React from 'react'

function Category() {
  return (
    <>
    <div className="container w-full flex flex-row justify-around mt-3">
      <button className="catContainer w-40 h-12 flex justify-center items-center border border-opacity-60">
        <div className="list">Fin Weight</div>
      </button>
      <button className="add w-40 h-12 flex justify-center items-center border border-opacity-60 mb-3"><p>+</p></button>
    </div>
    <hr/>
    </>
  )
}

export default Category