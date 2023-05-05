import MenuHeader from '../App/Index'
import IdPaciente from '../IdPaciente/IdPaciente'
import AvPsicológicaCard from '../LinhaDoTempoPaciente/AvPisicológica'
import DocumentosImportantesCard from '../LinhaDoTempoPaciente/DocumentosImportantes'
import FatoRelevanteCard from '../LinhaDoTempoPaciente/FatoRelevante'
import SessãoCard from '../LinhaDoTempoPaciente/Sessão'
import ContentServiço from '../Serviço/ContentServiço'
import Demanda from '@/components/DemandaEanotaçoesPessoais/DemandaEanotaçoesPessoais'
import Pesquisa from '../Pesquisa/InputPesquisa'

const App = () => {
  return (
    <>
      <MenuHeader />
      <Pesquisa />
      <IdPaciente />
      <Demanda />
      <ContentServiço />
      <SessãoCard />
      <FatoRelevanteCard />
      <DocumentosImportantesCard />
      <AvPsicológicaCard />
    </>
  )
}

export default App
