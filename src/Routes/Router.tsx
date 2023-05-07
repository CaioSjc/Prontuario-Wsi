import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EntrevistaPsicologica from '../Routes/Pages/Entrevista'
import App from '@/components/App/App'
import MenuHeader from '../components/App/Index'
import AplicaçaoTeste from './Pages/AplicaçaoTeste'
import Login from './Pages/Login'
import ObsComportamental from './Pages/ObsComportamental'
import AvaliaçaoSucess from './Pages/AvaliaçaoSucess'
import DetalhesSessaoCard from './Pages/DetalhesSessao'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route element={<MenuHeader />}>
          <Route path="/App" element={<App />} />
          <Route path="/Entrevista" element={<EntrevistaPsicologica />} />
          <Route path="/AplicaçaoTeste" element={<AplicaçaoTeste />} />
          <Route path="/ObsComportamental" element={<ObsComportamental />} />
          <Route path="/AvaliaçaoSucess" element={<AvaliaçaoSucess />} />
          <Route path="/DetalhesSessaoCard" element={<DetalhesSessaoCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
