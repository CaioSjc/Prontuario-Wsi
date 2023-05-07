import E from '../../Styles/StyleListPerguntas'
import Left from '../../assets/IconListPerguntas/left.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import D from '../../Styles/StyleDetalhesCard'
import { DataCardFato, TitleCardFato } from '@/Styles/StyleCardFatoRelevante'
import editDemanda from '../../assets/IconDemanda/editDemanda.svg'
import Delete from '../../assets/IconServiço/Delete.svg'

const DetalhesSessaoCard = () => {
  const Navigate = useNavigate()
  const { state } = useLocation()
  const { title, data, content, value, method, status } = state

  const dataFormatada = new Intl.DateTimeFormat('pt-Br', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(data))

  return (
    <>
      <E.ContentNavBar>
        <E.NavBarContent>
          <E.ButtonVoltar onClick={() => Navigate('/App')}>
            <img src={Left} />
            Voltar
          </E.ButtonVoltar>
        </E.NavBarContent>
        <D.TitleCardDetalhes>{title}</D.TitleCardDetalhes>
        <D.ContentCardDetalhes>
          <TitleCardFato style={{ marginTop: '24px' }}>Sessão 01</TitleCardFato>
          <DataCardFato>{dataFormatada}</DataCardFato>
          <E.Divisao2 style={{ marginLeft: '196px', marginTop: '-37px' }} />
          <DataCardFato style={{ marginLeft: '210px', marginTop: '-18px', float: 'left' }}>
            16:00h - 17:00h
          </DataCardFato>
          <D.EditStyleButton>
            <img src={editDemanda} />
          </D.EditStyleButton>
          <D.DeleteStyleButton>
            <img src={Delete} />
          </D.DeleteStyleButton>
          <D.ContentText>{content}</D.ContentText>
          <TitleCardFato style={{ marginTop: '-24px' }}>Pagamento</TitleCardFato>
          <D.Valor>Valor</D.Valor>
          <D.FormaPagamento>Forma de Pagamento</D.FormaPagamento>
          <D.Status>Status</D.Status>
          <D.ValorContent>R${value}</D.ValorContent>
          <D.ValorContent style={{ marginLeft: '155px' }}>{method}</D.ValorContent>
          <D.ValorContent style={{ marginLeft: '350px', marginTop: '-24px' }}>{status}</D.ValorContent>
        </D.ContentCardDetalhes>
      </E.ContentNavBar>
    </>
  )
}

export default DetalhesSessaoCard
