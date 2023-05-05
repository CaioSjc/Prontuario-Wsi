import { DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import  C  from '../../Styles/StyleSessãoCard'
import sessãoCard from '../../assets/IconSessãoCard/SessãoCard.svg'
import Truncate from "../TruncateSessao/Truncate"
import  OptionsCard from '../../assets/IconSessãoCard/optionsCard.svg'
import {  useState } from "react"
import ModalContentOptions from '../ModalOptionsCard/ModalContentOptionsCard'
import { useNavigate } from "react-router-dom"


function SessãoCard () {    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isNameModalOpen, setIsNameModalOpen] = useState('')
    const Navigate = useNavigate()
  
    function renderClick(nameModal: string) {
      setIsModalOpen(!isModalOpen)
      setIsNameModalOpen(nameModal)
    }

    return (
        <>
            <C.StyleContentSessao>
                <C.StyleContentIcon><img src={sessãoCard}/></C.StyleContentIcon>
                <C.ButtonOptionsCard onClick={() => renderClick('ModalContentOptions')} ><img src={OptionsCard} /></C.ButtonOptionsCard>
                <TitleCardFato>Sessão 01</TitleCardFato>
                <DataCardFato>15 de setembro de 2022</DataCardFato><C.ButtonMaisDetalhes onClick={() => Navigate('/DetalhesSessaoCard')} >Mais Detalhes...</C.ButtonMaisDetalhes>
                <C.TextCardSessao><Truncate>A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante bcbcbn fgddfgdfdfh ddsv fbdf trh bdfbd , dfdfb dfgh sgdvz vbxfbxbxbcv fdbbfdbx dgvczxvcvc ggcnncbn fbbfd cbcv dfbf sdddc xvbxbbbxv khdsbhds dsfjhfhsdb  djfnjndsf gjdsf gsjngs sdjbjgs  </Truncate></C.TextCardSessao>
                {isModalOpen && isNameModalOpen === 'ModalContentOptions' && (
                        <ModalContentOptions isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
                        </ModalContentOptions>
                        )}                                        
            </C.StyleContentSessao>       
        </>
    )               
}
                         
export default SessãoCard
