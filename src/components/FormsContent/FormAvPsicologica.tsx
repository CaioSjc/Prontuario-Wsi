import { DefaultValues } from 'react-hook-form'

export type FormValuesAv = {
  data: number
}

export const defaultValues: DefaultValues<FormValuesAv> = {
  data: 0,
}