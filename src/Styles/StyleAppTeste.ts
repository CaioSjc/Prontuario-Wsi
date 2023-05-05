import styled from "styled-components"

const SubTitleAppTeste = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #4F4F4F;
height: 36px;
width: 456px;
margin-left: 28px;
margin-top: 32px;
`

const ButtonAddTeste = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 17px;
gap: 14px;
width: 214px;
height: 48px;
background: #2F80ED;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
border-radius: 24px;
border-bottom: none;
margin-left: 28px;
`

const ModalAppTeste = styled.div`
  position: relative;
  width: 816px;
  height: 320px;
  background: #F2F2F2;
  border-radius: 15px;
  margin-top: 150px;
  margin-left: 28px;
`

const ModalAppMemoria = styled(ModalAppTeste)`

`

const ModalAppInteligencia = styled(ModalAppTeste)`

`

const ContentOptionsAdd = styled.div`
height: 135px;
background: #2F80ED;
margin-top: 106px;
border-radius: 8px;
`

const ContentStyleAdd = styled.img`
margin-right: 66px;
margin-top: 6px;
`

const ContentStyleExpand = styled.img`
margin-left: 66px;

`

const OptionDisable = styled.option`
margin-left: 52px;
margin-top: -20px;
float: left;
color: #FFFFFF;
`

const SubTitleCardContent = styled.div`
width: 817px;
height: 58px;
background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
border-radius: 16px;
` 

const CardAtençao = styled.h3`
width: 529px;
height: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #000000;
padding-top: 2px;
margin-left: 24px;
float: left;
`

const LabelNome = styled.label`
margin-left: 64px;
margin-top: 25px;
width: 347.04px;
height: 21.92px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
color: #4F4F4F;
`
const InputNome = styled.input`
box-sizing: border-box;
width: 161px;
height: 50px;
background: #E0E0E0;
border: 1px solid #BDBDBD;
border-radius: 8px;
margin-left: 64px;
float: left;
`

const LabelNumeroDePontos = styled(LabelNome)`
margin-top: -21px;
margin-left: 238px;
`

const InputNumeroDePontos = styled(InputNome)`
margin-left: 10px;
`

const LabelResultado = styled(LabelNome)`
margin-left: 580px;
margin-top: -22px;
`

const InputResultado = styled(InputNome)`
margin-left: 10px;
`

const LabelObs = styled(LabelNome)`
padding-top: 33px;
`

const InputObs = styled(InputNome)`
width: 675px;
height: 59px;
`

const ContentEditorObs = styled.div`
.demo-wrapper{width: 10px;}
.demo-editor{
  box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 14px 30px 30px 14px;
gap: 10px;
width: 846px;
height: 240px;
background: #FFFFFF;
border: 1px solid rgba(66, 82, 110, 0.25);
box-shadow: inset 0px 1px 3px #DDDDDD;
border-radius: 10px;
margin-left: 30px;
}
.demo-toolbar{
border: none;
width: 900px;
margin-left: 22px;
}
`

const AvaliaçaoSucessContent = styled.div`
width: 557px;
height: 519px;
background: #FFFFFF;
border-radius: 16px;
margin-left: 400px;
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyleIconSuccess = styled.img`
height: 220px;
width: 220px;
`

const ContentTitleSuccess = styled.h1`
width: 331px;
height: 62px;
font-family: 'Comfortaa';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 128%;
text-align: center;
color: #00995D;
`

const ContentSubTitleSucesso = styled.h2`
width: 329px;
height: 52px;
font-family: 'Comfortaa';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 145%;
text-align: center;
color: #212121;
`

const StyleButtonOk = styled.button`
height: 48px;
width: 264px;
border-radius: 24px;
background: #017849;
border: none;
color: #FFFFFF;
cursor: pointer;
`

const StyleOptionAtençao = styled.option`
cursor: pointer;
color: #FFFFFF;
background: #017849;
:hover, :focus { 
background: #FFFFFF;
color:  #2F80ED;
}
`

const StyleOptionMemoria = styled.option`
cursor: pointer;
color: #FFFFFF;
background: #017849;
:hover, :focus { 
background: #FFFFFF;
color:  #2F80ED;
}
`

const StyleOptionInteligencia = styled.option`
cursor: pointer;
color: #FFFFFF;
background: #017849;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
:hover, :focus { 
background: #FFFFFF;
color:  #2F80ED;
}
`

export default {
    ContentSubTitleSucesso,
    ContentTitleSuccess,
    ContentEditorObs,
    SubTitleAppTeste,
    ButtonAddTeste,
    ModalAppTeste,
    ContentOptionsAdd,
    ContentStyleAdd,
    ContentStyleExpand,
    OptionDisable,
    ModalAppMemoria,
    ModalAppInteligencia,
    SubTitleCardContent,
    CardAtençao,
    LabelNome,
    InputNome,
    LabelNumeroDePontos,
    InputNumeroDePontos,
    LabelResultado,
    InputResultado,
    LabelObs,
    InputObs,
    AvaliaçaoSucessContent,
    StyleIconSuccess,
    StyleButtonOk,
    StyleOptionAtençao,
    StyleOptionMemoria,
    StyleOptionInteligencia,
}