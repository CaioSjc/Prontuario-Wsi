import { httpClient } from "../Usuario/http-client"
import { NotFoundError, ServerError, UnauthozidedError } from "../../Utils/Errors/index"

type Response = {
    _id: string
    type: "interview"

    interview:  [
        {
            abstract: string
            _id: string
        },
        {
            question: string
            textAnswer: string
            _id: string
        },
        {
            question: string
            optionAnswer: string
            _id: string
        }
    ],
    tests: [],
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
 