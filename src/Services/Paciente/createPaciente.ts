import { httpClient } from "../Usuario/http-client"

type Response = {
  userId: string
  name: string
  birthdate: number
  profession: string
  schooling: string
  demands: string
  personalAnnotations: string
  _id: number
  __v: string
}

export const UserService = async (): Promise<Response> => {
  const response = await httpClient.request<Response>({
    url: '/patient',
    method: 'post',

  });

  if (response.status === 200) {
    return response.data
  }

  throw new Error('Usuário não Autenticado')
}