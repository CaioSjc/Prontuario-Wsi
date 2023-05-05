import styled from 'styled-components'

export const ContentAnotaçoes = styled.div`
box-sizing: border-box;
width: 340px;
max-width: 340px;
height: 226px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin-top:16px;
margin-left: 92px;
`

export const ModalContentAnotaçoes = styled.div`
width: 642px;
height: 473px;
position: relative;
z-index: 2;
background-color: #fefefe;
margin-top: 54px;
margin-left: 22%;
padding: 20px;
border: 1px solid gray;
background: #FFFFFF;
border-radius: 8px;
.demo-wrapper{width: 10px;}
.demo-editor{
  box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 14px 30px 30px 14px;
gap: 10px;
width: 576px;
height: 240px;
background: #FFFFFF;
border: 1px solid rgba(66, 82, 110, 0.25);
box-shadow: inset 0px 1px 3px #DDDDDD;
border-radius: 10px;
margin-left: 32px;
}
.demo-toolbar{
border: none;
width: 570px;
margin-left: 32px;
}
`

export const ModalTitleAnotaçao = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
margin-left: 36px;
margin-top: 4px;
color: #00995D;
float: left;
`

export const ModalWindowAnotaçao = styled.div`
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

export const ModalBackgroundAnota = styled.div`
position: absolute;
inset: 0;
`

export const ContentIcons = styled.div`
margin-left: 266px;
`

export const ContentIconsCol1 = styled.div`
display: flex;
gap: 10px;
margin-left:-254px;
margin-top: 26px;
`

export const ContentIconsCol2 = styled(ContentIconsCol1)`
margin-left: -44px;
margin-top: -20px;
`

export const ContentIconsCol3 = styled(ContentIconsCol1)`
margin-left: 106px;
margin-top: -21px;
`

export const ContentIconsCol4 = styled(ContentIconsCol1)`
margin-left: 254px;
margin-top: -20px;
`

export const ContentText = styled.div``


export const Text = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 149.9%;
color: #212121;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 14px 30px 30px 14px;
width: 576px;
height: 240px;
background: #FFFFFF;
border: 1px solid rgba(66, 82, 110, 0.25);
box-shadow: inset 0px 1px 3px #DDDDDD;
border-radius: 10px;
margin-left: 10px;
margin-top: -5px;
`

export const StyleButtonsAnotaçao = styled.button`
border: none;
background: none;
cursor: pointer;
`

