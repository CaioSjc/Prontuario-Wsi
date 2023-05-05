import E from '../../Styles/StyleListPerguntas'
import HeaderGreen from '../../assets/IconsAplicaçaoTeste/headerGreen.svg'
import HeaderGreenTeste from '../../assets/IconsObsComportamental/headerGreenTeste.svg'
import HeaderObs from '../../assets/IconsObsComportamental/HeaderObs.svg'
import Disket from '../../assets/IconListPerguntas/disket.svg'
import Left from '../../assets/IconListPerguntas/left.svg'
import ChekedImg from '../../assets/IconsAplicaçaoTeste/chekedImg.svg'
import T from '../../Styles/StyleAppTeste'
import { useState } from "react"
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { useNavigate } from "react-router-dom"


const ObsComportamental = () => {
    const [styleText, setStyleText] = useState(EditorState.createEmpty());
    const Navigate = useNavigate()

    const onEditorStateChange = (editorState: any) => {
        setStyleText(editorState);
      };
 
    return (
      <>      
        <E.ContentNavBar>
          <E.NavBarContent>
            <E.ButtonVoltar onClick={() => Navigate('/AplicaçaoTeste')} >
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
          <E.ContentImg3 style={{marginTop:'-51px'}} src={HeaderObs} /><E.ContentListMargin2Obs>Observação Comportamental</E.ContentListMargin2Obs>     
       <E.ContentStyleObs>
        <E.ContentSalvarPular>
          <E.ContentTitle>Observação Comportamental</E.ContentTitle>
          <E.ButtonSalvarMargin onClick={() => Navigate('/AvaliaçaoSucess')} >
            <img src={Disket} />
            Salvar
            </E.ButtonSalvarMargin>
              </E.ContentSalvarPular>
              <T.SubTitleAppTeste>Síntese das observações comportamentais</T.SubTitleAppTeste>
              <T.ContentEditorObs>
              <Editor
        editorState={styleText}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="demo-toolbar"
        toolbar={{
          options: ["inline", "list", "textAlign", "link", "history"]
        }}
      />     
      </T.ContentEditorObs>
      <E.ButtonSalvarList onClick={() => Navigate('/AvaliaçaoSucess')} style={{marginTop:'40px'}} ><img src={Disket} />Salvar</E.ButtonSalvarList> 
              </E.ContentStyleObs>              
      </>
    )
  }
  
  export default ObsComportamental