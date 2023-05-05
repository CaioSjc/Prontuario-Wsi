import  S from '../../Styles/IdPacienteStyle'

type Props = {
    label: string
    value: string
  }
  
const Label = ({label, value }: Props) => {
    return ( 
      <>                 
          <S.StyleId>{label}</S.StyleId>
          <S.DadosId>{value}</S.DadosId> 
      </>
    )
  }

  export default Label