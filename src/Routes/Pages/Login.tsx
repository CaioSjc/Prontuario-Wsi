import React, { useState } from 'react'
import { loginService } from '../../Services/Usuario/login-service'
import L from '../../Styles/StyleLogin'
import Logo from '../../assets/IconsLogin/logo.svg'
import LogoCard from '../../assets/IconsLogin/LogoLogin.svg'
import { useNavigate } from 'react-router-dom'
import Loader from '@/components/Loading/loader'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [removeLoader, setRemoveLoader] = useState(true)

  const login = async (event: React.MouseEvent) => {
    setRemoveLoader(false)
    event.preventDefault()
    try {
      const response = await loginService({ email, password })

      localStorage.setItem('token', response.token)
      setRemoveLoader(true)
      navigate('/App')
    } catch (er) {
      if (er instanceof Error) {
        setError(er?.message)
        setRemoveLoader(true)
        return
      }
      setError('Deu erro')
    }
  }

  return (
    <form>
      <L.StyleContainerLogin />
      <L.StyleLogoLogin src={Logo} />
      <L.ContainerEmailSenha>
        <L.LogoCard src={LogoCard} />
        <L.ContainerError>{error}</L.ContainerError>
        <L.LabelLogin>Login:</L.LabelLogin>
        <L.InputLogin type="text" placeholder="email" onChange={ev => setEmail(ev.target.value)} />
        <L.LabelSenha>Senha:</L.LabelSenha>
        <L.InputSenha type="password" placeholder="senha" onChange={ev => setPassword(ev.target.value)} />
        <L.ButtonEntrar type="submit" onClick={login}>
          Entrar
        </L.ButtonEntrar>
      </L.ContainerEmailSenha>
      {!removeLoader && (
        <L.BackgroundLoader>
          <Loader />
        </L.BackgroundLoader>
      )}
    </form>
  )
}
