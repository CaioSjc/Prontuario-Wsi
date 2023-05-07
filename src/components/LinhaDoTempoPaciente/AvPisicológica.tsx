import { DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import C from '../../Styles/StyleSessãoCard'
import avPsicológicaCard from '../../assets/IconsAvPsicológicaCard/AvPsicológicaCard.svg'
import {
  ButtonLaudo,
  ContentAppTeste,
  ContentEntrevista,
  ContentObsComportamental,
  ContentRealizado,
  TitleCardEntrevista,
  TitleEmitir,
  TitleRealizado
} from '@/Styles/StyleCardAvPsicologica'
import E from '../../Styles/StyleDemandas'
import editDemanda from '../../assets/IconDemanda/editDemanda.svg'
import Olho from '../../assets/IconsAvPsicológicaCard/olho.svg'
import OptionsCard from '../../assets/IconSessãoCard/optionsCard.svg'
import { useState } from 'react'
import ModalOptionsAvPsicologica from '../ModalOptionsCard/ModalOptionsAvPsicologica'

function AvPsicológicaCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState('')

  function renderClick(nameModal: string) {
    setIsModalOpen(!isModalOpen)
    setIsNameModalOpen(nameModal)
  }

  return (
    <>
      <C.StyleDiv3></C.StyleDiv3>
      <C.StyleContentAvPsicológica>
        <C.StyleIconAvPsicológica>
          <img src={avPsicológicaCard} />
        </C.StyleIconAvPsicológica>
        <C.ButtonOptionsCard onClick={() => renderClick('ModalOptionsAvPsicologica')}>
          <img src={OptionsCard} />
        </C.ButtonOptionsCard>
        <TitleCardFato>Avaliação Psicológica</TitleCardFato>
        <DataCardFato>15 de setembro de 2022</DataCardFato>
        <ContentEntrevista>
          <TitleCardEntrevista>Entrevista Psicológica</TitleCardEntrevista>
          <ContentRealizado>
            <TitleRealizado>Realizado</TitleRealizado>
          </ContentRealizado>
          <E.EditServiço style={{ marginLeft: '20px', marginTop: '-3px' }}>
            <img src={editDemanda} />
          </E.EditServiço>
          <E.EditServiço style={{ marginLeft: '-60px', marginTop: '-3px' }}>
            <img src={Olho} />
          </E.EditServiço>
        </ContentEntrevista>
        <ContentAppTeste>
          <TitleCardEntrevista>Aplicação de Teste</TitleCardEntrevista>
          <ContentRealizado style={{ marginLeft: '427px' }}>
            <TitleRealizado>Realizado</TitleRealizado>
          </ContentRealizado>
          <E.EditServiço style={{ marginLeft: '20px', marginTop: '-3px' }}>
            <img src={editDemanda} />
          </E.EditServiço>
          <E.EditServiço style={{ marginLeft: '-60px', marginTop: '-3px' }}>
            <img src={Olho} />
          </E.EditServiço>
        </ContentAppTeste>
        <ContentObsComportamental>
          <TitleCardEntrevista>Observação Comportamental</TitleCardEntrevista>
          <ContentRealizado style={{ marginLeft: '337px' }}>
            <TitleRealizado>Realizado</TitleRealizado>
          </ContentRealizado>
          <E.EditServiço style={{ marginLeft: '20px', marginTop: '-3px' }}>
            <img src={editDemanda} />
          </E.EditServiço>
          <E.EditServiço style={{ marginLeft: '-60px', marginTop: '-3px' }}>
            <img src={Olho} />
          </E.EditServiço>
        </ContentObsComportamental>
        <TitleEmitir>Emitir</TitleEmitir>
        <ButtonLaudo>Laudo</ButtonLaudo>
        <ButtonLaudo>Atestado</ButtonLaudo>
        <ButtonLaudo>Relatório</ButtonLaudo>
        <ButtonLaudo>Declaração</ButtonLaudo>
        {isModalOpen && isNameModalOpen === 'ModalOptionsAvPsicologica' && (
          <ModalOptionsAvPsicologica
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          ></ModalOptionsAvPsicologica>
        )}
      </C.StyleContentAvPsicológica>
    </>
  )
}

export default AvPsicológicaCard
