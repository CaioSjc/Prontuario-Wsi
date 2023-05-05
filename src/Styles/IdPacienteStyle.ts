import styled from 'styled-components'

const Content = styled.div`
box-sizing: border-box;
width: 340px;
max-width: 340px;
height: 350px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin-top: 24px;
margin-left: 92px;
`

const ContentDemanda = styled(Content)`
height: 226px;
margin-top: 16px;
`

const TitleId = styled.p`
width: 229px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #212121;
text-align: center;
white-space: pre;
margin-left: 29px;
`

const TitleIdMargin = styled(TitleId)`
margin-left: 13px;
`

const TitleIdMargin2 = styled(TitleId)`
margin-left: 0px;
`

const TitleIdCustom = styled(TitleId)`
margin-left: -50px;
margin-top: 34px;
`
const TitleIdCustom2 = styled(TitleIdCustom)`
margin-left: -6%;
font-size: 17px;
`

const Icon = styled.img`
width: 16px;
height: 16px;
float: left;
margin-left: 24px;
`

const StyleId = styled.h3`
width: 71px;
height: 27px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #00995D;
margin-left: 48px;
margin-top: -5px;
`

const DadosId = styled.p`
width: 151px;
height: 27px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #616161;
margin-left: 48px;
margin-top: -12px;
`

export default {
    Content,
    ContentDemanda,
    TitleId,
    TitleIdCustom,
    TitleIdCustom2,
    TitleIdMargin,
    TitleIdMargin2,
    Icon,
    DadosId,
    StyleId,
}