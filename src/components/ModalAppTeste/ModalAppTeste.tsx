import T from '../../Styles/StyleAppTeste'
import s from '../../Styles/StyleContentServiço'
import Delete from '../../assets/IconServiço/Delete.svg'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ModalAppTeste = ({ isOpen, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <T.ModalAppTeste>
          <T.SubTitleCardContent>
            <T.CardAtençao>Atenção Concentrada/Seletiva</T.CardAtençao>
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
        </T.ModalAppTeste>
      )}
    </>
  )
}
export default ModalAppTeste
