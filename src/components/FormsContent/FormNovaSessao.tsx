import { DefaultValues } from 'react-hook-form'

export type FormValues = {
  data: number
  horaInicio: number
  horaFim: number
  titulo: string
  resumoSessao: string
  valor: number
  formaDePagamento: string
  pago: string
}

export const defaultValues: DefaultValues<FormValues> = {
  data: 0,
  horaInicio: 0,
  horaFim: 0,
  titulo: '',
  resumoSessao: '',
  valor: 0, 
  formaDePagamento: '',
  pago: ''
}
