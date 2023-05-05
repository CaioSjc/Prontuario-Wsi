import styled from 'styled-components'

const TitleCardDetalhes = styled.h2`
font-family: 'Comfortaa';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 27px;
color: #4F4F4F;
height: 48px;
width: 184px;
margin-left: 140px;
padding-top: 50px;
`

const ContentCardDetalhes = styled.div`
box-sizing: border-box;
width: 924px;
height: 401px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin-left: 138px;
margin-top: -12px;
`

const ContentText = styled.h3`
width: 881px;
height: 193px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #424242;
margin-left: 24px;
margin-top: 46px;
`

const Valor = styled.h4`
width: 31px;
height: 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #757575;
margin-left: 24px;
float: left;
`

const FormaPagamento = styled(Valor)`
margin-left: 100px;
white-space: pre;
`

const Status = styled(Valor)`
margin-left: 163px;
`

const ValorContent = styled.h3`
width: 57px;
height: 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #000000;
margin-left: 24px;
`

const EditStyleButton = styled.button`
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
margin-left: 828px;
margin-top: -50px;
cursor: pointer;
`

const DeleteStyleButton = styled.button`
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
border: 1px solid #EB5757;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
border-radius: 8px;
margin-left: 874px;
margin-top: -23px;
cursor: pointer;
`

export default {
    TitleCardDetalhes,
    ContentCardDetalhes,
    ContentText,
    Valor,
    FormaPagamento,
    Status,
    ValorContent,
    EditStyleButton,
    DeleteStyleButton,
}