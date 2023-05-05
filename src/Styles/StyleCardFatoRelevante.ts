import styled from "styled-components"
import { ButtonCancela } from "./StyleModal"

export const LabelTituloFatoRelevante = styled.label`
margin-left: -43%;
margin-top: 33px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
`

export const InputTituloFatoRelevante = styled.input`
box-sizing: border-box;
width: 136.5%;
height: 48px;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
margin-left: -43%;
`

export const LabelDescriçaoFatoRelevante = styled.label`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
margin-top: 14px;
margin-left: 3%;
`

export const InputDescriçaoFatoRelevante = styled.textarea`
resize: none;
box-sizing: border-box;
width: 94.5%;
height: 153px;
border: 1px solid #BDBDBD;
border-radius: 8px;
margin-top: 12px;
margin-left: 3%;
`

export const ContentCancelaCriaFato = styled.div`
width: 106%;
height: 97px;
margin-left: -2.9%;
border-top: 3px solid #EEEEEE;
display: flex;
align-items: center;
margin-top: 24px;
`

export const ContentCancelaCriaAnexo = styled(ContentCancelaCriaFato)`
margin-top: 48px;
`

export const CancelaCriaAvPsicologica = styled(ContentCancelaCriaAnexo)`
margin-top: 57px;
`

export const ContentCriaFato = styled.button`
background: #00995D;
border-radius: 24px;
height: 48px;
width: 147px;
color: #FFFFFF;
border: none;
margin-left: 5%;
cursor: pointer;
`

export const ContentCriaAnotaçao = styled(ContentCriaFato)`
margin-left: 40px;
margin-bottom: 12px;
`

export const ButtonCancelaAnotaçao = styled(ButtonCancela)`
margin-left: 360px;
`

export const ProsseguirAvPsicologica = styled(ContentCriaFato)`
width: 183px;
`

export const TitleCardFato = styled.h2`
width: 128px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
margin-left: 20px;
margin-top: 4px;
white-space: pre;
`

export const DataCardFato = styled.h4`
width: 165px;
height: 17px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #616161;
margin-left: 20px;
margin-top: -12px;
`

export const ContentCardFato = styled.h3`
width: 765px;
height: 25px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #424242;
margin-left: 20px;
margin-top: -14px;
`