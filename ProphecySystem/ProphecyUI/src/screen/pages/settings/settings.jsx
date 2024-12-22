import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import InsertPlayerModal from "../../components/SettingsComponent/insertPlayerModal";

function Settings({ competition }) {
  const [kyorugi, setKyorugi] = useState([]);
  const [poomsae, setPoomsae] = useState([]);

  const handleDeleteAll = () => {
    // Send a DELETE request to Laravel API to delete all posts
    axios.delete('http://localhost:8000/api/reset')
      .then(response => {
        alert('All posts deleted successfully!');
      })
      .catch(error => {
        console.error('There was an error deleting the posts!', error);
      });
  };

  console.log(kyorugi);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/kyorugi")
      .then((response) => {
        setKyorugi(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/posts/poomsae")
      .then((response) => {
        setPoomsae(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header headerTitle={"Settings"} />

      <div className={"flex justify-center"}>
        <div className={"w-3/4 flex flex-col self-center justify-center"}>
          <div className={"w-full flex flex-col justify-center m-5"}>
            <div className={"flex flex-row items-center gap-5 mb-3"}>
              <p className={"font-bold text-4xl"}>Kyorugi</p>
              <Link to={"/tournament/settings/kyorugi"}>
                <button className="kyorugiButton w-20 h-7 text-white">
                  Edit
                </button>
              </Link>
            </div>
            <div className={"w-3/5 flex flex-row justify-between"}>
              <div>
                <p className={"font-bold mb-1"}>Level</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {kyorugi.map((post) => (
                      <li key={post.id}>
                        <p>{post.level}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div>
                <p className={"font-bold mb-1"}>Division</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {kyorugi.map((post) => (
                      <li key={post.id}>
                        <p>{post.division}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div>
                <p className={"font-bold mb-1"}>Gender</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {kyorugi.map((post) => (
                      <li key={post.id}>
                        <p>{post.gender}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div>
                <p className={"font-bold mb-1"}>Category</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {kyorugi.map((post) => (
                      <li key={post.id}>
                        <p>{post.category}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className={"w-full flex flex-col justify-center m-5"}>
            <div className={"flex flex-row items-center gap-5 mb-3"}>
              <p className={"font-bold text-4xl"}>Poomsae</p>
              <Link to={"/tournament/settings/poomsae"}>
                <button className="kyorugiButton w-20 h-7 text-white">
                  Edit
                </button>
              </Link>
            </div>
            <div className={"w-3/5 flex flex-row justify-between"}>
              <div>
                <p className={"font-bold mb-1"}>Level</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {poomsae.map((post) => (
                      <li key={post.id}>
                        <p>{post.category}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div>
                <p className={"font-bold mb-1"}>Division</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {poomsae.map((post) => (
                      <li key={post.id}>
                        <p>{post.division}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div>
                <p className={"font-bold mb-1"}>Gender</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {poomsae.map((post) => (
                      <li key={post.id}>
                        <p>{post.gender}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div>
                <p className={"font-bold mb-1"}>Category</p>
                <ul>
                  {/* Loop through the posts array and render each post */}

                  <ul>
                    {/* Loop through the posts array and render each post */}
                    {poomsae.map((post) => (
                      <li key={post.id}>
                        <p>{post.category}</p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className={"m-5 flex flex-col justify-start"}>
            <p className={"font-bold text-4xl mb-3"}>Data</p>
            <div className={"w-2/12 flex flex-col justify-start gap-1"}>
              <button className={"text-left"}>
                <InsertPlayerModal openStudent={true} />
              </button>
              <button className={"text-left"}>Download all Data</button>
              <button onClick={handleDeleteAll} className={"text-left"}>Erase Data</button>
            </div>
          </div>
        </div>
        <div id="insertModal"></div>
      </div>
    </>
  );
}

export default Settings;
