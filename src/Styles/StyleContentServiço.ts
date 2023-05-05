import styled from 'styled-components'

const ContentServiço = styled.div`
box-sizing: border-box;
width: 64.5%;
max-width: 1435px;
height: 176px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin-left: 450px;
margin-top: -833px;
display: flex;
`

const StyleInput = styled.select`
box-sizing: border-box;
width: 50%;
height: 48px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 8px;
margin-left: -78px;
margin-top: 24px;
cursor: pointer;
`

const StyleButtonDelete = styled.button`
box-sizing: border-box;
padding: 4px 8px;
width: 32px;
height: 24px;
background: #FFFFFF;
border: 1px solid #EB5757;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
border-radius: 8px;
margin-top: 34px;
margin-left: -70px;
margin-right: 26px;
cursor: pointer;
`

const StyleDeleteAppTeste = styled(StyleButtonDelete)`
margin-left: 200px;
margin-top: 16px;
`

const StyleHr = styled.hr`
width: 92%;
height: 1px;
background: #E0E0E0;
margin-top: 96px;
margin-left: -791px;
`

const StyleHr2 = styled(StyleHr)`
margin-top: 25px;
margin-left: 452px;
width: 52%;

`

const StyleButtonSessao = styled.button`
width: 98px;
height: 32px;
margin-left: -808px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
gap: 11px;
border: none;
cursor: pointer;
:hover, :focus{
    background: #F5F5F5;
    width: 98px;
    height: 40px;
    border-radius: 8px;
}
`

const StyleButtonFatoRelevante = styled.button`
width: 161px;
height: 32px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
gap: 11px;
border: none;
cursor: pointer;
margin-left: 5.8vw;
:hover, :focus{
    background: #F5F5F5;
    width: 161px;
    height: 40px;
    border-radius: 8px;
}
`

const StyleButtonAnexo = styled.button`
width: 93px;
height: 32px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
gap: 11px;
border: none;
cursor: pointer;
margin-left: 5.8vw;
:hover, :focus{
    background: #F5F5F5;
    width: 93px;
    height: 40px;
    border-radius: 8px;
}
`

const StyleButtonAvaliaçao = styled.button`
width: 221px;
height: 32px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
gap: 11px;
border: none;
cursor: pointer;
margin-left: 5.8vw;
:hover, :focus{
    background: #F5F5F5;
    width: 214px;
    height: 40px;
    border-radius: 8px;
}
`

const StyleContent = styled.div`
margin-top: 121px;
float: left;
display: flex;
`

const StyleIcons = styled.img`
width: 25px;
height: 25px;
`

const StyleContentFiltro = styled.p`
width: 119px;
height: 17px;
margin-left: 87.8%;
margin-top: -19px;
color: #757575;
`

const StyleOptionsFiltro = styled.option`
width: 119px;
height: 17px;
margin-left: 93.6%;
margin-top: -32px;
`

const ContentStyleIcon = styled.div`
margin-left: 97%;
margin-top: -22px;
`

const StyleButtonFiltro = styled.button`
border: none;
background: #E5E5E5;
cursor: pointer;
`

export default {
    ContentServiço,
    StyleInput,
    StyleButtonDelete,
    StyleDeleteAppTeste,
    StyleHr,
    StyleHr2,
    StyleButtonSessao,
    StyleContent,
    StyleButtonFatoRelevante,
    StyleButtonAnexo,
    StyleButtonAvaliaçao,
    StyleIcons,
    StyleContentFiltro,
    StyleOptionsFiltro,
    ContentStyleIcon,
    StyleButtonFiltro,
}