import { httpClient } from "./http-client"

type Response = {
  id: string
  name: string
  email: string
}

export const UserService = async (): Promise<Response> => {
  const response = await httpClient.request<Response>({
    url: '/user',
    method: 'get',
    
  });

  if (response.status === 200) {
    return response.data
  }

  throw new Error('Usuário não Autenticado')
}