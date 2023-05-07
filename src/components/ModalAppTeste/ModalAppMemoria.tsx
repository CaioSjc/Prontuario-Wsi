import T from '../../Styles/StyleAppTeste'
import s from '../../Styles/StyleContentServiço'
import Delete from '../../assets/IconServiço/Delete.svg'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ModalAppMemoria = ({ isOpen, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <T.ModalAppMemoria>
          <T.SubTitleCardContent>
            <T.CardAtençao>Memória</T.CardAtençao>
            <s.StyleDeleteAppTeste onClick={onClose}>
              <img src={Delete} />
            </s.StyleDeleteAppTeste>
          </T.SubTitleCardContent>
          <T.LabelNome>Nome</T.LabelNome>
          <T.InputNome type={'text'} />
          <T.LabelNumeroDePontos>Número de pontos</T.LabelNumeroDePontos>
          <T.InputNumeroDePontos type={'number'} />
          <T.LabelNumeroDePontos style={{ paddingLeft: '13px' }}>Percentil</T.LabelNumeroDePontos>
          <T.InputNumeroDePontos type={'number'} />
          <T.LabelResultado>Resultado</T.LabelResultado>
          <T.InputResultado />
          <T.LabelObs>Obs:</T.LabelObs>
          <T.InputObs type={'text'} placeholder={'Descrição da observação'} />
        </T.ModalAppMemoria>
      )}
    </>
  )
}
export default ModalAppMemoria
