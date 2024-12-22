import React, { useState } from "react";
import ReactModal from "react-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../../util/postSlice";


function InsertCategory({competition}) {

  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const insertNewCategory = async (event) => {
    event.preventDefault();
    console.log("Read")
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/insert-category",
        {
          competition,
          category
        }
      );
      dispatch(addPost(response.data.post));
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
       
        setCategory("");
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
    <button onClick={openModal}>Add Category</button>
      <ReactModal isOpen={isOpen}>
        <>
          <form onSubmit={insertNewCategory}>
            <input type="text" value={category} onChange={(e)=> setCategory(e.target.value)}/>
            <button type="submit">Insert</button>
          </form>
          <button onClick={closeModal}>close</button>
        </>
      </ReactModal>
    </>
  )
}

export default InsertCategory