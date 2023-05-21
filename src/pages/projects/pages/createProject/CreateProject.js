import React, { useState, useEffect, useMemo } from 'react'
import { Container, Aside, Article, TextArea } from './CreateProject.styled'
import { FilledButton } from './../../../../components/UI/buttons/Button'
import Colors from '../../../../constants/Colors'
import { useNavigate } from 'react-router-dom'
import { ProgressPath } from '../../../../constants/Path'
import CardProject from './components/cardOpt/CardProject'
import { InputText, CardHunter } from './CreateProject.styled'
import {
  DivInput,
  H3Input,
  Input
} from '../../../auth/register/etapas/et6/RegisterEt6.styled'

import CardOverviewOne from './components/cardOverviewOne/CardOverviewOne'
import { MdEmail, MdPhoneInTalk } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'

import Cookies from 'js-cookie'
import { handleProeficiency } from '../../../../store/actions/Proeficiency'

import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CreateProject() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedOptions, setSelectedOptions] = useState([])

  const [search, setSearch] = useState('')
  const [proef, setProef] = useState([])
  const [tools, setTools] = useState([])

  useEffect(() => {
    listar()
  }, [isModalOpen])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const notifySucess = () => {
    toast.success('Projeto cadastrado com sucesso', {
      position: 'top-left',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 1,
      theme: 'light'
    })
  }

  const notifyError = () => {
    toast.error('Algo está errado com cadastro', {
      position: 'top-left',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  const notifyInfo = () => {
    toast.info('Ferramenta já adicionada', {
      position: 'top-left',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  //given

  //   const URI =
  //   process.env.REACT_APP_BACKEND_LOCAL_HOST + "/";
  // const [avaliacao, setAvaliacao] = useState([]);

  // async function handleFetchAvaliacao() {
  //   const response = await get(URI);
  //   setAvaliacao(response.data.myAvaliations);
  // }

  // useEffect(() => {
  //   handleFetchAvaliacao();
  // }, []);

  // lista de proeficiencias e ferramentas

  const listar = async () => {
    const dados = await handleProeficiency()
    setProef(dados.data)
    console.log(dados.data)

    const allTools = proef.flatMap(({ tools }) => Object.values(tools))
    setTools(allTools)
  }

  //info empresa - GET

  const [infoUser, setInfoUser] = useState({
    name: '',
    sector: '',
    email: '',
    user: {
      name: '',
      cellphone: ''
    }
  })

  useEffect(() => {
    async function fetchUser() {
      await axios
        .get('http://localhost:8004/api/empresas/1')
        .then((response) => {
          setInfoUser(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log('Deu erro: ' + error)
        })
    }

    fetchUser()
  }, [])

  //cadastro projetos - POST

  function cadastrar() {
    const registerProject = {
      title: debouncedInputValues.nameProject,
      description: debouncedInputValues.describe,
      value: debouncedInputValues.value,
      idCompany: 1,
      qtdSprint: debouncedInputValues.estimatedTime,
      daysToSprint: debouncedInputValues.estimatedTime,
      maxDevelopers: debouncedInputValues.qntdPeople,
      tools: {
        projectTool: selectedOptions
      }
    }

    axios
      .post('http://localhost:8004/api/projetos-grandes', registerProject, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res)
        notifySucess()
        const myTimeout = () =>
          setTimeout(() => navigate('/projetos-andamentos'), 1000)
        myTimeout()
      })
      .catch((err) => {
        notifyError()

        console.log('Deu erro: ' + err)
        console.log(registerProject)
      })
  }

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWVpcmFAZ21haWwiLCJpYXQiOjE2ODQ0NjMzNjEsImV4cCI6MTY4NDQ2NDgwMX0.6pRV4-tjkTOu7ih7uq0f1rS0CLWizT3fNDN34VtuMZU'

  //filtro de ferramentas

  const filterSearch = useMemo(() => {
    const searchLowerCase = search.toLowerCase()

    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(searchLowerCase)
    )
  }, [tools, search])

  //seleção de ferramentas

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      notifyInfo()
    } else if (!selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) => [...prevOptions, option])
      console.log(selectedOptions)
    }
  }

  const handleDeselectOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption !== option)
    )
  }

  useEffect(() => {
    console.log(selectedOptions)
  }, [selectedOptions])

  // useEffect(() => {
  //   setSelectedOptions((prevOptions) =>
  //     prevOptions.filter((option) => selectedOptions.includes(option))
  //   );
  // }, [selectedOptions]);

  //captura de informações(input) com debounced

  const [inputValues, setInputValues] = useState({
    nameProject: '',
    nameCompany: '',
    languages: [{ id: '' }],
    describe: '',
    qntdPeople: 0,
    estimatedTime: 0,
    value: 0.0
  })

  const [debouncedInputValues, setDebouncedInputValues] = useState({
    nameProject: '',
    nameCompany: '',
    languages: [{ id: '' }],
    describe: '',
    qntdPeople: 0,
    estimatedTime: 0,
    value: 0.0
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    let updatedValue = value

    // Remover o prefixo e separador de milhares antes de atualizar o valor
    if (name === 'value') {
      updatedValue = value.replace('R$', '').replace(/\./g, '').trim()
    }

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: updatedValue
    }))
  }

  useEffect(() => {
    const timeoutIds = {}

    for (const inputName in inputValues) {
      clearTimeout(timeoutIds[inputName])

      timeoutIds[inputName] = setTimeout(() => {
        setDebouncedInputValues((prevDebouncedInputValues) => ({
          ...prevDebouncedInputValues,
          [inputName]: inputValues[inputName]
        }))
      }, 500)
    }

    return () => {
      for (const inputName in inputValues) {
        clearTimeout(timeoutIds[inputName])
      }
    }
  }, [inputValues])

  function formatNumber(value, prefix, thousandSeparator, decimalSeparator) {
    const parts = value.toString().split(decimalSeparator)
    const formattedValue = parts[0].replace(
      /\B(?=(\d{3})+(?!\d))/g,
      thousandSeparator
    )

    if (parts.length === 2) {
      return `${prefix}${formattedValue}${decimalSeparator}${parts[1]}`
    } else {
      return `${prefix}${formattedValue}`
    }
  }

  const handleOptionSelect = (type) => {
    setSelectedOption(type === selectedOption ? null : type)
  }

  const voltar = () => {
    navigate(ProgressPath)
  }

  return (
    <>
      <Container>
        <ToastContainer
          position="top-left"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />

        <Aside>
          <div className="container-align">
            <FilledButton
              onClick={voltar}
              marginRight={'0px'}
              color={Colors.BLACK}
              width={110}
              heigth={60}
            >
              {'Voltar'}
            </FilledButton>

            <div className="content-desc">
              <h2>Como será seu projeto?</h2>
              <br />
              <p>Crie seu projeto da melhor forma,</p>
              <p>rapido e pratico para você</p>
            </div>
            <br />
            <br />
            <br />

            <div className="content-opt">
              <CardProject
                type={1}
                selected={selectedOption === 1}
                onSelect={() => handleOptionSelect(1)}
              />

              <CardProject
                type={2}
                selected={selectedOption === 2}
                onSelect={() => handleOptionSelect(2)}
              />
            </div>

            <div className="content-desc">
              <label>{'Nome do Projeto'}</label>
              <br />
              <InputText
                onBlur={() => closeModal()}
                type="text"
                name="nameProject"
                value={inputValues.nameProject}
                onChange={handleInputChange}
              />
              <br />

              <br />
              <label>{'Linguagens e Softwares'}</label>
              <br />
              <div className="lang-program">
                <InputText
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={openModal}
                  placeholder={'selecionar campo para escolher'}
                />

                <div className={`modal ${isModalOpen ? 'display' : ''}`}>
                  {/* <AiFillCloseCircle
                    onClick={() => closeModal()}
                    size={24}
                    style={{
                      position: "fixed",
                      top: 8,
                      right: 4,
                      cursor: "pointer",
                    }}
                  /> */}
                  <ul>
                    {filterSearch.map((tool) => (
                      <li
                        onClick={() => handleSelectOption(tool)}
                        key={tool.id}
                      >
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`modal-close ${isModalOpen ? 'display' : ''}`}
                  >
                    <AiFillCloseCircle
                      onClick={() => closeModal()}
                      size={24}
                      style={{
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-desc">
              <label>{'Descrição'}</label>
              <br />

              <TextArea
                onBlur={() => closeModal()}
                type="text"
                name="describe"
                value={inputValues.describe}
                onChange={handleInputChange}
              />
              <br />

              <div className="lang-program">
                {selectedOption === 1 ? (
                  <>
                    <div className="qnt-check">
                      <label>{'Quatidade de Pessoas'} </label>
                      <br />
                      <br />
                      <DivInput style={{ width: '100%', height: '58px' }}>
                        <Input
                          style={{ boxSizing: 'border-box' }}
                          w={'58px'}
                          type="number"
                          min="0"
                          max="6"
                          placeholder="0"
                          maxLength="99"
                          name="qntdPeople"
                          value={inputValues.qntdPeople}
                          onChange={handleInputChange}
                          onBlur={() => closeModal()}
                        />
                        <H3Input>{'Pessoas'}</H3Input>
                      </DivInput>
                    </div>

                    <div className="qnt-check">
                      <label>{'Meses Estimados'} </label>
                      <br />
                      <br />
                      <DivInput style={{ width: '100%', height: '58px' }}>
                        <Input
                          style={{
                            'word-break': 'break-all',
                            boxSizing: 'border-box'
                          }}
                          w={'58px'}
                          type="number"
                          min="0"
                          max="12"
                          placeholder="0"
                          name="estimatedTime"
                          value={inputValues.estimatedTime}
                          onChange={handleInputChange}
                          onBlur={() => closeModal()}
                        />
                        <H3Input>{'Meses'}</H3Input>
                      </DivInput>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <br />

              <br />

              <label>{'Valor Bruto'} </label>
              <br />

              <InputText
                type="text"
                name="value"
                value={formatNumber(inputValues.value, 'R$', '.', ',')}
                onChange={handleInputChange}
                placeholder="R$00,00"
                onBlur={() => closeModal()}
              />

              <br />
            </div>
          </div>
        </Aside>

        <Article>
          <div className="container-align">
            <div className="header"></div>
            <div className="content-desc">
              <h2>Seu projeto!</h2>
              <br />
              <p>Confira se as informações estão</p>
              <p>corretas</p>
            </div>
            <br />
            <br />
            <br />
            <CardOverviewOne
              selectedOptions={selectedOptions}
              handleDeselectOption={handleDeselectOption}
              debouncedInputValues={debouncedInputValues}
              type={selectedOption}
            />

            <br />
            <br />
            <br />

            <CardHunter>
              <h3>{infoUser.name}</h3>
              <br />
              <p>{infoUser.sector}</p>
              <br />
              <div className="content-infos-company">
                <div className="info-company">
                  <p>{infoUser.user.name}</p>
                  <AiOutlineUser size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
                <br />
                <div className="info-company">
                  <p>{infoUser.email}</p>
                  <MdEmail size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
                <br />
                <div className="info-company">
                  <p>{infoUser.user.cellphone}</p>
                  <MdPhoneInTalk size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
              </div>
            </CardHunter>
          </div>

          <div className="content-desc">
            <FilledButton
              marginRight={''}
              color={Colors.PRIMARY_COLOR}
              width={477}
              heigth={60}
              alignSelf={'center'}
              onClick={() => cadastrar()}
            >
              {'Criar Job'}
            </FilledButton>
          </div>
        </Article>
      </Container>
    </>
  )
}

export default CreateProject
