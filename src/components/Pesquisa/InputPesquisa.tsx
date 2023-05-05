import { StyleButtonDados, StyleButtonPront, StyleGrid, StyleInputPesquisa, StyleLupa, StylePesquisa } from '@/Styles/StyledMenuNavBar'
import Lupa from '../../assets/IconsMenuHeader/Lupa.svg'

function Pesquisa() {
  return (
    <>

<StyleGrid>  
        <StyleButtonDados>Dados Cadastrais</StyleButtonDados>
        <StyleButtonPront>Prontuário</StyleButtonPront>
        <StylePesquisa>
          <StyleInputPesquisa placeholder="O que você está procurando?"></StyleInputPesquisa>
          <StyleLupa src={Lupa}/>
        </StylePesquisa>      
      </StyleGrid>
    </>

  )
}

export default Pesquisa