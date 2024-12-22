import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import FightType from "../components/FightDiagramComponent/fightType";
import Category from "../components/FightDiagramComponent/category";
import Medaltallyteams from "../components/medaltallyteams";

function MedalTally() {
  return (
    <>
      <Navbar />
      <Header headerTitle="Medal Tally" />
      <div className="medaltally w-full flex justify-between self-center mt-5">
            <table className={"w-full text-center m-3"}>
              <tr>
                <td className={"w-2/4 font-bold"}>Teams</td>
                <td className={"font-bold"}>Gold</td>
                <td className={"font-bold"}>Silver</td>
                <td className={"font-bold"}>Bronze</td>
                <td className={"font-bold"}>Overall</td>
              </tr>
             <Medaltallyteams team={"Rodem Tree Mission Church"} gold={12} silver={5} bronze={4} overall={25}/>
            </table>
       </div>
    </>
  );
}

export default MedalTally;
