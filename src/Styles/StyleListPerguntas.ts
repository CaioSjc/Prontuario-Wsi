import styled from "styled-components"

const ContentNavBar = styled.div`
margin-top: 108px;
position: relative;
`

const NavBarContent = styled.div`
width: 93.8%;
height: 48px;
background: #FFFFFF;
border-top-left-radius: 16px;
border-bottom-left-radius: 16px;
position: absolute;
top: -27px;
margin-left: 80px;
display: flex;
`

const ButtonVoltar = styled.button`
border: none;
background: #FFFFFF;
width: 112px;
border-top-left-radius: 16px;
border-bottom-left-radius: 16px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #4F4F4F;
margin-left: -0.6px;
cursor: pointer;
`
const Divisao = styled.div`
height: 20px;
width: 1px;
background: #4F4F4F;
margin-top: 14px;
`

const Divisao2 = styled(Divisao)`
margin-left: 20px;
`

const SubTitle = styled.h3`
width: 181px;
height: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #4F4F4F;
margin-left: 23px;
`

const ContentDataListPerguntas = styled.p`
width: 288px;
height: 135px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 170%;
color: #424242;
margin-left: -178px;
margin-top: 14px;
`

const TitleCustomList = styled.p`
width: 229px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 22px;
color: #212121;
margin-left: 23px;
margin-top: 15px;
`

const ContentListMargin = styled.div`
margin-top: -56px;
margin-left: 43%;
color: gray;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
`

const ContentListMarginApp = styled.div`
margin-top: -54px;
margin-left: 43%;
color: #017849;
width: 308.09px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
`

const ContentListMarginObs = styled(ContentListMarginApp)`
margin-top: -57px;
margin-left: 43%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #C5F2E0;
`

const ContentListMargin2 = styled.div`
margin-top: -56px;
margin-left: 72.5%;
color: gray;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
`

const ContentListMargin2Obs = styled(ContentListMargin2)`
width: 307.09px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #017849;
`

const ContentListSucessObs = styled(ContentListMargin2)`
color: #C5F2E0;
margin-top: -58px;
`

const ContentListImg = styled.div`
margin-top: -58px;
margin-left: 160px;
color: #017849;
width: 275.09px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
`

const ContentListImgApp = styled.div`
margin-top: -58px;
margin-left: 160px;
width: 275.09px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #C5F2E0;
`

const ContentImg = styled.img`
margin-top: 57px;
margin-left: 9%;
`

const ContentImg2 = styled.img`
margin-left: 38.5%;
margin-top: -47px;
`

const ContentImg3 = styled.img`
margin-left: 67.8%;
margin-top: -51px;
`

const ContentImg4 = styled.img`
margin-right: 16px;
`

const ContentSalvarPular = styled.div`
height: 75px;
width: 99.2%;
max-width: 1435px;
background: #FFFFFF;
margin-top: 64px;
white-space: pre;
border-radius: 16px;
border-left: solid 8px #00995D;
display: flex;
align-items: center;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

const ContentTitle = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #017849;
margin-left: 28px;
`

const ButtonSalvar = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px 0px 20px;
gap: 23px;
width: 182px;
height: 48px;
background: #00995D;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
border-radius: 24px;
color: #FFFFFF;
border: none;
margin-left: 38%;
cursor: pointer;
`

const ButtonSalvarMargin = styled(ButtonSalvar)`
margin-left: 510px;
`

const ButtonPular = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px 0px 24px;
gap: 13px;
width: 164px;
height: 48px;
border: 1px solid #00995D;
border-radius: 24px;
margin-left: 2%;
color: #00995D;
background: #FFFFFF;
cursor: pointer;
`

const ContentStyleList = styled.div`
width: 87.1%;
height: 7138px;
background: #FFFFFF;
border-radius: 16px;
margin-left: 9.2%;
margin-top: -2px;
`

const ContentStyleAppTeste = styled(ContentStyleList)`
height: 700px;
`

const ContentStyleObs = styled(ContentStyleList)`
height: 580px;
`

const ContentSubTitle = styled.h4`
width: 148px;
height: 17px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
color: #4F4F4F;
margin-left: 36px;
margin-top: 26px;
float: left;
white-space: pre;
`

const StyleQuestion = styled.img`
margin-left: 69.6%;
margin-top: 22px;
cursor: pointer;
`

const StyleTextArea = styled.textarea`
box-sizing: border-box;
width: 959px;
height: 149px;
background: #FFFFFF;
border: 1px solid #BDBDBD;
border-radius: 8px;
resize: none;
margin-left: 36px;
padding-left: 15px;
padding-top: 10px;
`

const TitleSessao = styled.h5`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #2D9CDB;
margin-left: 36px;
`

const TitleSessaoStyle = styled(TitleSessao)`
margin-top: 410px;
`

const TitleSessaoStyle2 = styled(TitleSessao)`
margin-top: 280px;
`

const TitleSessaoStyle3 = styled(TitleSessao)`
margin-top: 140px;
`

const TitleSessaoStyle4 = styled(TitleSessao)`
margin-top: 130px;
`

const StyleDivisao = styled.div`
width: 958px;
height: 1px;
background: #C4C4C4;
margin-left: 36px;
`

const StylePerguntas = styled.h5`
width: 414px;
height: 18.01px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #000000;
margin-left: 36px;
`

const StyleCheckbox = styled.input`
background:  #017849;
width: 20px;
height: 20px;
cursor: pointer;
margin-left: 36px;
float: left;
`

const StyleCheckboxMargin = styled(StyleCheckbox)`
margin-top: 10px;
`

const StyleCheckboxLateral = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -606px;
`

const StyleCheckboxLateral2 = styled(StyleCheckbox)`
margin-top: -574px;
margin-left: 498px;
`

const StyleCheckboxLateral3 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -370px;
`

const StyleCheckboxLateral4 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -338px;
`

const StyleCheckboxLateral5 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -258px;
`

const StyleCheckboxLateral6 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -226px;
`

const StyleCheckboxLateral7 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -313px;
`

const StyleCheckboxLateral8 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -281px;
`

const StyleCheckboxLateral9 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -234px;
`

const StyleCheckboxLateral10 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -380px;
`

const StyleCheckboxLateral11 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -350px;
`

const StyleCheckboxLateral12 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -599px;
`

const StyleCheckboxLateral13 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -567px;
`

const StyleCheckboxLateral14 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -354px;

`

const StyleCheckboxLateral15 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -322px;
`

const StyleCheckboxLateral16 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -200px;
`

const StyleCheckboxLateral17 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -1091px;
`

const StyleCheckboxLateral18 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -1057px;
`

const StyleCheckboxLateral19 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -845px;
`

const StyleCheckboxLateral20 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -812px;
`

const StyleCheckboxLateral21 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -110px;
`

const StyleCheckboxLateral22 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -77px;
`

const StyleCheckboxLateral23 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -613px;
`

const StyleCheckboxLateral24 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -580px;
`

const StyleCheckboxLateral25 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -120px;
`

const StyleCheckboxLateral26 = styled(StyleCheckbox)`
margin-left: 498px;
margin-top: -90px;
`


const StylePerguntasMargin = styled(StylePerguntas)`
margin-left: 554px;
margin-top: -806px;
`

const StylePerguntasMargin2 = styled(StylePerguntas)`
margin-left: 554px;
`

const StylePerguntasMargin3 = styled(StylePerguntas)`
margin-left: 554px;
margin-top: -638px;
`

const StylePerguntasMargin4 = styled(StylePerguntas)`
margin-left: 554px;
margin-top: -570px;
`

const StylePerguntasMargin5 = styled(StylePerguntas)`
margin-left: 554px;
margin-top: -675px;
`

const StylePerguntasMargin6 = styled(StylePerguntas)`
margin-left: 554px;
margin-top: -1413px;
`

const StylePerguntasMargin7 = styled(StylePerguntas)`
margin-left: 554px;
margin-top: -963px;
`

const StyleLabel = styled.label`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #303030;
height: 17px;
width: 28px;
cursor: pointer;
display: flex;
padding-left: 8px;
padding-top: 3px;
white-space: pre;
`

const StyleLabelMargin = styled(StyleLabel)`
margin-top: 10px;
`

const StyleLabelLateral = styled(StyleLabel)`
margin-left: 576px;
margin-top: 28px;
`

const StyleLabelLateral2 = styled(StyleLabel)`
margin-left: 576px;
margin-top: 12px;
`

const StyleLabelLateral3 = styled(StyleLabel)`
margin-left: 576px;
margin-top: -5px;
`

const StyleLabelLateral4 = styled(StyleLabel)`
margin-left: 576px;
margin-top: 12px;
`

const InputResposta = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 2px 2px 2px 8px;
width: 438px;
height: 59px;
background: #FFFFFF;
border: 1px solid #868686;
border-radius: 16px;
margin-left: 36px;
`

const InputRespostaMargin = styled(InputResposta)`
margin-left: 554px;
`

const InputRespostaMargin2 = styled(InputResposta)`
margin-top: 50px;
`

const InputRespostaMargin3 = styled(InputResposta)`
margin-left: 554px;
`

const ButtonSalvarList = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px 0px 20px;
gap: 23px;
width: 200px;
height: 48px;
background: #00995D;
border-radius: 24px;
border: none;
margin-top: 160px;
margin-left: 36px;
color: #FFFFFF;
float: left;
cursor: pointer;
`

const ButtonPularList = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px 0px 24px;
gap: 13px;
width: 164px;
height: 48px;
border: 1px solid #00995D;
border-radius: 24px;
margin-left: 300px;
margin-top: 162px;
background: #FFFFFF;
color: #00995D;
cursor: pointer;
`

const HeaderStyleSucess = styled.div`
position: absolute;
height: 73px;
width: 40px;
background: #E5E5E5;
margin-left: 1250px;
margin-top: -49px;
`

export default {
    ContentNavBar,
    NavBarContent,
    ButtonVoltar,
    Divisao,
    Divisao2,
    SubTitle,
    ContentDataListPerguntas,
    TitleCustomList,
    ContentListImg,
    ContentListImgApp,
    ContentListMargin,
    ContentListMarginApp,
    ContentListMargin2,
    ContentListMargin2Obs,
    ContentListMarginObs,
    ContentImg,
    ContentImg2,
    ContentImg3,
    ContentImg4,
    ContentSalvarPular,
    ContentTitle,
    ButtonSalvar,
    ButtonSalvarMargin,
    ButtonPular,
    ContentStyleList,
    ContentStyleAppTeste,
    ContentStyleObs,
    ContentSubTitle,
    StyleQuestion,
    StyleTextArea,
    TitleSessao,
    TitleSessaoStyle,
    TitleSessaoStyle2,
    TitleSessaoStyle3,
    TitleSessaoStyle4,
    StyleDivisao,
    StylePerguntas,
    StylePerguntasMargin,
    StylePerguntasMargin2,
    StylePerguntasMargin3,
    StylePerguntasMargin4,
    StylePerguntasMargin5,
    StylePerguntasMargin6,
    StylePerguntasMargin7,
    StyleCheckbox,
    StyleLabel,
    StyleCheckboxMargin,
    StyleLabelMargin,
    StyleLabelLateral2,
    StyleLabelLateral3,
    StyleLabelLateral4,
    InputResposta,
    StyleCheckboxLateral,
    StyleCheckboxLateral2,
    StyleCheckboxLateral3,
    StyleCheckboxLateral4,
    StyleCheckboxLateral5,
    StyleCheckboxLateral6,
    StyleCheckboxLateral7,
    StyleCheckboxLateral8,
    StyleCheckboxLateral9,
    StyleCheckboxLateral10,
    StyleCheckboxLateral11,
    StyleCheckboxLateral12,
    StyleCheckboxLateral13,
    StyleCheckboxLateral14,
    StyleCheckboxLateral15,
    StyleCheckboxLateral16,
    StyleCheckboxLateral17, 
    StyleCheckboxLateral18,
    StyleCheckboxLateral19,
    StyleCheckboxLateral20,
    StyleCheckboxLateral21,
    StyleCheckboxLateral22,
    StyleCheckboxLateral23,
    StyleCheckboxLateral24,
    StyleCheckboxLateral25,
    StyleCheckboxLateral26,          
    InputRespostaMargin,
    InputRespostaMargin2,
    InputRespostaMargin3,
    StyleLabelLateral,
    ButtonSalvarList,
    ButtonPularList,
    HeaderStyleSucess,
    ContentListSucessObs,
}