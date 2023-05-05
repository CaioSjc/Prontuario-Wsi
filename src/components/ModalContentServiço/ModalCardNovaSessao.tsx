
import  { CheckBoxPago, CheckMark, CloseButton, CloseIconModal, ContentText, InputData, InputFormaPagamento, InputHoraFim,  InputHoraInicio, InputResumoSessao, InputTitulo, LabelData, LabelFormaPagamento, LabelHoraFim, LabelHoraInicio, LabelPago, LabelResumoSessao, LabelTitulo, LabelValor, ModalBackground, ModalContent, ModalNovaSessao, ModalWindow, Scroll, StyleButtonCancela, StyleButtonCriar, StyleCampoObrigatório, StyleCancelaCria, StyleContentDados, StyleContentDica, StyleContentIconDica, StyleContentText, StyleForm, StyleForm2, StyleFormTextArea, StyleHr, StyleHr2 }  from "../../Styles/StyleModal"
import Close from '../../assets/IconModalClose/close.svg'
import Dica from '../../assets/IconTextoDica/iconDica.svg'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {schema} from '../../Utils/TesteNovaSessao'
import { FormValues, defaultValues } from "../FormsContent/FormNovaSessao"
import C from '../../Styles/StyleSessãoCard'
import { salvarNovaSessao } from "@/Services/OcorrenciasItensTimeLine/SalvarNovaSessao"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ModalContentSessao = ({ isOpen, onClose }: ModalProps) => {
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  }) 
console.log(errors);
const onSubmit = (data: Partial<FormValues>) => {
  salvarNovaSessao(data as any)
console.log(data);
}

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <ModalBackground onClick={onClose} />
            <ModalContent>
              <ModalNovaSessao>Nova Sessão</ModalNovaSessao><CloseButton onClick={onClose}><CloseIconModal src={Close} /></CloseButton>
              <Scroll>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <StyleContentText><ContentText>1</ContentText></StyleContentText><StyleContentDados>Dados Gerais</StyleContentDados>         
                  <StyleForm>
                    <LabelData>Data*</LabelData>
                   <InputData  type={"date"} {...register("data")}/>
                   <C.SpanMessageObrigatorio>{errors.data?.message}</C.SpanMessageObrigatorio> 
                  </StyleForm>
                  <StyleForm>
                    <LabelHoraInicio>Hora de Início*</LabelHoraInicio>
                    <InputHoraInicio  type={"hour"} {...register("horaInicio")}/>
                    <C.SpanMessageObrigatorio>{errors.horaInicio?.message}</C.SpanMessageObrigatorio> 
                  </StyleForm>
                  <StyleForm>
                    <LabelHoraFim>Hora Fim*</LabelHoraFim>             
                    <InputHoraFim type={"hour"} {...register("horaFim")}/>
                    <C.SpanMessageObrigatorio>{errors.horaFim?.message}</C.SpanMessageObrigatorio>               
                  </StyleForm>          
                  <StyleHr/>
                  <StyleContentText><ContentText>2</ContentText></StyleContentText><StyleContentDados>Sessão</StyleContentDados>
                  <StyleForm2>           
                    <LabelTitulo>Título*</LabelTitulo>             
                    <InputTitulo type={"string"} {...register("titulo")} />
                    <C.SpanMessageObrigatorio>{errors.titulo?.message}</C.SpanMessageObrigatorio> 
                  </StyleForm2>
                  <StyleFormTextArea>                                   
                    <LabelResumoSessao>Resumo da Sessão*</LabelResumoSessao>   
                    <InputResumoSessao typeof="string" {...register("resumoSessao")}/>
                    <C.SpanMessageObrigatorio style={{width: '148px'}} >{errors.resumoSessao?.message}</C.SpanMessageObrigatorio> 
                  </StyleFormTextArea>                                    
                  <StyleHr2/>
                  <StyleContentText><ContentText>3</ContentText></StyleContentText><StyleContentDados>Pagamento</StyleContentDados>
                  <StyleForm>
                    <LabelValor>Valor</LabelValor>              
                    <InputData type={"number"}  {...register("valor")} /> 
                  </StyleForm>
                  <StyleForm>
                    <LabelFormaPagamento>Forma de Pagamento</LabelFormaPagamento>               
                    <InputFormaPagamento {...register("formaDePagamento")}>
                      <option disabled selected></option>
                      <option value="Pix">Pix</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Débito">Débito</option>
                      <option value="Crédito">Crédito</option>
                    </InputFormaPagamento> 
                  </StyleForm> 
                  <StyleForm2>               
                  <LabelPago>
                    <CheckBoxPago disabled={false} type={"checkbox"} {...register("pago")} />
                    <CheckMark/>
                    Pago
                    </LabelPago> 
                  </StyleForm2>                
                  <StyleContentIconDica src={Dica} /><StyleContentDica>Dica: Registrar os pagamentos das sessões irá te auxiliar na sua organização financeira.</StyleContentDica> 
                  <StyleButtonCriar type={"submit"} >Criar</StyleButtonCriar>                                                     
                </form>
                </Scroll>
                <StyleCancelaCria><StyleCampoObrigatório>*Campos Obrigatórios</StyleCampoObrigatório><StyleButtonCancela onClick={onClose} >Cancelar</StyleButtonCancela></StyleCancelaCria>                
            </ModalContent>
        </ModalWindow>
      )}
    </>
  )
}
export default ModalContentSessao