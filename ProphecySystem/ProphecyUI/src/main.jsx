import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import Homepage from "./screen/pages/homepage.jsx";
import Tournament from "./screen/pages/tournament.jsx";
import Error404 from "./screen/error/error404.jsx";
import Teams from "./screen/pages/teams/teams.jsx";
import List from "./screen/pages/teams/list.jsx";
import Kyorugi from "./screen/pages/kyorugi/kyorugi.jsx";
import Fightdiagram from "./screen/pages/kyorugi/fightdiagram.jsx";
import Poomsae from "./screen/pages/poomsae/poomsae.jsx";
import PoomsaeDiagram from "./screen/pages/poomsae/poomsaediagram.jsx";
import MedalTally from "./screen/pages/medaltally.jsx";
import GameHistory from "./screen/pages/gamehistory.jsx";
import Settings from "./screen/pages/settings/settings.jsx";
import Sample from "./screen/pages/sample.jsx";
import store from "../util/store.jsx";
import EditKyorugi from "./screen/pages/settings/editkyorugi.jsx";
import EditPoomsae from "./screen/pages/settings/editpoomsae.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error404 />,
  },
  {
    path: "/tournament",
    element: <Tournament />,
  },
  {
    path: "/tournament/teams/",
    element: <Teams />,
  },
  {
    path: "/tournament/list/:chapter",
    element: <List />,
  },
  {
    path: "/tournament/kyorugi",
    element: <Kyorugi />,
  },
  {
    path: "/tournament/kyorugi/fight-diagram-kyorugi",
    element: <Fightdiagram />,
  },
  {
    path: "/tournament/poomsae",
    element: <Poomsae />,
  },
  {
    path: "/tournament/poomsae/diagram-poomsae",
    element: <PoomsaeDiagram />,
  },
  {
    path: "/medal-tally",
    element: <MedalTally />,
  },
  {
    path: "/tournament/history",
    element: <GameHistory />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/tournament/settings",
    element: <Settings />,
  },
  {
    path: "/tournament/settings/kyorugi",
    element: <EditKyorugi />,
  },
  {
    path: "/tournament/settings/poomsae",
    element: <EditPoomsae />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
