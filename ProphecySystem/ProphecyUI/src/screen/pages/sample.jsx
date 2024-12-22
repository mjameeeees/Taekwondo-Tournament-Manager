import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../util/postSlice";

function Sample() {
  const [fighterid, setFighterid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bday, setBday] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [competition, setCompetition] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [belt, setBelt] = useState("");
  const [chapter, setChapter] = useState("");
  const [instructor, setInstructor] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/players", {
        fighterid,
        name,
        age,
        bday,
        weight,
        height,
        competition,
        level,
        category,
        belt,
        chapter,
        instructor,
        division,
        gender
      }
      );
      dispatch(addPost(response.data.post));
      
    } catch (error) {
      console.error("Error creating post", error);
    } finally{
      setFighterid("");
      setName("");
      setAge("");
      setBday("");
      setWeight("");
      setHeight("");
      setCompetition("");
      setLevel("");
      setCategory("");
      setBelt("");
      setChapter("");
      setInstructor("");
      setDivision("");
      setGender("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="fighterid" placeholder="Fighter ID" value={fighterid} onChange={(e) => setFighterid(e.target.value)} required/>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="number" name="age" placeholder="Age"  value={age} onChange={(e) => setAge(e.target.value)} required/>
        <input type="date" name="bday" placeholder="Birthday"  value={bday} onChange={(e) => setBday(e.target.value)} required/>
        <input type="number" name="weight" placeholder="Weight"  value={weight} onChange={(e) => setWeight(e.target.value)} required/>
        <input type="number" name="height" placeholder="Height"  value={height} onChange={(e) => setHeight(e.target.value)} required/>
        <input type="text" name="competition" placeholder="Competition"  value={competition} onChange={(e) => setCompetition(e.target.value)} required/>
        <input type="text" name="level" placeholder="Level"  value={level} onChange={(e) => setLevel(e.target.value)} required/>
        <input type="text" name="category" placeholder="Category"  value={category} onChange={(e) => setCategory(e.target.value)} required/>
        <input type="text" name="belt" placeholder="Belt"  value={belt} onChange={(e) => setBelt(e.target.value)} required/>
        <input type="text" name="chapter" placeholder="Chapter"  value={chapter} onChange={(e) => setChapter(e.target.value)} required/>
        <input type="text" name="instructor" placeholder="Instructor"  value={instructor} onChange={(e) => setInstructor(e.target.value)} required/>
        <input type="text" name="division" placeholder="Division"  value={division} onChange={(e) => setDivision(e.target.value)} required/>
        <input type="text" name="gender" placeholder="Gender"  value={gender} onChange={(e) => setGender(e.target.value)} required/>
        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default Sample;
