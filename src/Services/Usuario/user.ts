import { httpClient } from "./http-client"

type Response = {
  id: string
  name: string
  email: string
}

export const UserService = async (): Promise<Response> => {

  const token = localStorage.getItem('token')


  const response = await httpClient.request<Response>({
    url: '/user',
    method: 'get',
    headers: {
      'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
      Authorization: token,
      'Accept': '*/*',
    }
    
  });

  if (response.status === 200) {
    return response.data
  }

  throw new Error('Usuário não Autenticado')
}