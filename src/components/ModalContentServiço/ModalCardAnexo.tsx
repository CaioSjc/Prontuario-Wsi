import { ContentCancelaCriaAnexo, ContentCriaFato, InputDescriçaoFatoRelevante, InputTituloFatoRelevante, LabelDescriçaoFatoRelevante, LabelTituloFatoRelevante } from "@/Styles/StyleCardFatoRelevante"
import { ButtonCancela,  CloseIconModal,  InputDataFatoRelevante,  LabelDataFatoRelevante,  ModalAnexo, ModalContentAnexos, ModalBackground,  ModalWindow, StyleCampoObrigatório, StyleForm, StyleFormFatoRelevante, CloseButtonAnexo, InputAnexarArquivo, ContentInputFile, SpanAnexarArquivos, LabelAnexarArquivos, ButtonLimpar } from "../../Styles/StyleModal"
import Close from '../../assets/IconModalClose/close.svg'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {schemaAnexo} from '../../Utils/TesteAnexo'
import { FormValuesAnexo, defaultValues } from "../FormsContent/FormAnexo"
import Limpar from '../../assets/IconLimparAnexo/close-small.svg'
import C from '../../Styles/StyleSessãoCard'



type ModalPropsAnexo = {
  isOpen: boolean
  onClose: () => void
}

const ModalContentAnexo = ({ isOpen, onClose}: ModalPropsAnexo) => { 
  const {register, handleSubmit,setValue, formState: {errors} } = useForm({
    resolver: yupResolver(schemaAnexo),
    defaultValues
  }) 
console.log(errors)
const onSubmit = (data: Partial<FormValuesAnexo>) => {
console.log(data)
}

  return( 
  <>
    {isOpen && (
      <ModalWindow>
        <ModalBackground onClick={onClose} />
        <ModalContentAnexos>
        <ModalAnexo>Novo Anexo</ModalAnexo>        
          <CloseButtonAnexo onClick={onClose}><CloseIconModal src={Close} /></CloseButtonAnexo>
          <form onSubmit={handleSubmit(onSubmit)}>
          <StyleForm>
            <LabelDataFatoRelevante style={{marginTop: '51px'}} >Data*</LabelDataFatoRelevante>
            <InputDataFatoRelevante  type={"date"} {...register("data")}/>           
          </StyleForm><C.SpanMessageFato   >{errors.data?.message}</C.SpanMessageFato>
          <StyleFormFatoRelevante>
            <LabelTituloFatoRelevante>Título*</LabelTituloFatoRelevante>
            <InputTituloFatoRelevante type={"string"} {...register("titulo")} />
          </StyleFormFatoRelevante>
          <C.SpanMessageFatoTitle>{errors.titulo?.message}</C.SpanMessageFatoTitle>
          <StyleFormFatoRelevante>
            <LabelDescriçaoFatoRelevante style={{marginTop: '12px'}}  >Descrição*</LabelDescriçaoFatoRelevante>
            <InputDescriçaoFatoRelevante typeof="string" {...register("descriçao")} />
          </StyleFormFatoRelevante>
          <C.SpanMessageFatoDescriçao >{errors.descriçao?.message}</C.SpanMessageFatoDescriçao>
          <StyleFormFatoRelevante>
          <SpanAnexarArquivos>Anexar Arquivos*</SpanAnexarArquivos>
          <ContentInputFile>
          <LabelAnexarArquivos htmlFor="file">Escolher Arquivo...</LabelAnexarArquivos>        
            <InputAnexarArquivo id="file" type={"file"} {...register("anexo")}/>                           
          <ButtonLimpar onClick={() => { 
            setValue("anexo", undefined )            
          }} ><img src={Limpar} /></ButtonLimpar>        
          </ContentInputFile>
          </StyleFormFatoRelevante>                                                                              
          <ContentCancelaCriaAnexo><StyleCampoObrigatório>*Campos Obrigatórios</StyleCampoObrigatório><ButtonCancela onClick={onClose} >Cancelar</ButtonCancela><ContentCriaFato type={"submit"}>Criar</ContentCriaFato></ContentCancelaCriaAnexo>
          </form>                
        </ModalContentAnexos>
      </ModalWindow>
    )}
  </>
  )
}

export default ModalContentAnexo