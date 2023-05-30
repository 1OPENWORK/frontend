import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputForm from '../../../../../components/input/InputForm'
import Styled from '../../Register.styled'
import { object, string, ref } from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FilledButton } from '../../../../../components/UI/buttons/Button'
import Colors from '../../../../../constants/Colors'
import {
  changeEtapaAll,
  selectRegister
} from '../../../../../store/reducers/RegisterSlice'
import { post } from '../../../../../services/Generected'
import { useNavigate } from 'react-router-dom'
import { AuthPath } from '../../../../../constants/Path'
import InputMask from 'react-input-mask'
import { AmbienteBackend } from "../../../../../hooks/Ambiente";

const RegisterCompany = () => {
  const dispatch = useDispatch()
  const { register } = useSelector(selectRegister)

  const navigate = useNavigate()

  const URI = AmbienteBackend();

  const [nomeEmpresa, setnomeEmpresa] = useState('')
  const [email, setEmail] = useState('')
  const [setor, setSetor] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [isNext, setIsNext] = useState(false)
  const [verified, setVerified] = useState(false)

  const validRegister = object({
    cnpj: string().required('Preencha o campo CNPJ.'),
    sector: string().required('Preencha o campo setor.'),
    email: string()
      .email('E-mail inválido')
      .required('Preencha o campo Email.'),
    name: string().required('Preencha o campo nome empresa.')
  })

  async function handleForm() {
    const dados = {
      cnpj: cnpj,
      sector: setor,
      email: email,
      name: nomeEmpresa
    }

    const dadosSave = {
      user: {
        name: register.etapa1.fullname,
        email: register.etapa1.email,
        cpfCnpj: register.etapa1.cfp_cnpj,
        cellphone: register.etapa1.tel,
        password: register.etapa1.password,
        autentication: false
      },
      address: {
        zipcode: register.etapa2.cep,
        state: register.etapa2.estado,
        city: register.etapa2.cidade,
        district: register.etapa2.bairro,
        address: register.etapa2.rua,
        number: register.etapa2.numero,
        complement: register.etapa2.complemento
      },
      company: { ...dados }
    }

    try {
      await validRegister.validate(dados)

      const response = await post(URI + '/api/cadastros/company', dadosSave)

      if (response.status === 201) {
        navigate(AuthPath)
      }

      setVerified(true)
    } catch (err) {
      toast.error(err.errors[0], {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: 'light'
      })
    }
  }

  function nextEtapa() {
    dispatch(
      changeEtapaAll({
        etapa: 7
      })
    )
  }

  return (
    <Styled.Form>
      <ToastContainer />
      <Styled.Row>
        <InputForm
          label="Nome Empresa"
          value={nomeEmpresa}
          handle={setnomeEmpresa}
          space={'1.25rem'}
          disabled={verified}
        />

        <InputForm
          label="Email"
          value={email}
          handle={setEmail}
          space={'1.25rem'}
          disabled={verified}
        />
      </Styled.Row>

      <Styled.Row>
        <InputForm
          label="Setor"
          value={setor}
          handle={setSetor}
          space={'1.25rem'}
          disabled={verified}
        />

        <Styled.Column>
          <Styled.Text>{'CNPJ'}</Styled.Text>
          <InputMask
            className="InputMask2"
            mask="99.999.999/9999-99"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
              }
            }}
            disabled={verified}
          />
        </Styled.Column>
      </Styled.Row>

      <Styled.Divisor align={"flex-end"} style={{ width: "48.125rem" }}>
    
          <FilledButton
            onClick={handleForm}
            color={Colors.SECONDARY_COLOR}
            width={190}
            heigth={60}
          >
            {"Cadastrar"}
          </FilledButton>
     
      </Styled.Divisor>
    </Styled.Form>
  )
}

export default RegisterCompany
