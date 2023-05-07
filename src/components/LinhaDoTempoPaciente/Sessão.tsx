import { DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import C from '../../Styles/StyleSessãoCard'
import sessãoCard from '../../assets/IconSessãoCard/SessãoCard.svg'
import Truncate from '../TruncateSessao/Truncate'
import OptionsCard from '../../assets/IconSessãoCard/optionsCard.svg'
import { useState } from 'react'
import ModalContentOptions from '../ModalOptionsCard/ModalContentOptionsCard'
import { useNavigate } from 'react-router-dom'

function SessãoCard({ title, data, content, value, method, status }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState('')
  const Navigate = useNavigate()

  function renderClick(nameModal: string) {
    setIsModalOpen(!isModalOpen)
    setIsNameModalOpen(nameModal)
  }
  const dataFormatada = new Intl.DateTimeFormat('pt-Br', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(data))

  return (
    <>
      <C.StyleContentSessao>
        <C.StyleContentIcon>
          <img src={sessãoCard} />
        </C.StyleContentIcon>
        <C.ButtonOptionsCard onClick={() => renderClick('ModalContentOptions')}>
          <img src={OptionsCard} />
        </C.ButtonOptionsCard>
        <TitleCardFato>{title}</TitleCardFato>
        <DataCardFato>{dataFormatada}</DataCardFato>
        <C.ButtonMaisDetalhes
          onClick={() => Navigate('/DetalhesSessaoCard', { state: { title, data, content, value, method, status } })}
        >
          Mais Detalhes...
        </C.ButtonMaisDetalhes>
        <C.TextCardSessao>
          <Truncate>{content ?? ''}</Truncate>
        </C.TextCardSessao>
        {isModalOpen && isNameModalOpen === 'ModalContentOptions' && (
          <ModalContentOptions isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalContentOptions>
        )}
      </C.StyleContentSessao>
    </>
  )
}

export default SessãoCard
