import React from 'react';
import Styled from './ListAvaliar.styled'
import stars from "../../../assets/imgs/stars.svg"; 
import logo from "../../../assets/icons/logoIcon.svg";
import {MdStarBorder} from "react-icons/md";
import { FilledButton } from '../../../components/UI/buttons/Button';
import Colors from '../../../constants/Colors';

const ListAvaliar = ({ type }) => {
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
        <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
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
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <MdStarBorder/>
          <FilledButton width={150} color={Colors.BLACK}>Avaliar</FilledButton>
        </Styled.T3Img>
      </Styled.CardJobs>
    </>)}
  </>
  );
}

export default ListAvaliar;