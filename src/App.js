import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AuthPath,
  HomePagePath,
  RegisterPath,
  HomeDevPath,
  ChatPath,
  JobsPath,
  HomeAnalistaPath,
  DevsPath,
  AvaliacoesPath,
  DashboardFinanceiraPath,
  FinanceiraPath,
  ComunidadePath,
  ProjectsPath,
  TodoPath,
  PortfolioPath,
  PortfolioProjectsPath,
  AvaliarPath,
  ProgressPath,
  canceledPath,
  CreateProjectPath,
  SendContractPath,
  AsignedContractPath,
  IndexPath,
} from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIO from "socket.io-client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import Jobs from "./pages/jobs/Jobs";
import HomeAnalista from "./pages/homeAnalista/HomeAnalista";
import HomeDev from "./pages/homeDev/HomeDev";
import Chat from "./pages/chat/Chat";
import Devs from "./pages/devs/Devs";
import DashboardFinanceira from "./pages/dashboardFinanceira/DashboardFinanceira";
import Financeira from "./pages/dashboardFinanceira/Financeira/Financeira";
import Avaliacoes from "./pages/avaliacoes/Avaliacoes";
import Comunidade from "./pages/comunidade/Comunidade";
import Portifolio from "./pages/portifolio/Portifolio";
import Projects from "./pages/projects/Projects";
import PortfolioProjects from "./pages/portifolio/portfolioEt7/components/Projects";
import Avaliar from "./pages/avaliacoes/Avaliar";
import Index from "./pages/videoConference/Index";

import { useDispatch } from "react-redux";
import { changeOn } from "./store/reducers/WebSocketSlice";
import Todo from "./pages/todo-list/Todo.js";
import Progress from "./pages/projects/pages/progress/Progress";
import Canceled from "./pages/projects/pages/canceled/Canceled";
import CreateProject from "./pages/projects/pages/createProject/CreateProject";
import SubMenu from "./components/subMenu/subMenu";
import SendContract from "./pages/contract/SendContract";
import AsignedContract from "./pages/contract/contratoAssinado/AsignedContract";
import { getIsDev } from "./hooks/Cookies";
import { Ambiente } from "./hooks/Ambiente";
import { PortfolioSobreMim } from "./constants/Path";
import { PortfolioExperiencia } from "./constants/Path";

const socket = socketIO.connect(Ambiente());

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
        <Route path={HomeAnalistaPath} element={<HomeAnalista />} />
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
        <Route path={ProjectsPath} element={<Projects />} />
        <Route path={TodoPath} element={<Todo />} />
        <Route path={PortfolioProjectsPath} element={<PortfolioProjects />} />
        <Route path={AvaliarPath} element={<Avaliar />} />
        <Route path={ProjectsPath} element={<Projects />} />
        <Route path={ProgressPath} element={<Progress />} />
        <Route path={canceledPath} element={<Canceled />} />
        <Route path={CreateProjectPath} element={<CreateProject />} />
        <Route path={SendContractPath} element={<SendContract />} />
        <Route path={AsignedContractPath} element={<AsignedContract />} />
        <Route path={IndexPath} element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
