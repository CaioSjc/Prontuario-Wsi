import styled from 'styled-components'

const EditDemanda = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 8px;
gap: 10px;
width: 32px;
height: 24px;
background: #FFFFFF;
border: 1px solid #017849;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
border-radius: 8px;
margin-left: 291px;
margin-top: -40px;
cursor: pointer;
`

const EditServiço = styled(EditDemanda)`
margin-left: -23%;
margin-right: 9.6%;
margin-top: 34px;
`

const ContentEdit = styled.p`
width: 288px;
height: 135px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #424242;
margin-left: 24px;
`

const ContentEditCustom = styled(ContentEdit)`
margin-left: -60px;
margin-top: 34px;
font-size: 15px;
`

const ModalWindowDemandas = styled.div`
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

const ModalBackgroundDemandas = styled.div`
position: absolute;
inset: 0;
`

const ModalContentDemandas = styled.div`
  position: relative;
  z-index: 2;
  background-color: #fefefe;
  margin-top: 30px;
  margin-left: 31%;
  padding: 20px;
  border: 1px solid gray;
  background: #FFFFFF;
  border-radius: 8px;
  width: 444px;
  height: 600px;
`

const TitleDemanda = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #00995D;
margin-left: 12px;
margin-top: 6px;
float: left;
`

const TitlePaciente = styled.label`
width: 71px;
height: 27px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #00995D;
margin-top: 0px;
margin-left: 13px;
display: flex;
flex-direction: column;
`

const TitleCpf = styled(TitlePaciente)`
margin-top: 13px;
`

const Paciente = styled.span`
width: 173px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #616161;
margin-left: 12px;
`

const DataInicial = styled.label`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
color: #4F4F4F;
margin-left: 13px;
margin-top: 25px;
`

const InputDataInicial = styled.input`
width: 379.04px;
height: 47.92px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
margin-left: 13px;
`

const InputServiço = styled.select`
width: 379.04px;
height: 47.92px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
margin-left: 13px;
`

const InputTextArea = styled.textarea`
box-sizing: border-box;
width: 379px;
height: 115px;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
resize: none;
margin-left: 13px;
margin-top: 12px;
`

const ButtonSalvar = styled.button`
width: 379px;
height: 48px;
background: #00995D;
border-radius: 24px;
color: #FFFFFF;
border: none;
margin-top: 23px;
margin-left: 13px;
`

export default {
    EditDemanda,
    EditServiço,
    ContentEdit,
    ContentEditCustom,
    ModalWindowDemandas,
    ModalBackgroundDemandas,
    ModalContentDemandas,
    TitleDemanda,
    TitlePaciente,
    Paciente,
    TitleCpf,
    DataInicial,
    InputDataInicial,
    InputServiço,
    InputTextArea,
    ButtonSalvar,
}
