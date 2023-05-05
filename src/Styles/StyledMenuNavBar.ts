import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: #E5E5E5;
        margin: 0;
        padding: 0;
}
`

export const StyleLogos = styled.div`
width: 80px;
height: 80.75px;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: fixed;
margin-top: -108px;
`

export const StyleLogosMargin = styled(StyleLogos)`
margin-top: -1px;
`

export const StyleLogo = styled.img`
width: 28.85px;
height: 44.33px;
`

export const StyleMenu = styled.div`
width: 80px;
height: 1122px;
background: #00995D;
top: 80px;
display: flex;
flex-direction: column;
align-items: center;
float: left;
gap: 40px;
position: fixed;
`


export const StyleMask = styled.img`
width: 20px;
height: 20px;
margin-top: 40px;
position: fixed;
`
export const StyleVector = styled.img`
width: 20px;
height: 20px;
margin-top: 100px;
position: fixed;
`

export const StyleAdd = styled.img`
width: 20px;
height: 20px;
margin-top: 160px;
position: fixed;
`

export const StylePath = styled.img`
width: 20px;
height: 20px;
margin-top: 220px;
position: fixed;
`

export const StyleContentPerfil = styled.div`
width: 100%;
max-width: 1435px;
height: 80px;
background: #FFFFFF;
margin-left: 80px;
margin-top: -108px;
position: fixed;
z-index: 2;
display: flex;
align-items: center;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

export const StyleContentPerfilMargin = styled(StyleContentPerfil)`
margin-top: 0px;
`

export const StylePerfilCliente = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 29px;
color: #017849;
margin-left: 62%;
`

export const StyleButtonMenu = styled.button`
border: none;
background: #FFFFFF;
margin-left: 27.5px;
`

export const ButtonMenu = styled.img`
width: 20px;
height: 20px;
cursor: pointer;
`

export const StyleExpand = styled.img`
width: 24px;
height: 24px;
`

export const StyledExpand2 = styled(StyleExpand)`

`

export const StyleInputPesquisa = styled.input`
width: 100%;
border: solid 1px #e0e0e0;
border-radius: 8px;
height: 48px;
padding-left: 16px;
`

export const StyleButtonDados = styled.button`
background: none;
color: #e0e0e0;
height: 51px;
border: 0;
border-right: 1px solid #f2f2f2;
border-bottom: 1px solid #f2f2f2;
text-align: center;
width: 220px;
`

export const StyleButtonPront = styled(StyleButtonDados)`
color: #017849;
border-bottom: 2px solid #017849;
`

export const StyleButtonsPesquisa = styled.div`
width: 478px;
height: 2px;
background: #017849;
display: flex;
align-content: space-around;
`

export const StyleGrid = styled.div`
background: #FFFFFF;
border-radius: 8px;
padding: 10px 24px;
margin-top: 108px;
width: 88.3%;
display: flex;
align-items: center;
margin-left: 7.2%;
max-width: 1435px;
`

export const StyleLupa = styled.img`
position: absolute;
right: 17px;
top: 50%;
transform: translateY(-50%);
width: 20px;
height: 20px;
cursor: pointer;
`

export const StylePesquisa = styled.div`
margin-left: auto;
max-width: 385px;
width: 100%;
position: relative;
`

export default GlobalStyle