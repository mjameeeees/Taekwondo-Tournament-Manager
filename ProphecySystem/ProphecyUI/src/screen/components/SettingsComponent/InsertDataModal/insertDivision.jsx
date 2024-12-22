import React from 'react'
import { useState } from 'react';
import ReactModal from "react-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../../util/postSlice";


function InsertDivision({competition}) {

  const dispatch = useDispatch();
 
  const [division, setDivision] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const insertNewDivision = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/insert-division",
        {
          competition,
          division
        }
      );
      dispatch(addPost(response.data.post));
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
       
        setDivision("");
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
    <button onClick={openModal}>Add Division</button>
      <ReactModal isOpen={isOpen}>
        <>
          <form onSubmit={insertNewDivision}>
            <input type="text" value={division} onChange={(e)=> setDivision(e.target.value)}/>
            <button type="submit">Insert</button>
          </form>
          <button onClick={closeModal}>close</button>
        </>
      </ReactModal>
    </>
  )
}

export default InsertDivision