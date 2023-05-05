import { DefaultValues } from 'react-hook-form'

export type FormValuesFato = {
  data: number
  titulo: string
  descriçao: string
}

export const defaultValues: DefaultValues<FormValuesFato> = {
  data: 0,
  titulo: '',
  descriçao: ''
}
