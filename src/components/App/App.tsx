import MenuHeader from '../App/Index'
import IdPaciente from '../IdPaciente/IdPaciente'
import AvPsicológicaCard from '../LinhaDoTempoPaciente/AvPisicológica'
import DocumentosImportantesCard from '../LinhaDoTempoPaciente/DocumentosImportantes'
import FatoRelevanteCard from '../LinhaDoTempoPaciente/FatoRelevante'
import SessãoCard from '../LinhaDoTempoPaciente/Sessão'
import ContentServiço from '../Serviço/ContentServiço'
import Demanda from '@/components/DemandaEanotaçoesPessoais/DemandaEanotaçoesPessoais'
import Pesquisa from '../Pesquisa/InputPesquisa'
import { httpClient } from '@/Services/Usuario/http-client'
import { useEffect, useState } from 'react'
import { timelineid } from '@/Utils/TimeLineId'
import Loader2 from '@/components/Loading/loader2'
import { ButtonTop, StyleTopImg, StyleTopImg2 } from '@/Styles/StyleButtonTop'
import Top from '../../assets/IconButtonTop/top.svg'

const App = () => {
  const [occurrences, setOccurrences] = useState([])
  const [removeLoader, setRemoveLoader] = useState(true)

  const loadOccurences = async () => {
    setRemoveLoader(false)
    const token = localStorage.getItem('token')
    const response = await httpClient.get('/timeline/' + timelineid, {
      headers: {
        Authorization: token,
        Accept: '/'
      }
    })
    setOccurrences(response.data.timeline.occurrences)
    setRemoveLoader(true)
  }

  useEffect(() => {
    loadOccurences()
  }, [])

  function scrollTop() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <MenuHeader />
      <Pesquisa />
      <IdPaciente />
      <Demanda />
      <ContentServiço />
      {!removeLoader && <Loader2 />}
      {occurrences.map(occurrence => {
        switch (occurrence.type) {
          case 'session':
            return (
              <SessãoCard
                key={occurrence.id}
                title={occurrence.title}
                data={occurrence.createdOn}
                content={occurrence.content}
                value={occurrence.payment?.value ?? ''}
                method={occurrence.payment?.method ?? ''}
                status={occurrence.payment?.status ?? ''}
              />
            )
          case 'attachment':
            return <DocumentosImportantesCard />
          case 'assessment':
            return <AvPsicológicaCard />
          case 'relevant_fact':
            return <FatoRelevanteCard />
        }
      })}
      <ButtonTop onClick={scrollTop}>
        <StyleTopImg src={Top} />
        <StyleTopImg2 src={Top} />
        Voltar para o topo!!!
      </ButtonTop>
    </>
  )
}

export default App
