import React, { useState } from "react";
import ReactModal from "react-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../../util/postSlice";

function InsertGender({competition}) {


  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const insertNewGender = async (event) => {
    event.preventDefault();
    console.log("Read")
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/insert-gender",
        {
          competition,
          gender
        }
      );
      dispatch(addPost(response.data.post));
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
       
      setGender("");
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
    <button onClick={openModal}>Add Gender</button>
      <ReactModal isOpen={isOpen}>
        <>
          <form onSubmit={insertNewGender}>
            <input type="text" value={gender} onChange={(e)=> setGender(e.target.value)}/>
            <button type="submit">Insert</button>
          </form>
          <button onClick={closeModal}>close</button>
        </>
      </ReactModal>
    </>
  )
}

export default InsertGender;