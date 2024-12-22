import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import { useParams } from "react-router-dom";

function List() {
  const { chapter } = useParams();
  const { instructor } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get(`http://localhost:8000/api/list/${chapter}`)
      .then((response) => {
        setList(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, [chapter]);

  console.log(list);

  return (
    <>
      <Navbar />
      <Header headerTitle={chapter} />

      <div className="instructor w-full h-10 flex items-center border">
        <b>Instructor: </b>
        {list.length > 0 && (
        <div key={list[0].id}>{list[0].instructor}</div>
      )}
        <div></div>
      </div>

      <div className="w-full overflow-x-auto overflow-y-auto">
        <table className="w-full border">
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Birthday</th>
            <th>Belt</th>
            <th>Type</th>
            <th>Gender</th>
            <th>Division</th>
            <th>Category</th>
            <th>Level</th>
          </tr>

          {list.map((post, index) => (
            <tr key={index} className=" text-center">
              <td>{post.name}</td>
              <td>{post.height} cm</td>
              <td>{post.weight} kg</td>
              <td>{post.bday}</td>
              <td>{post.belt}</td>
              <td>{post.competition}</td>
              <td>{post.gender}</td>
              <td>{post.division}</td>
              <td>{post.category}</td>
              <td>{post.level}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default List;
