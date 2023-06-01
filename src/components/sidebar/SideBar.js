import React, { useRef } from "react";
import Styled from "./SideBar.styled";
import IconPlus from "../../assets/icons/icon-plus.svg";
import { MdArrowBack, MdNewspaper } from "react-icons/md";
import Colors from "../../constants/Colors";

import { useState } from "react";
import { BsPersonCircle, BsStarFill } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import PortifolioService from "../../pages/portifolio/service/PortifolioService";
import {
  changeSave,
  changeUpdatePerfil,
  selectedPerfil,
} from "../../store/reducers/PerfilSlice";
import { selectedAuth } from "../../store/reducers/AuthSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeCompanyPath, HomeDevPath } from "../../constants/Path";
import { getIsDev } from "../../hooks/Cookies";

const SideBar = ({ tabActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const { dadosPerfil } = useSelector(selectedPerfil);
  const { auth } = useSelector(selectedAuth);
  const [tabSelection, setSelection] = useState(1);
  const [previewImage, setPreviewImage] = useState(dadosPerfil.perfil.image);
  const inputRef = useRef(null);

  const handleClick = (value) => {
    setSelection(value);
    tabActive(value);
  };

  const handleImagePerson = () => {
    inputRef.current.click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      handlePushImg(file);
    }
  };

  const handlePushImg = async (file) => {
    const response = await PortifolioService.uploadImg(
      dadosPerfil.perfil.id,
      file,
      auth.token
    );

    if (response.status === 200) {
      dispatch(
        changeSave({
          perfil: response.data.perfil,
          address: response.data.address,
          tools: response.data.tools,
        })
      );

      toast.success("Foto atualizada com sucesso.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        theme: "light",
      });
    } else {
      toast.error("Ocorreu algum problema ao tentar enviar a imagem.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.Header>
          <Styled.IconCallBack
            onClick={() => {
              navigate(dadosPerfil.perfil.tipo !== "EMPRESA" ? HomeDevPath : HomeCompanyPath);
            }}
          >
            <MdArrowBack size={40} color={Colors.WHITE} />
          </Styled.IconCallBack>
          <Styled.Input
            type="file"
            onChange={handleInputChange}
            ref={inputRef}
          />
          <Styled.ContainerPhotograph
            back={previewImage}
            onClick={handleImagePerson}
          >
            {previewImage === "" && <img src={IconPlus} alt="imagem ou logo" />}
          </Styled.ContainerPhotograph>

          <Styled.AddPhotograph>Adicionar foto</Styled.AddPhotograph>
        </Styled.Header>

        <Styled.ContainerSideBarOption>
          <Styled.SideBarOption
            isSelected={tabSelection === 1}
            onClick={() => {
              handleClick(1);
            }}
          >
            <Styled.IconSideBarOption>
              <BsPersonCircle
                size={35}
                color={tabSelection === 1 ? Colors.PRIMARY_COLOR : Colors.WHITE}
              />
            </Styled.IconSideBarOption>
            <Styled.TextSideBarOption isSelected={tabSelection === 1}>
              Perfil
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>
          {getIsDev() === "true" && (
            <>
              <Styled.SideBarOption
                isSelected={tabSelection === 2}
                onClick={() => {
                  handleClick(2);
                }}
              >
                <Styled.IconSideBarOption>
                  <AiOutlineProfile
                    size={35}
                    color={
                      tabSelection === 2 ? Colors.PRIMARY_COLOR : Colors.WHITE
                    }
                  />
                </Styled.IconSideBarOption>
                <Styled.TextSideBarOption isSelected={tabSelection === 2}>
                  Sobre
                </Styled.TextSideBarOption>
              </Styled.SideBarOption>

              <Styled.SideBarOption
                isSelected={tabSelection === 3}
                onClick={() => {
                  handleClick(3);
                }}
              >
                <Styled.IconSideBarOption>
                  <BsStarFill
                    size={30}
                    color={
                      tabSelection === 3 ? Colors.PRIMARY_COLOR : Colors.WHITE
                    }
                  />
                </Styled.IconSideBarOption>
                <Styled.TextSideBarOption isSelected={tabSelection === 3}>
                  Experiências
                </Styled.TextSideBarOption>
              </Styled.SideBarOption>
            </>
          )}

          <Styled.SideBarOption
            isSelected={tabSelection === 4}
            onClick={() => handleClick(4)}
          >
            <Styled.IconSideBarOption>
              <MdNewspaper
                size={30}
                color={tabSelection === 4 ? Colors.PRIMARY_COLOR : Colors.WHITE}
              />
            </Styled.IconSideBarOption>
            <Styled.TextSideBarOption isSelected={tabSelection === 4}>
              Projetos
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>
        </Styled.ContainerSideBarOption>
      </Styled.Container>
    </>
  );
};

export default SideBar;
