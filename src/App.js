import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AuthPath,
  HomePagePath,
  RegisterPath,
  HomeDevPath,
  ChatPath,
  JobsPath,
  DevsPath,
  AvaliacoesPath,
  DashboardFinanceiraPath,
  FinanceiraPath,
  ComunidadePath,
  ProjectsPath,
  TodoPath,
  PortfolioPath,
  PortfolioEt5Path,
  PortfolioEt6Path,
  PortfolioProjectsPath,
  AvaliarPath,
  ProgressPath,
  canceledPath,
  CreateProjectPath,
} from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIO from "socket.io-client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import Jobs from "./pages/jobs/Jobs";
import HomeDev from "./pages/homeDev/HomeDev";
import Chat from "./pages/chat/Chat";
import Devs from "./pages/devs/Devs";
import DashboardFinanceira from "./pages/dashboardFinanceira/DashboardFinanceira";
import Financeira from "./pages/dashboardFinanceira/Financeira/Financeira";
import Avaliacoes from "./pages/avaliacoes/Avaliacoes";
import Comunidade from "./pages/comunidade/Comunidade";
import Portifolio from "./pages/portifolio/Portifolio";
import Projects from "./pages/projects/Projects";
import PortifolioEt5 from "./pages/portifolio/portfolioEt5/PortfolioEt5";
import PortifolioEt6 from "./pages/portifolio/portfolioEt6/PortfolioEt6";
import PortfolioProjects from "./pages/portifolio/portfolioEt7/components/Projects";
import Avaliar from "./components/list/listAvaliar/ListAvaliar";

import { useDispatch } from "react-redux";
import { changeOn } from "./store/reducers/WebSocketSlice";
import Todo from "./pages/todo-list/Todo.js";
import Progress from "./pages/projects/pages/progress/Progress";
import Canceled from "./pages/projects/pages/canceled/Canceled";
import CreateProject from "./pages/projects/pages/createProject/CreateProject";

const socket = socketIO.connect("http://localhost:3333");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("connect", () => {
      dispatch(
        changeOn({
          id: socket.id,
        })
      );
    });
  });

  return (
    <Router>
      <Routes>
        <Route path={HomePagePath} element={<Home />} />
        <Route path={AuthPath} element={<Auth />} />
        <Route path={RegisterPath} element={<Register />} />

        <Route path={JobsPath} element={<Jobs />} />
        <Route path={HomeDevPath} element={<HomeDev />} />
        <Route path={ChatPath} element={<Chat socket={socket} />} />
        <Route path={DevsPath} element={<Devs />} />
        <Route path={AvaliacoesPath} element={<Avaliacoes />} />
        <Route
          path={DashboardFinanceiraPath}
          element={<DashboardFinanceira />}
        />
        <Route path={FinanceiraPath} element={<Financeira />} />
        <Route path={ComunidadePath} element={<Comunidade />} />
        <Route path={PortfolioPath} element={<Portifolio />} />
        <Route path={TodoPath} element={<Todo />} />
        <Route path={PortfolioEt5Path} element={<PortifolioEt5 />} />
        <Route path={PortfolioEt6Path} element={<PortifolioEt6 />} />
        <Route path={PortfolioProjectsPath} element={<PortfolioProjects />} />
        <Route path={AvaliarPath} element={<Avaliar />} />
        <Route path={ProjectsPath} element={<Projects />} />
        <Route path={ProgressPath} element={<Progress />} />
        <Route path={canceledPath} element={<Canceled />} />
        <Route path={CreateProjectPath} element={<CreateProject />} />
      </Routes>
    </Router>
  );
}

export default App;
