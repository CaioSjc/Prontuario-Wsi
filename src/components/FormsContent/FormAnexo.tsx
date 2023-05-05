import { DefaultValues } from 'react-hook-form'

export type FormValuesAnexo = {
  data: number
  titulo: string
  descriçao: string
  anexo: object
}

export const defaultValues: DefaultValues<FormValuesAnexo> = {
  data: 0,
  titulo: '',
  descriçao: '',
  anexo: {}
}
