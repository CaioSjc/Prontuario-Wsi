import styled from 'styled-components'


const StyleContentSessao = styled.div`
box-sizing: border-box;
width: 64.5%;
max-width: 1435px;
height: 210px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-left: 4px solid  #00995D; 
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 0px 8px 8px 0px;
margin-left: 450px;
margin-top: 25px;
position: relative;
h4{
    word-wrap:normal;
    width: 97%;
}
`

const StyleDiv = styled.div`
width: 2px;
height: 25px;
background: #2F80ED;
margin-left: 497px;
`

const StyleDiv2 = styled(StyleDiv)`
background: #9D28AC;
`

const StyleDiv3 = styled(StyleDiv)`
background: #EA1E61;
`

const StyleContentIcon = styled.div`
width: 48px;
height: 48px;
background: #00995D;
margin-top: -26px;
margin-left: 20px;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
`

const StyleContentFatoRelevante = styled(StyleContentSessao)`
margin-top: 25px;
height: 146px;
border-left: 4px solid  #2F80ED; 
`

const StyleIconFatoRelevante = styled(StyleContentIcon)`
background: #2F80ED;
`

const StyleContentAnexo = styled(StyleContentSessao)`
margin-top: 25px;
height: 281px;
border-left: 4px solid #9D28AC;
`

const StyleIconAnexo = styled(StyleContentIcon)`
background: #9D28AC;
`

const StyleContentAvPsicológica = styled(StyleContentSessao)`
margin-top: 25px;
height: 353px;
border-left: 4px solid #EA1E61;
`

const StyleIconAvPsicológica = styled(StyleContentIcon)`
background: #EA1E61;
`


const  Span = styled.span`
color: blue;
cursor: pointer;
`
const ButtonOptionsCard = styled.button`
margin-left: 792px;
position: absolute;
top: 0;
border: none;
background: #FFFFFF;
cursor: pointer;
`

const ButtonMaisDetalhes = styled.button`
width: 116px;
height: 16px;
font-size: 14px;
margin-left: 708px;
margin-top: 100px;
border: none;
background: #C5F2E0;
color: #00995D;
cursor: pointer;
:hover, :focus { 
background: #00995D;
color:  #FFFFFF;
}
`

const TextCardSessao = styled.h4`
width: 881px;
height: 79px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 170%;
color: #424242;
margin-top: -130px;
padding-left: 22px;
`

const SpanMessageObrigatorio = styled.span`
background: #C5F2E0;
margin-left: 18px;
text-align: center;
color: red;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
`

const SpanMessageFato = styled(SpanMessageObrigatorio)`
width: 156px;
height: 16px;
position: relative;
top: 116px;
right: 354px;
`

const SpanMessageFatoTitle = styled(SpanMessageObrigatorio)`
margin-left: 238px;
`

const SpanMessageFatoDescriçao = styled(SpanMessageObrigatorio)``

export default {
    Span,
    StyleContentSessao,
    StyleContentIcon,
    StyleContentFatoRelevante,
    StyleIconFatoRelevante,
    StyleContentAnexo,
    StyleIconAnexo,
    StyleContentAvPsicológica,
    StyleIconAvPsicológica,
    StyleDiv,
    StyleDiv2,
    StyleDiv3,
    ButtonOptionsCard,
    ButtonMaisDetalhes,
    TextCardSessao,
    SpanMessageObrigatorio,
    SpanMessageFato,
    SpanMessageFatoTitle,
    SpanMessageFatoDescriçao,
}
