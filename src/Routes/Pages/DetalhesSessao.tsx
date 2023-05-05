import E from '../../Styles/StyleListPerguntas'
import Left from '../../assets/IconListPerguntas/left.svg'
import { useNavigate } from "react-router-dom"
import D from '../../Styles/StyleDetalhesCard'
import { DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import editDemanda from '../../assets/IconDemanda/editDemanda.svg'
import Delete from '../../assets/IconServiço/Delete.svg'
 

const DetalhesSessaoCard = () => {
    const Navigate = useNavigate()
 
    return (
      <>      
        <E.ContentNavBar>
          <E.NavBarContent>
            <E.ButtonVoltar onClick={() => Navigate('/App')} >
              <img src={Left} />
              Voltar
            </E.ButtonVoltar>  
          </E.NavBarContent>
          <D.TitleCardDetalhes>Sessão</D.TitleCardDetalhes>
          <D.ContentCardDetalhes>
          <TitleCardFato style={{marginTop:'24px'}} >Sessão 01</TitleCardFato>
                <DataCardFato>15 de setembro de 2022</DataCardFato><E.Divisao2 style={{marginLeft:'196px', marginTop:'-37px'}} /><DataCardFato style={{marginLeft:'210px', marginTop:'-18px', float: 'left'}} >16:00h - 17:00h</DataCardFato><D.EditStyleButton><img src={editDemanda}/></D.EditStyleButton><D.DeleteStyleButton><img src={Delete}/></D.DeleteStyleButton>
                <D.ContentText> A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante da forma como reagiu com as pessoas. Relatou também que muitas das pessoas que são próximas a ela a julgam por seus comportamentos, o que a deixa desconfortável e ainda mais ansiosa. A paciente comentou que chora com muita frequência, fica com medo em extremo diante de situações muito desafiadoras e entra em pânico.</D.ContentText>
                <TitleCardFato style={{marginTop:'-24px'}}>Pagamento</TitleCardFato>
                <D.Valor>Valor</D.Valor>
                <D.FormaPagamento>Forma de Pagamento</D.FormaPagamento>
                <D.Status>Status</D.Status>
                <D.ValorContent>R$200,00</D.ValorContent>
                <D.ValorContent style={{marginLeft:'155px'}} >Pix</D.ValorContent>
                <D.ValorContent style={{marginLeft:'350px', marginTop:'-24px'}} >Pago</D.ValorContent>
          </D.ContentCardDetalhes>
        </E.ContentNavBar>                   
      </>
    )
  }
  
  export default DetalhesSessaoCard