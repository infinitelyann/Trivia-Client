// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from "./components/shared/AutoDismissAlert/AutoDismissAlert";
import Header from "./components/shared/Header";
import RequireAuth from "./components/shared/RequireAuth";
import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import ChangePassword from "./components/auth/ChangePassword";
import Timer from "./components/Timer";
import QuestionCreate from "./components/QuestionCreate"; // unused import
import PlayerLanding from "./components/PlayerLanding";
import GameCreate from "./components/GameCreate";
import UserGameIndex from "./components/UserGameIndex";
import UserGameShow from "./components/UserGameShow";
import { getOpenDBUrl } from "./utils/openDB";
import GameInputs from "./components/trivia-api/GameInputs"; // unused import
import GamePlay from "./components/trivia-api/GamePlay";
import Leaderboard from "./components/Leaderboard";
import UserGamePlay from "./components/UserGamePlay"; // unused import
import Result from "./components/Result";
import GameTitleEdit from "./components/GameTitleEdit";

const App = () => {
  const [user, setUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [filterOptions, setFilterOptions] = useState({});
  const [userID, setUserID] = useState('')


  const handleClick = async () => {
  // inconsistent white space 

    if (filterOptions === {}) return;
    setIsLoading(true);

    try {
      const response = await fetch(getOpenDBUrl(filterOptions), {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setData(result.results);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }

  };

  const clearUser = () => {
    setUser(null);
  };

  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return prevState.filter((msg) => msg.id !== id);
    });
  };

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid();
    setMsgAlerts(() => {
      return [{ heading, message, variant, id }];
    });
  };

  return (
    <Fragment >
      <Header user={user} />
      <Routes>{/* change your grouping here and stay organized, follow 1 style, be consistent */}
        <Route path='/result' element={<Result userID={userID} msgAlert={msgAlert} />} />
        <Route path='/leaderboard' element={<Leaderboard msgAlert={msgAlert} />} />
        <Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
        <Route
          path='/sign-up'
          element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path='/sign-in'
          element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path='/'
        />
{/* // inconsistent white space  */}
        <Route
          path='/sign-out'
          element={
            <RequireAuth user={user}>
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            </RequireAuth>
          }
        />
        <Route
          path='/change-password'
          element={
            <RequireAuth user={user}>
              <ChangePassword msgAlert={msgAlert} user={user} />
            </RequireAuth>}
        />
        <Route
          path='/timer'
          element={
            <Timer />
          }
// inconsistent white space 


        />
        {/* <Route remove zombie code
		  	path='/create-question'
			element={
				<QuestionCreate user={user}/>
			}
			/> */}
{/* duplicate path components !?  remove one with double quotes, BE consistent */}
        <Route path="/homepage" element={<PlayerLanding />} /> 

        <Route
          path='/homepage'
          element={
            <PlayerLanding />
          }
        />
{/* // inconsistent white space  */}

        <Route
          path='/games/:id'
          element={
            <UserGameShow msgAlert={msgAlert} user={user} />
          }
        />
        <Route
          path='/games/edit'
          element={
            <GameTitleEdit msgAlert={msgAlert} user= {user}/>
          }
          />
{/* // inconsistent white space  */}
        <Route
          path='/game'
          element={
            <GamePlay user={user} userID={userID} setUserID={setUserID} setFilterOptions={setFilterOptions} err={err} handleClick={handleClick} isLoading={isLoading} data={data}
            />
          }
        />
{/* // inconsistent white space  */}
        <Route
          path="/create-game"
          element={
            <RequireAuth user={user}>
              <GameCreate msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
{/* // inconsistent white space  */}
        <Route
          path="/user-created-games"
          element={
            <RequireAuth user={user}>
              <UserGameIndex msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
      </Routes>
{/* // inconsistent white space  */}
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
    </Fragment>
  ); // ; ?
}; // ; ?

export default App;
