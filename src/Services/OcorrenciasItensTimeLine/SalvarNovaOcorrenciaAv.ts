import { httpClient } from "../Usuario/http-client"

type Response = {
    type: string
    timelineId: number
}

export const UserService = async (): Promise<Response> => {
  const response = await httpClient.request<Response>({
    url: '/occurrence',
    method: 'post',
    
  });

  if (response.status === 200) {
    return response.data
  }

  throw new Error('O id de timeline fornecido não foi encontrado na base de dados')
}