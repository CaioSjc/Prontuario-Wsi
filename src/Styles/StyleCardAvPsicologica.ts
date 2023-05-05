import styled from 'styled-components'

export const ContainerMessage = styled.div`
width: 578px;
height: 122px;
background: #C5F2E0;
border-radius: 8px;
margin-top: 134px;
margin-left: 19px;
`

export const Atençao = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
color: #00995D;
padding-top: 16px;
margin-left: 16px;
`

export const Message = styled.h5`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #212121;
margin-left: 16px;
margin-top: -16px;
`

export const ContentEntrevista = styled.div`
box-sizing: border-box;
border: 1px solid #E0E0E0;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
height: 55px;
width: 790px;
margin-left: 20px;
display: flex;
align-items: center;
`

export const ContentAppTeste = styled(ContentEntrevista)`
border-top-left-radius: 0px;
border-top-right-radius: 0px;;
`

export const ContentObsComportamental = styled(ContentEntrevista)`
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
`

export const TitleCardEntrevista = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #4F4F4F;
margin-left: 17px;
white-space: pre;
`

export const  ContentRealizado = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
width: 115px;
height: 36px;
background: #C5F2E0;
border-radius: 16px;
margin-left: 400px;
`

export const TitleRealizado = styled.h4`
width: 78px;
height: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #017849;
`

export const TitleEmitir = styled.h5`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
color: #4F4F4F;
margin-left: 20px;
margin-top: 16px;
`

export const ButtonLaudo = styled.button`
width: 165px;
height: 48px;
background: #F5F5F5;
border-radius: 8px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
justify-content: center;
color: #9E9E9E;
border: none;
margin-left: 20px;
margin-top: -16px;
float: left;
cursor: pointer;
`