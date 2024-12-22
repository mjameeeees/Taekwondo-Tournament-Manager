import axios from "axios";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../util/postSlice";

function InsertSettings({competition}) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(2);

  const [level, setLevel] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");

  const [category, setCategory] = useState("");

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const insertSettings = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/settings", {
        competition,
        level,
        division,
        gender,
        category,
      });
      dispatch(addPost(response.data.post));
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
      setCategory("");
      setDivision("");
      setGender("");
      setLevel("");
    }
  };

  

  return (
    <>
      <button onClick={openModal} className={"kyorugiButton"}>
        Add Data
      </button>
      <ReactModal isOpen={isOpen}>
        <div>
          <form onSubmit={insertSettings}>
            <input
              type="text"
              placeholder="Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button className={"kyorugiButton"} type="submit">
              Submit{" "}
            </button>
          </form>
        </div>

        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </>
  );
}

export default InsertSettings;
