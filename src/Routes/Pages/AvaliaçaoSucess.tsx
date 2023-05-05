import E from '../../Styles/StyleListPerguntas'
import HeaderGreen from '../../assets/IconsAplicaçaoTeste/headerGreen.svg'
import HeaderGreenTeste from '../../assets/IconsObsComportamental/headerGreenTeste.svg'
import Left from '../../assets/IconListPerguntas/left.svg'
import ChekedImg from '../../assets/IconsAplicaçaoTeste/chekedImg.svg'
import T from '../../Styles/StyleAppTeste'
import CheckMarkSuccess from '../../assets/IconsAvaliaçaoSucess/checkMarkSuccess.svg'
import { useNavigate } from "react-router-dom"

 

const AvaliaçaoSucess = () => {
    const Navigate = useNavigate()
 
    return (
      <>      
        <E.ContentNavBar>
          <E.NavBarContent>
            <E.ButtonVoltar onClick={() => Navigate('/ObsComportamental')} >
              <img src={Left} />
              Voltar
            </E.ButtonVoltar>
            <E.Divisao/>
            <E.SubTitle>Avaliação Psicológica</E.SubTitle>
            <E.Divisao2/>
            <E.TitleCustomList>Data:</E.TitleCustomList><E.ContentDataListPerguntas>18/10/2002</E.ContentDataListPerguntas>      
          </E.NavBarContent>
        </E.ContentNavBar>           
          <E.ContentImg src={HeaderGreen} /><E.ContentListImgApp><E.ContentImg4 src={ChekedImg} />Entrevista Psicológica</E.ContentListImgApp>       
          <E.ContentImg2 src={HeaderGreenTeste} /><E.ContentListMarginObs><E.ContentImg4 src={ChekedImg} />Aplicação de Teste</E.ContentListMarginObs>
          <E.ContentImg3  src={HeaderGreenTeste} style={{marginTop:'-49px'}} /><E.ContentListSucessObs><E.ContentImg4 src={ChekedImg} />Observação Comportamental</E.ContentListSucessObs>
          <E.HeaderStyleSucess/> 
          <T.AvaliaçaoSucessContent>
            <T.StyleIconSuccess src={CheckMarkSuccess}/>   
            <T.ContentTitleSuccess>Avaliação Psicológica salva com sucesso!</T.ContentTitleSuccess>
            <T.ContentSubTitleSucesso>Você irá visualizar está avaliação no prontuário do paciente!</T.ContentSubTitleSucesso>
            <T.StyleButtonOk onClick={() => Navigate('/App')} >Ok</T.StyleButtonOk>
            </T.AvaliaçaoSucessContent>    
                
      </>
    )
  }
  
  export default AvaliaçaoSucess