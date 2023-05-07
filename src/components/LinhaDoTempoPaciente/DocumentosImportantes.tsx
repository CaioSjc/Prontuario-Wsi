import { ContentCardFato, DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import C from '../../Styles/StyleSessãoCard'
import documentosImportantesCard from '../../assets/IconDocumentosImportantesCard/DocumentosImportantesCard.svg'
import Truncate from '../TruncateSessao/Truncate'
import OptionsCard from '../../assets/IconSessãoCard/optionsCard.svg'
import { useState } from 'react'
import ModalOptionsFato from '../ModalOptionsCard/ModalContentOptionsFato'

function DocumentosImportantesCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState('')

  function renderClick(nameModal: string) {
    setIsModalOpen(!isModalOpen)
    setIsNameModalOpen(nameModal)
  }
  return (
    <>
      <C.StyleDiv2></C.StyleDiv2>
      <C.StyleContentAnexo>
        <C.StyleIconAnexo>
          <img src={documentosImportantesCard} />
        </C.StyleIconAnexo>
        <C.ButtonOptionsCard onClick={() => renderClick('ModalOptionsFato')}>
          <img src={OptionsCard} />
        </C.ButtonOptionsCard>
        <TitleCardFato>Documentos importantes</TitleCardFato>
        <DataCardFato>15 de setembro de 2022</DataCardFato>
        <ContentCardFato>
          <Truncate>
            Anexo hoje alguns documentos importantes sobre as consultas recentes da paciente Ana Ester Resende.
            Documentos para serem consultados posteriormente, caso necessário.
          </Truncate>
        </ContentCardFato>
        {isModalOpen && isNameModalOpen === 'ModalOptionsFato' && (
          <ModalOptionsFato isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalOptionsFato>
        )}
      </C.StyleContentAnexo>
    </>
  )
}

export default DocumentosImportantesCard
