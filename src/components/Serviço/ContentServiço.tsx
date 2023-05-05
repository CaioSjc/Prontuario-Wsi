import s from '../../Styles/StyleContentServiço'
import S from '../../Styles/IdPacienteStyle'
import E from '../../Styles/StyleDemandas'
import editDemanda from '../../assets/IconDemanda/editDemanda.svg'
import Delete from '../../assets/IconServiço/Delete.svg'
import Sessão from '../../assets/IconServiço/Sessão.svg'
import FatoRelevante from '../../assets/IconServiço/FatoRelevante.svg'
import Anexo from '../../assets/IconServiço/Anexo.svg'
import AvPsicológica from '../../assets/IconServiço/AvaliaçãoPsicológica.svg'
import ExpandIcon from '../../assets/IconsMenuHeader/ExpandIcon.svg'
import { StyledExpand2 } from '@/Styles/StyledMenuNavBar'
import {  useState } from "react"
import ModalContentSessao from "../ModalContentServiço/ModalCardNovaSessao"
import ModalContentFatoRelevante from '../ModalContentServiço/ModalCardFatoRelevante'
import ModalContentAnexo from '../ModalContentServiço/ModalCardAnexo'
import ModalContentAvPsicologica from '../ModalContentServiço/ModalCardAvPsicologica'

function ContentServiço() {   
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState('')

  function renderClick(nameModal: string) {
    setIsModalOpen(!isModalOpen)
    setIsNameModalOpen(nameModal)
  }

    return (
        <>
            <s.ContentServiço>
                <S.TitleIdCustom>Serviço:</S.TitleIdCustom>
                <s.StyleInput  id="statusServiço">
                    <option disabled selected></option>
                    <option  value="Novo Acompanhamento">Novo Acompanhamento</option>
                    <option  value="Porte de Armas">Porte de Armas</option>
                </s.StyleInput>
                <S.TitleIdCustom2>Data Inicial:</S.TitleIdCustom2><E.ContentEditCustom>18/10/2002</E.ContentEditCustom><E.EditServiço><img src={editDemanda}/></E.EditServiço><s.StyleButtonDelete><img src={Delete}/></s.StyleButtonDelete>
                <s.StyleHr/>
                <s.StyleContent>
                    <s.StyleButtonSessao onClick={() => renderClick('ModalContentSessao')} ><s.StyleIcons src={Sessão} />Sessão</s.StyleButtonSessao>
                        {isModalOpen && isNameModalOpen === 'ModalContentSessao' && (
                        <ModalContentSessao isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> 
                        </ModalContentSessao>
                        )}
                    <s.StyleButtonFatoRelevante onClick={() => renderClick('ModalCardFatoRelevante')} ><s.StyleIcons src={FatoRelevante} />Fato Relevante </s.StyleButtonFatoRelevante>
                        {isModalOpen &&  isNameModalOpen === 'ModalCardFatoRelevante' && (
                        <ModalContentFatoRelevante isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        </ModalContentFatoRelevante>
                        )}
                    <s.StyleButtonAnexo onClick={() => renderClick('ModalCardAnexo')} ><s.StyleIcons src={Anexo} />Anexo</s.StyleButtonAnexo>
                        {isModalOpen && isNameModalOpen === 'ModalCardAnexo' && (
                        <ModalContentAnexo isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        </ModalContentAnexo>
                        )}
                    <s.StyleButtonAvaliaçao onClick={() => renderClick('ModalCardAvPsicologica')} ><s.StyleIcons src={AvPsicológica} />Avaliação Psicológica</s.StyleButtonAvaliaçao>
                        {isModalOpen && isNameModalOpen === 'ModalCardAvPsicologica' && (
                        <ModalContentAvPsicologica isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        </ModalContentAvPsicologica>
                        )}
                </s.StyleContent>          
            </s.ContentServiço>
            <s.StyleHr2/><s.StyleContentFiltro>Filtrar Por:</s.StyleContentFiltro><s.StyleOptionsFiltro>Todas</s.StyleOptionsFiltro><s.ContentStyleIcon><s.StyleButtonFiltro><StyledExpand2 src={ExpandIcon}/></s.StyleButtonFiltro></s.ContentStyleIcon>
        </>
    )
}

export default ContentServiço   