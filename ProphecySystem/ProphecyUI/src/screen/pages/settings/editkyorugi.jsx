import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import InsertSettings from "../../components/SettingsComponent/insertSettings";
import InsertLevel from "../../components/SettingsComponent/InsertDataModal/insertLevel";
import InsertDivision from "../../components/SettingsComponent/InsertDataModal/insertDivision";
import InsertCategory from "../../components/SettingsComponent/InsertDataModal/insertCategory";
import InsertGender from "../../components/SettingsComponent/InsertDataModal/insertGender";

function EditKyorugi() {
 

  return (
    <>
      <Navbar />
      <Header headerTitle={"Edit Kyorugi"} />

      <div className={"w-5/6 h-full ml-10 "}>
        <div className={"flex flex-row gap-5 items-center"}>
          <p className={"text-4xl font-bold"}>Kyorugi</p>
          <InsertSettings competition={"kyorugi"}/>
        </div>
        <div className={"mt-3 w-full flex flex-row"}>
          <div className={"gap-3 w-2/12 h-full"}>
            <div className={"mb-3"}>
              <p className={"font-bold"}>Level</p>
              <p>Advance</p>
              <InsertLevel competition={"kyorugi"}/>
            </div>
            <div className={"mb-3"}>
              <p className={"font-bold"}>Division</p>
              <p>Grade School</p>
              <InsertDivision competition={"kyorugi"} />
            </div>
            <div className={"mb-3"}>
              <p className={"font-bold"}>Gender</p>
              <p>Mens</p>
              <InsertGender competition={"kyorugi"} />
            </div>
            <div className={"mb-3"}>
              <p className={"font-bold"}>Category</p>
              <p>Welter</p>
              <p>Fin</p>
              <InsertCategory competition={"kyorugi"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditKyorugi;
