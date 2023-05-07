import {
  ModalContentFato,
  CloseButtonFatoRelevante,
  CloseIconModal,
  ModalBackground,
  ModalFatoRelevante,
  ModalWindow,
  StyleForm,
  LabelDataFatoRelevante,
  InputDataFatoRelevante,
  StyleFormFatoRelevante,
  StyleCampoObrigatório,
  ButtonCancela
} from '../../Styles/StyleModal'
import {
  ContentCancelaCriaFato,
  ContentCriaFato,
  InputDescriçaoFatoRelevante,
  InputTituloFatoRelevante,
  LabelDescriçaoFatoRelevante,
  LabelTituloFatoRelevante
} from '../../Styles/StyleCardFatoRelevante'
import Close from '../../assets/IconModalClose/close.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaFato } from '../../Utils/TesteFatoRelevante'
import { FormValuesFato, defaultValues } from '../FormsContent/FormFatoRelevante'
import C from '../../Styles/StyleSessãoCard'

type ModalPropsFatos = {
  isOpen: boolean
  onClose: () => void
}

const ModalContentFatoRelevante = ({ isOpen, onClose }: ModalPropsFatos) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaFato),
    defaultValues
  })
  console.log(errors)
  
  const onSubmit = (data: Partial<FormValuesFato>) => {
    onClose()
    console.log(data)
  }

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <ModalBackground onClick={onClose} />
          <ModalContentFato>
            <ModalFatoRelevante>Novo Fato Relevante</ModalFatoRelevante>
            <CloseButtonFatoRelevante onClick={onClose}>
              <CloseIconModal src={Close} />
            </CloseButtonFatoRelevante>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyleForm>
                <LabelDataFatoRelevante style={{ marginTop: '51px' }}>Data*</LabelDataFatoRelevante>
                <InputDataFatoRelevante type={'date'} {...register('data')} />
              </StyleForm>
              <C.SpanMessageFato>{errors.data?.message}</C.SpanMessageFato>
              <StyleFormFatoRelevante>
                <LabelTituloFatoRelevante>Título*</LabelTituloFatoRelevante>
                <InputTituloFatoRelevante type={'string'} {...register('titulo')} />
              </StyleFormFatoRelevante>
              <C.SpanMessageFatoTitle>{errors.titulo?.message}</C.SpanMessageFatoTitle>
              <StyleFormFatoRelevante>
                <LabelDescriçaoFatoRelevante>Descrição*</LabelDescriçaoFatoRelevante>
                <InputDescriçaoFatoRelevante typeof="string" {...register('descriçao')} />
              </StyleFormFatoRelevante>
              <C.SpanMessageFatoDescriçao>{errors.descriçao?.message}</C.SpanMessageFatoDescriçao>
              <ContentCancelaCriaFato>
                <StyleCampoObrigatório>*Campos Obrigatórios</StyleCampoObrigatório>
                <ButtonCancela onClick={onClose}>Cancelar</ButtonCancela>
                <ContentCriaFato type={'submit'}>Criar</ContentCriaFato>
              </ContentCancelaCriaFato>
            </form>
          </ModalContentFato>
        </ModalWindow>
      )}
    </>
  )
}

export default ModalContentFatoRelevante
