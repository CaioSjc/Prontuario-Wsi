import { CloseButtonDemanda, CloseIconModal } from '@/Styles/StyleModal'
import D from '../../Styles/StyleDemandas'
import Close from '../../assets/IconModalClose/close.svg'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {schema} from '../../Utils/TesteDemanda'
import { FormValuesDemanda, defaultValues } from "../FormsContent/FormDemandas"
import { timelineService } from '@/Services/Demandas/Demanda-service'

type ModalPropsDemanda = {
  isOpen: boolean
  onClose: () => void
}

const ModalDemandas = ({ isOpen, onClose }: ModalPropsDemanda) => {
 
    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema),
      defaultValues
    }) 
  console.log(errors)
  const onSubmit = (data: Partial<FormValuesDemanda>) => {
    timelineService.postCriar(data as any)
  console.log(data)
  }
  return (
    <>
      {isOpen && (
        <D.ModalWindowDemandas>
          <D.ModalBackgroundDemandas onClick={onClose} />
          <D.ModalContentDemandas>
            <D.TitleDemanda>Novo Serviço</D.TitleDemanda>
            <CloseButtonDemanda onClick={onClose}>
              <CloseIconModal src={Close} />
            </CloseButtonDemanda>
            <p></p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <D.TitlePaciente>Paciente</D.TitlePaciente>
              <D.Paciente>Ana Ester Resende</D.Paciente>
              <D.TitleCpf>CPF</D.TitleCpf>
              <D.Paciente>114.559.886-78</D.Paciente>
              <D.DataInicial>Data Inicial</D.DataInicial>
              <D.InputDataInicial type={'date'} {...register("data")} />
              <D.DataInicial>Serviço</D.DataInicial>
              <D.InputServiço typeof="string" {...register("serviço")} >
                <option disabled selected>
                  Selecione uma opção
                </option>
                <option>opção1</option>
              </D.InputServiço>
              <D.DataInicial>Demandas e Objetivos</D.DataInicial>
              <D.InputTextArea typeof="string" {...register("demandas")} />
              <D.ButtonSalvar type={"submit"} >Salvar</D.ButtonSalvar>
            </form>
          </D.ModalContentDemandas>
        </D.ModalWindowDemandas>
      )}
    </>
  )
}

export default ModalDemandas
