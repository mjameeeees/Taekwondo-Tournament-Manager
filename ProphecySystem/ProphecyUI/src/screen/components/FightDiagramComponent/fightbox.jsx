import React from "react";

function Fightbox() {
  return (
    <>
      <div className="box flex flex-col ml-5 mt-5">
        <button className="w-60 h-36 border">
          <div className="chong w-full h-2/4 flex flex-row justify-between items-center">
            <p>Mark James Dinong</p>
            <div className={"mr-2"}>16</div>
          </div>
          <hr/>
          <div className="hong w-full h-2/4 flex flex-row justify-between mt-5">
            <p>Jayar Carlos Santiago</p>
            <div className={"mr-2"}>12</div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Fightbox;
