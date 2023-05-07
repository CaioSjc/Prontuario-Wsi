import E from '../../Styles/StyleListPerguntas'
import HeaderGreen from '../../assets/IconsAplicaçaoTeste/headerGreen.svg'
import HeaderTeste from '../../assets/IconsAplicaçaoTeste/headerTeste.svg'
import Header3 from '../../assets/IconListPerguntas/header3.svg'
import Disket from '../../assets/IconListPerguntas/disket.svg'
import Rigth from '../../assets/IconListPerguntas/rigth.svg'
import Left from '../../assets/IconListPerguntas/left.svg'
import ChekedImg from '../../assets/IconsAplicaçaoTeste/chekedImg.svg'
import T from '../../Styles/StyleAppTeste'
import { useState } from 'react'
import ModalAppTeste from '@/components/ModalAppTeste/ModalAppTeste'
import Add from '../../assets/IconsAplicaçaoTeste/add.svg'
import Expand from '../../assets/IconsAplicaçaoTeste/expand.svg'
import ModalAppMemoria from '@/components/ModalAppTeste/ModalAppMemoria'
import ModalAppInteligencia from '@/components/ModalAppTeste/ModalAppInteligencia'
import { useNavigate } from 'react-router-dom'

const AplicaçaoTeste = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameModalOpen, setIsNameModalOpen] = useState('')
  const Navigate = useNavigate()

  function renderClick(nameModal: string) {
    setIsModalOpen(!isModalOpen)
    setIsNameModalOpen(nameModal)
    if (!isModalOpen) {
      window.scrollTo(0, 330)
      console.log('open')
    } else {
      window.scrollTo(0, 0)
      console.log('fechado')
    }
  }

  return (
    <>
      <E.ContentNavBar>
        <E.NavBarContent>
          <E.ButtonVoltar onClick={() => Navigate('/Entrevista')}>
            <img src={Left} />
            Voltar
          </E.ButtonVoltar>
          <E.Divisao />
          <E.SubTitle>Avaliação Psicológica</E.SubTitle>
          <E.Divisao2 />
          <E.TitleCustomList>Data:</E.TitleCustomList>
          <E.ContentDataListPerguntas>18/10/2002</E.ContentDataListPerguntas>
        </E.NavBarContent>
      </E.ContentNavBar>
      <E.ContentImg src={HeaderGreen} />
      <E.ContentListImgApp>
        <E.ContentImg4 src={ChekedImg} />
        Entrevista Psicológica
      </E.ContentListImgApp>
      <E.ContentImg2 src={HeaderTeste} />
      <E.ContentListMarginApp>Aplicação de Teste</E.ContentListMarginApp>
      <E.ContentImg3 src={Header3} />
      <E.ContentListMargin2>Observação Comportamental</E.ContentListMargin2>
      <E.ContentStyleAppTeste>
        <E.ContentSalvarPular>
          <E.ContentTitle>Aplicação de Teste</E.ContentTitle>
          <E.ButtonSalvar onClick={() => Navigate('/ObsComportamental')}>
            <img src={Disket} />
            Salvar
          </E.ButtonSalvar>
          <E.ButtonPular onClick={() => Navigate('/ObsComportamental')}>
            Pular
            <img src={Rigth} />
          </E.ButtonPular>
        </E.ContentSalvarPular>
        <T.SubTitleAppTeste>Por favor, adicione um teste</T.SubTitleAppTeste>
        <T.ButtonAddTeste>
          <T.ContentOptionsAdd>
            <T.ContentStyleAdd src={Add} />
            <T.OptionDisable disabled selected>
              Adicionar
            </T.OptionDisable>
            <T.ContentStyleExpand src={Expand} />
            <p></p>
            <T.StyleOptionAtençao onClick={() => renderClick('ModalAppTeste')}>
              Atenção Concentrada/Seletiva
            </T.StyleOptionAtençao>
            <p></p>
            <T.StyleOptionMemoria onClick={() => renderClick('ModalAppMemoria')}>Memória</T.StyleOptionMemoria>
            <p></p>
            <T.StyleOptionInteligencia onClick={() => renderClick('ModalAppInteligencia')}>
              Inteligência
            </T.StyleOptionInteligencia>
          </T.ContentOptionsAdd>
        </T.ButtonAddTeste>
        {isModalOpen && isNameModalOpen === 'ModalAppTeste' && (
          <ModalAppTeste isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalAppTeste>
        )}
        {isModalOpen && isNameModalOpen === 'ModalAppMemoria' && (
          <ModalAppMemoria isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalAppMemoria>
        )}
        {isModalOpen && isNameModalOpen === 'ModalAppInteligencia' && (
          <ModalAppInteligencia isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ModalAppInteligencia>
        )}
      </E.ContentStyleAppTeste>
    </>
  )
}

export default AplicaçaoTeste
