import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Await, Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import axios from "axios";

function Teams() {
  const navigate = useNavigate();
  const [pendingteams, setPendingTeams] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/teams")
      .then((response) => {
        setTeams(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from Laravel API where competition is 'poomsae'
    axios
      .get("http://localhost:8000/api/pending-teams")
      .then((response) => {
        setPendingTeams(response.data); // Set the response data (filtered posts) to state
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  console.log("this is pending: ", pendingteams);


  console.log("This is Teams: ", teams);

  const [isTeamPendingisVisible, setTeamPendingIsVisible] = useState(false);
  const [isTeamApproveisVisible, setTeamApproveIsVisible] = useState(false);
  const [isChoice, setIsChoice] = useState("");

  const visible = () => {
    setTeamPendingIsVisible(!isTeamPendingisVisible);
  };

  const visibleTeam = () => {
    setTeamApproveIsVisible(!isTeamApproveisVisible);
  };

  const teamChoice = (teams) => {
    navigate('/list', {state: {teams}});
  }

    // Function to approve the team by chapter
  const approvedTeams = async (team) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/approve-team/${team.chapter}`);
      console.log(response.data.message); // Show success message in console

      // Remove the approved team from pendingteams list on the frontend
      setPendingTeams((prevTeams) => prevTeams.filter((t) => t.chapter !== team.chapter));
    } catch (error) {
      console.error('Error approving the team', error);
    }
  };
  

  return (
    <>
      <Navbar />

      <Header headerTitle="Teams" />

      {/*Iterate values*/}
      <div className="w-full">
        <div className="pendingContainer w-full h-10 border">
          <button
            className="w-full h-full flex flex-row justify-between items-center"
            onClick={visible}
          >
            <p className=" ml-5 font-bold">Pending Teams</p>
          </button>
        </div>
        <div>
          <hr />
          {isTeamPendingisVisible && (
            <div className="teamsNamePending">
              <ul className="pendingTeams bg-slate-100 w-full flex items-start h-36 flex-col overflow-x-hidden overflow-y-auto">
                {pendingteams.map((post) => (
                  <li className="w-full flex justify-between">
                    <p className="ml-5">{post.chapter}</p>
                    <button onClick={() => approvedTeams(post)} className="mr-5 font-semibold">Approve</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="approveContainer  w-full h-10 border-b">
          <button
            className="w-full h-full flex flex-row justify-between items-center"
            onClick={visibleTeam}
          >
            <p className=" ml-5 font-bold">Approved Teams</p>
          </button>
        </div>

      
          {isTeamApproveisVisible && (
             <div className="teamsNamePending">
             <ul className="pendingTeams bg-slate-100 w-full flex justify-between items-start h-36 flex-col overflow-x-hidden overflow-y-auto">
               {teams.map((post) => (
                 <li className="w-full flex justify-between">
                  <Link to={`/tournament/list/${post.chapter}`}>
                      <button onClick={()=> teamChoice(post)} className="ml-5">{post.chapter}</button>
                  </Link>
                 </li>
               ))}
             </ul>
           </div>
          )}
       
      </div>
    </>
  );
}

export default Teams;
