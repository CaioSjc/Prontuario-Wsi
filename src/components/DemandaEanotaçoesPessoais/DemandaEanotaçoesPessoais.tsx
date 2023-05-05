import { ContentAnotaçoes } from '@/Styles/StyleAnotaçoesPessoais'
import S from '../../Styles/IdPacienteStyle'
import E from '@/Styles/StyleDemandas'
import editDemanda from '../../assets/IconDemanda/editDemanda.svg'
import { useState } from 'react'
import ModalAnotaçoes from './ModalAnotaçoes'
import ModalDemandas from './ModalDemandas'

const DemandaEanotaçoesPessoais = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState('')

  function renderClick(nameModal: string) {
    setIsModalOpen(!isModalOpen)
    setIsNameModalOpen(nameModal)
  }

  return (
    <>
      <S.ContentDemanda>
        <S.TitleIdMargin>Demandas e Objetivos</S.TitleIdMargin>
        <E.EditDemanda onClick={() => renderClick('ModalContentDemandas')}>
          <img src={editDemanda} />
        </E.EditDemanda>
        <E.ContentEdit>
          No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira e residente na cidade de Manaus,
          procurou atendimento psicológico em virtude de estar apresentando...
        </E.ContentEdit>
        {isModalOpen && isNameModalOpen === 'ModalContentDemandas' && (
          <ModalDemandas isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalDemandas>
        )}
      </S.ContentDemanda>
      <ContentAnotaçoes>
        <S.TitleIdMargin2>Anotações Pessoais</S.TitleIdMargin2>
        <E.EditDemanda onClick={() => renderClick('ModalContentAnotaçoes')}>
          <img src={editDemanda} />
        </E.EditDemanda>
        <E.ContentEdit>
          Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento da
          paciente. Tal como: inquietação e medos.
        </E.ContentEdit>
        {isModalOpen && isNameModalOpen === 'ModalContentAnotaçoes' && (
          <ModalAnotaçoes isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalAnotaçoes>
        )}
      </ContentAnotaçoes>
    </>
  )
}

export default DemandaEanotaçoesPessoais
