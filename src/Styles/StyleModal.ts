import styled from "styled-components"

export const ModalWindow = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
`


export const ModalContent = styled.div`
  position: relative;
  z-index: 2;
  background-color: #fefefe;
  margin-top: 54px;
  margin-left: 22%;
  padding: 20px;
  border: 1px solid gray;
  width: 674px;
  max-width: 1435px;
  height: 580px;
  background: #FFFFFF;
  border-radius: 8px;
`

export const ModalOptions = styled(ModalContent)`
width: 152px;
height: 152px;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px 0px 8px 8px;
margin-left: 624px;
margin-top: -148px;
z-index: 0;
`

export const ModalOptionsMargin = styled(ModalOptions)`
margin-top: -88px;
z-index: 1;
`

export const ModalOptionsMarginAv = styled(ModalOptions)`
margin-top: -226px;
z-index: 1;
`

export const ModalContentFato = styled(ModalContent)`
height: 502px;
width: 49%;
margin-top: 0px;
margin-left: 24%;
`

export const ModalContentAnexos = styled(ModalContentFato)`
height: 590px;
width: 642px;
`

export const ModalContentAv = styled(ModalContentAnexos)`
height: 446px;
`

export const CloseButton = styled.button`
  color: gray;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  background: none;
  border: none;
  margin-top: 11px;
  margin-left: 69%;
`

export const CloseButtonFatoRelevante = styled(CloseButton)`
margin-left: 67%;
`

export const CloseButtonAnexo = styled(CloseButtonFatoRelevante)``

export const CloseButtonAnotaçao = styled(CloseButton)`
margin-left: 47%;
margin-top: 0px;
`

export const CloseButtonDemanda = styled(CloseButton)`
margin-left: 50%;
margin-top: 6px;

`

export const ModalBackground = styled.div`
position: absolute;
inset: 0;
`

export const ModalNovaSessao = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #00995D;
width: 157px;
height: 29px;
float: left;
margin-top: 14px;
margin-left: 18px;
`

export const CloseIconModal = styled.img``

export const ModalFatoRelevante = styled(ModalNovaSessao)`
white-space: pre;
`

export const ModalAnexo = styled(ModalNovaSessao)``

export const ModalAvPsicologica = styled(ModalNovaSessao)`
white-space: pre;
`

export const StyleContentText = styled.div`
width: 32px;
height: 32px;
background: #00995D;
border-radius: 50px;
margin-top: 24px;
margin-left: 3%;
display: flex;
align-items: center;
justify-content: center;
`

export const ContentText = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;
`

export const StyleContentDados = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #212121;
margin-top: -27px;
margin-left: 60px;
`

export const StyleForm = styled.div`
display: flex;
flex-direction: column;
float: left;
`
export const StyleFormFatoRelevante = styled(StyleForm)`
float: none;
`

export const StyleForm2 = styled.div`
float: none;
`

export const StyleFormTextArea= styled.div`
display: flex;
flex-direction: column;
margin-right: -54px;
`

export const LabelData = styled.label`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
margin-top: 16px;
margin-left: 16px;
`

export const InputData = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
height: 48px;
width: 182px;
display: flex;
flex-direction: row;
margin-left: 16px;
`

export const LabelDataFatoRelevante = styled(LabelData)`
margin-left: -154px;
margin-top: 33px;
`

export const SpanAnexarArquivos = styled(LabelData)`
margin-top: 16px;
white-space: pre;
margin-left: 19px;
`

export const LabelAnexarArquivos = styled.label`
padding: 8px;
width: 135px;
height: 34px;
background: #2F80ED;
border-radius: 8px;
white-space: pre;
display: flex;
align-items: center;
margin-top: 20px;
margin-left: -107px;
cursor: pointer;
`

export const InputAnexarArquivo = styled.input`
width: 523px;
height: 18px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
margin-left:-115.8px;
color: #616161;
z-index: -4;
margin-top: 16px; 
`

export const ButtonLimpar = styled.button`
border: none;
background: #FFFFFF;
margin-right: 23.3%;
margin-top: 25px;
cursor: pointer;
`

export const ContentInputFile = styled.div`
width: 382px;
height: 18px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
letter-spacing: 0.2px;
color: #FFFFFF;
flex: none;
order: 1;
flex-grow: 0;
margin-top: 20px;
margin-left: 126px;
`

export const InputDataFatoRelevante = styled(InputData)`
margin-left: -85%;
`

export const LabelHoraInicio = styled(LabelData)``

export const InputHoraInicio = styled(InputData)``

export const LabelHoraFim = styled(LabelHoraInicio)``

export const InputHoraFim = styled(InputHoraInicio)``

export const LabelTitulo = styled(LabelData)``

export const InputTitulo = styled(InputData)`
width: 578px;
flex: none;
order: 1;
flex-grow: 0;
`
export const LabelResumoSessao = styled.label`
width: 282px;
height: 17px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
margin-left: 16px;
margin-top: 16px;
`

export const InputResumoSessao = styled.textarea`
box-sizing: border-box;
width: 578px;
height: 153px;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
margin-left: 16px;
resize: none;
`

export const LabelValor = styled(LabelData)``

export const InputValor = styled(InputData)`
cursor: pointer;
`

export const LabelFormaPagamento = styled(LabelHoraFim)``

export const InputFormaPagamento = styled.select`
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
height: 48px;
width: 182px;
display: flex;
flex-direction: row;
margin-left: 16px;
cursor: pointer;
`

export const CheckBoxPago = styled.input.attrs({type: 'checkbox'})`
cursor: pointer;
position: absolute;
opacity: 0;
height: 0;
width: 0;
&:checked ~ div:after{display: block;}
`

export const CheckMark = styled.div`
border-radius: 6px;
background: #FFFFFF;
border: solid 1px #00995D;
position: absolute;

right: 106%;
width: 24px;
height: 24px;
&:after{
  content: '';
  position: absolute;
  display: none;
  left: 7px;
  top: 1px;
  width: 8px;
  height: 15px;
  border: solid white;
  border-width: 0px 3px 3px 0px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`

export const LabelPago = styled.label`
position: relative;
left: 13%;
top: 46px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #000000;
cursor: pointer;
display: flex;
align-items: center;
&:hover input ~ ${CheckMark}{background: #F2F2F2;}
input:checked ~ ${CheckMark}{background-color: #00995D;}
`


export const StyleHr = styled.hr`
width: 578px;
height: 1.5px;
background: #EEEEEE;
margin-top: 120px;
margin-right: 52px;
`

export const StyleHr2 = styled(StyleHr)`
margin-top: 24px;
margin-left: 16px;
`

export const Scroll = styled.div`
display: block;
width: 664px;
height: 451px;
overflow-x: scroll;
`

export const StyleCancelaCria = styled.div`
width: 713px;
height: 97px;
background: #FFFFFF;
margin-top: -17px;
margin-left: -2.9%;
border-top: 3px solid #EEEEEE;
display: flex;
align-items: center;
`

export const StyleContentIconDica = styled.img`
margin-top: 86px;
margin-left:-58%;
float: left;
`

export const StyleContentDica = styled.h4`
margin-left: 9%;
margin-top: 80px;
`

export const StyleCampoObrigatório = styled.h5`
width: 161px;
height: 20px;
font-family: 'Poppins';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 140%;
letter-spacing: 0.2px;
color: #616161;
white-space: pre;
margin-left: 32px;
`

export const StyleButtonCancela = styled.button`
font-family: 'Comfortaa';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #616161;
margin-left: 230px;
border: none;
background: #FFFFFF;
cursor: pointer;
`

export const ButtonCancela = styled(StyleButtonCancela)`
margin-left: 28%;
`

export const ButtonCancelaAv = styled(ButtonCancela)`
margin-left: 150px;
`

export const StyleButtonCriar = styled.button`
background: #00995D;
color: #FFFFFF;
border-radius: 24px;
border: none;
width: 147px;
height: 48px;
position: absolute;
top:550px;
left: 75%;
cursor: pointer;
`

export const StyleEditOptions = styled.img`

`

export const StyleEditar = styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #2F80ED;
height: 26px;
width: 104px;
margin-left: 8px;
margin-top: 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
border: none;
background: #FFFFFF;
cursor: pointer;

:hover, :focus { 
background:  #C5F2E0;
color: #2F80ED;
}
`

export const StyleExcluir = styled(StyleEditar)`
color: #EB5757;
margin-top: 26px;
:hover, :focus { 
color:  #EB5757;
}
`

export const StyleExportar = styled(StyleEditar)`
color:  #00995D;
margin-top: 26px;
margin-left: 17px;
:hover, :focus { 
color:  #00995D;
}
`