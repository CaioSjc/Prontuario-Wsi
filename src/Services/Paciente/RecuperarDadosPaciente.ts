import { httpClient } from "../Usuario/http-client"
import { NotFoundError, ServerError, UnauthozidedError } from "../../Utils/Errors/index"

type Response = {
    _id: string
    userId: number
    name: string
    birthdate: number
    profession: string
    schooling: string
    demands: string
    personalAnnotations: string
}


export const patientId = {
  get: async (patientId: string): Promise<Response[]> => {
    const response = await httpClient.request<Response[]>({
      url: `/patient/${patientId}`,
      method: 'get',
      headers: {
        Authorization: localStorage.getItem('token') ?? null
      }
    })

    switch (response.status) {
      case 200: return response.data
      case 401: throw new UnauthozidedError()
      case 404: throw new NotFoundError()
      default: throw new ServerError()
    }
  }
}
 