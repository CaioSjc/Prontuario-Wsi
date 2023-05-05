import styled from "styled-components"

const StyleContainerLogin = styled.div`
background: #E5E5E5;
margin: -8px;
height: 860px;
width: 101.2%;
`

const StyleLogoLogin = styled.img`
height: 809px;
width: 526px;
margin-top: -821.5px;
margin-left: -30px;
float: left;
`

const ContainerError = styled.div`
width: 376px;
background: yellow; 
color: #313131;
margin-top: 30px;
margin-left: 116px;
`

const ContainerEmailSenha = styled.div`
background: #017849;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
border-radius: 16px;
height: 608px;
width: 608px;
margin-left: 416px;
margin-top: -840px;
display: flex;
flex-direction: column;
`

const LogoCard = styled.img`
width: 321px;
height: 127px;
margin-left: 144.5px;
margin-top: 77.5px;
`

const LabelLogin = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
margin-top: 34px;
margin-left: 114.5px;
`
const LabelSenha = styled(LabelLogin)`
margin-top: 30px;
`

const InputLogin = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
height: 47px;
width: 379px;
margin-left: 114.5px;
`

const InputSenha = styled(InputLogin)`

`

const ButtonEntrar = styled.button`
box-sizing: border-box;
border: 1px solid #FFFFFF;
border-radius: 24px;
height: 48px;
width: 379px;
background: #017849;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
margin-top: 30px;
margin-left: 114px;
`

const BackgroundLoader = styled.div`
position: fixed;
background: rgba(0, 0, 0, 0.4);
top: 0;
left: 0;
width: 100%;
height: 100%;
`

export default {
   StyleContainerLogin,
   StyleLogoLogin,
   ContainerError,
   ContainerEmailSenha,
   LogoCard,
   LabelLogin,
   InputLogin,
   LabelSenha,
   InputSenha,
   ButtonEntrar,
   BackgroundLoader,
}