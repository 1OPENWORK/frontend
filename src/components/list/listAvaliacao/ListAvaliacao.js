import React from 'react';
import Styled from './ListAvaliacao.styled'
import stars from "../../../assets/imgs/stars.svg"; 
import logo from "../../../assets/icons/logoIcon.svg";
import {MdStarBorder, MdStar} from "react-icons/md";

const ListAvaliacao = ({ type }) => {
  return (
    
    <>
    {type === 1 ? (<>
      <Styled.DivTitleJobs>
          <Styled.Title>Empresa</Styled.Title>
          <Styled.Title>Descrição</Styled.Title>
          <Styled.Title>Fim do projeto</Styled.Title>
          <Styled.Title>Minha nota</Styled.Title>
      </Styled.DivTitleJobs>

      <Styled.CardJobs>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStarBorder/>
          <MdStarBorder/>
        </Styled.T3Img>
      </Styled.CardJobs>

      <Styled.CardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStarBorder/>
        </Styled.T3Img>
      </Styled.CardJobs>

      <Styled.CardJobs>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
        <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
        </Styled.T3Img>
      </Styled.CardJobs>

      <Styled.CardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStar/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
        </Styled.T3Img>
      </Styled.CardJobs>
      </>) : (<>
      <Styled.DivTitleJobs>
        <Styled.Title>Desenvolvedor</Styled.Title>
        <Styled.Title>Sobre</Styled.Title>
        <Styled.Title>Fim do projeto</Styled.Title>
        <Styled.Title>Minha nota</Styled.Title>
      </Styled.DivTitleJobs>

      <Styled.CardJobs>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
        </Styled.T3Img>
      </Styled.CardJobs>

      <Styled.CardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
        </Styled.T3Img>
      </Styled.CardJobs>

      <Styled.CardJobs>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
        </Styled.T3Img>
      </Styled.CardJobs>

      <Styled.CardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.Title>4,50</Styled.Title>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>14/12/2023</Styled.T3>
        <Styled.T3Img>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
          <MdStar/>
        </Styled.T3Img>
      </Styled.CardJobs>
    </>)}
  </>
  );
}

export default ListAvaliacao;