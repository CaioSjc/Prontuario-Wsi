import { Atençao, ContainerMessage, Message } from "@/Styles/StyleCardAvPsicologica"
import { CloseIconModal,  ModalAvPsicologica, ModalContentAv,  ModalBackground,  ModalWindow, CloseButtonAnexo, StyleForm, LabelDataFatoRelevante, InputDataFatoRelevante, StyleCampoObrigatório, ButtonCancelaAv } from "../../Styles/StyleModal"
import Close from '../../assets/IconModalClose/close.svg'
import { CancelaCriaAvPsicologica, ProsseguirAvPsicologica } from "@/Styles/StyleCardFatoRelevante"
import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {schema} from '../../Utils/TesteNovaSessao'
import { FormValuesAv, defaultValues } from "../FormsContent/FormAvPsicologica"


type ModalPropsAvPsicologica = {
  isOpen: boolean
  onClose: () => void
}

const ModalContentAvPsicologica = ({ isOpen, onClose }: ModalPropsAvPsicologica) => { 
  const Navigate = useNavigate()
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  }) 
console.log(errors);
const onSubmit = (data: Partial<FormValuesAv>) => { 

console.log(data);
}

   return( 
  <>
    {isOpen && (
      <ModalWindow>
        <ModalBackground onClick={onClose} />
        <ModalContentAv>
        <ModalAvPsicologica>Nova Avaliação Psicológica</ModalAvPsicologica><CloseButtonAnexo onClick={onClose}><CloseIconModal src={Close} /></CloseButtonAnexo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyleForm>
            <LabelDataFatoRelevante>Data*</LabelDataFatoRelevante>
            <InputDataFatoRelevante type={"date"} {...register("data")} /> 
          </StyleForm>
          </form>
          <ContainerMessage>
            <Atençao>Atenção!</Atençao>
            <Message>Você será redirecionado para uma nova página onde irá preencher os dados da avaliação psicológica.</Message>
          </ContainerMessage>
          <CancelaCriaAvPsicologica><StyleCampoObrigatório>*Campos Obrigatórios</StyleCampoObrigatório><ButtonCancelaAv onClick={onClose}>Cancelar</ButtonCancelaAv><ProsseguirAvPsicologica type={"submit"} onClick={() => Navigate('/Entrevista')} >Prosseguir</ProsseguirAvPsicologica></CancelaCriaAvPsicologica>       
        </ModalContentAv>
      </ModalWindow>
    )}   
  </>
)
}

export default ModalContentAvPsicologica