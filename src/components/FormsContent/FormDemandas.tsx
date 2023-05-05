import { DefaultValues } from 'react-hook-form'

export type FormValuesDemanda = {
  data: number
  serviço: string
  demandas: string
 
}

export const defaultValues: DefaultValues<FormValuesDemanda> = {
  data: 0,
  serviço: '',
  demandas: '',
  
}
