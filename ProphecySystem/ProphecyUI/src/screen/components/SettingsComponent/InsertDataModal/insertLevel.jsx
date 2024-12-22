import React, { useState } from "react";
import ReactModal from "react-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../../util/postSlice";

function InsertLevel({competition}) {
  const dispatch = useDispatch();
  const [level, setLevel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const insertNewLevel = async (event) => {
    event.preventDefault();
    console.log("Read")
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/insert-level",
        {
            competition,
            level
        }
      );
      dispatch(addPost(response.data.post));
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
       
        setLevel("");
    }
  };


  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Add Level</button>
      <ReactModal isOpen={isOpen}>
        <>
          <form onSubmit={insertNewLevel}>
            <input type="text" value={level} onChange={(e)=> setLevel(e.target.value)}/>
            <button type="submit">Insert</button>
          </form>
          <button onClick={closeModal}>close</button>
        </>
      </ReactModal>
    </>
  );
}

export default InsertLevel;
