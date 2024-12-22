import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../util/postSlice";

function InsertPlayerModal({ openStudent, closeStudent }) {
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
      const response = await axios.post(
        "http://127.0.0.1:8000/api/insert-players",
        {
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
          gender,
        }
      );
      dispatch(addPost(response.data.post));
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
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

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [competitionOptions, setCompetitionOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [beltOptions, setBeltOptions] = useState([]);
  const [chapterOptions, setChapterOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);

  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/level")
      .then((response) => {
        setLevelOptions(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/category")
      .then((response) => {
        setCategoryOptions(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/chapter")
      .then((response) => {
        setChapterOptions(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/division")
      .then((response) => {
        setDivisionOptions(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/gender")
      .then((response) => {
        setGenderOptions(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);


  return (
    <>
      <button onClick={openModal}>Insert New Player</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={Styles}
      >
        <button onClick={closeModal}>close</button>
        <div>Insert New Player</div>
        <form onSubmit={handleSubmit}>
          <div className={"flex-wrap gap-5 w-5/6"}>
            <input
              className={"border m-1 w-52 border-gray-500"}
              type="number"
              name="fighterid"
              placeholder=" Fighter ID"
              value={fighterid}
              onChange={(e) => setFighterid(e.target.value)}
              required
            />
            <input
              className={"border m-1 border-gray-500"}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className={"border m-1 border-gray-500"}
              type="number"
              name="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              className={"border m-1 border-gray-500"}
              type="date"
              name="bday"
              placeholder="Birthday"
              value={bday}
              onChange={(e) => setBday(e.target.value)}
              required
            />
            <input
              className={"border m-1 border-gray-500"}
              type="number"
              name="weight"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <input
              className={"border m-1 border-gray-500"}
              type="number"
              name="height"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <select
              className={"border m-1  border-gray-500"}
              type="select"
              name="competition"
              placeholder="Competition"
              value={competition}
              onChange={(e) => setCompetition(e.target.value)}
              required
            >
              <option className={"text-slate-400"}> Competition</option>
              <option>Kyorugi</option>
              <option>Poomsae</option>
            </select>
            <select
              className={"border m-1 border-gray-500"}
              type="text"
              name="level"
              placeholder="Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="">Level</option>
              {Array.isArray(levelOptions) && levelOptions.map((option, index) => (
                <option key={index} value={option.level}>{option.level}</option> // Assuming 'level' is the key in your response
            ))}
            </select>
            <select
              className={"border m-1 border-gray-500"}
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Category</option>
              {Array.isArray(categoryOptions) && categoryOptions.map((option, index) => (
                <option key={index} value={option.category}>{option.category}</option> // Assuming 'category' is the key in your response
            ))}
            </select>
            <select
              className={"border m-1 border-gray-500"}
              type="text"
              name="belt"
              placeholder="Belt"
              value={belt}
              onChange={(e) => setBelt(e.target.value)}
              required
            >
              <option value="">Belt</option>
              <option value="No Belt">No Belt</option>
              <option value="White">White</option>
              <option value="Yellow ">Yellow </option>
              <option value="Orange">Orange</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Brown">Brown</option>
              <option value="Red">Red</option>
              <option value="Black">Black</option>
            </select>
            <input
              className={"border m-1 border-gray-500"}
              type="text"
              name="chapter"
              placeholder="Chapter"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              required
            />
            <input
              className={"border m-1 border-gray-500"}
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              required
            />
            <select
              className={"border m-1 border-gray-500"}
              type="text"
              name="division"
              placeholder="Division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              required
            >
              <option value="">Division</option>
              {Array.isArray(divisionOptions) && divisionOptions.map((option, index) => (
                <option key={index} value={option.division}>{option.division}</option> // Assuming 'category' is the key in your response
            ))}
            </select>
            <select
              className={"border m-1 border-gray-500"}
              type="text"
              name="gender"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Gender</option>
              {Array.isArray(genderOptions) && genderOptions.map((option, index) => (
                <option key={index} value={option.gender}>{option.gender}</option> // Assuming 'category' is the key in your response
            ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </ReactModal>
    </>
  );
}

const Styles = {
  content: {
    height: "50%",
    width: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default InsertPlayerModal;
