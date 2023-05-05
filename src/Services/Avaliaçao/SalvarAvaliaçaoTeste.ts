import { httpClient } from "../Usuario/http-client"
import { NotFoundError, ServerError, UnauthozidedError } from "../../Utils/Errors/index"

type Response = {
    _id: string
    type: "tests"
    interview: []
    tests: [
        {
            type: "attention"
            name: string
            points: number
            percentile: number
            result: string
            observation: ""
            _id: string
        },
        {
            type: "memory",
            name: string
            points: number
            percentile: number
            result: string
            observation: string
            _id: string
        }
    ],
    __v: number
}



export const assessmentId = {
  put: async (assessmentId: string): Promise<Response[]> => {
    const response = await httpClient.request<Response[]>({
      url: `/assessment/${assessmentId}`,
      method: 'put',
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
 