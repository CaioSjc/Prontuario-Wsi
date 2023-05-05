import { DefaultValues } from 'react-hook-form'

export type FormValuesAnotaçao = {
  anotaçao: string
}

export const defaultValues: DefaultValues<FormValuesAnotaçao> = {
  anotaçao: ''
}