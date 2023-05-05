import { ContentCardFato, DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import  C  from '../../Styles/StyleSessãoCard'
import fatoRelevanteCard from '../../assets/IconFatoRelevanteCard/FatoRelevanteCard.svg'
import Truncate from '../TruncateSessao/Truncate'
import  OptionsCard from '../../assets/IconSessãoCard/optionsCard.svg' 
import {  useState } from "react"
import ModalOptionsFato from '../ModalOptionsCard/ModalContentOptionsFato'

function FatoRelevanteCard () {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isNameModalOpen, setIsNameModalOpen] = useState('')
  
    function renderClick(nameModal: string) {
      setIsModalOpen(!isModalOpen)
      setIsNameModalOpen(nameModal)
    }
    return (
        <>  
            <C.StyleDiv></C.StyleDiv>
            <C.StyleContentFatoRelevante>
                <C.StyleIconFatoRelevante><img src={fatoRelevanteCard} /></C.StyleIconFatoRelevante>
                <C.ButtonOptionsCard onClick={() => renderClick('ModalOptionsFato')} ><img src={OptionsCard} /></C.ButtonOptionsCard>
                <TitleCardFato>Fato Relevante</TitleCardFato>
                <DataCardFato>15 de setembro de 2022</DataCardFato>
                <ContentCardFato><Truncate>Cliente não compareceu.</Truncate></ContentCardFato>
                {isModalOpen && isNameModalOpen === 'ModalOptionsFato' && (
                        <ModalOptionsFato isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
                        </ModalOptionsFato>
                        )}
            </C.StyleContentFatoRelevante>              
        </>
    )
}

export default FatoRelevanteCard