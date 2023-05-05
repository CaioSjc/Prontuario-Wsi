import { NotFoundError, ServerError, UnauthozidedError } from "../../Utils/Errors/index"
import { httpClient } from "../Usuario/http-client"

type Response = {
  _id: string
  patientId: string
  occurrences: string[]
  serviceName: string
  createdOn: string
  modifiedOn: string
}

type CreateRequest = {
  "patientId": "64348d31d1f55efc1d6dcdda";
    "serviceName": string;
}


export const timelineService = {
  postCriar: async (postCriado: CreateRequest) : Promise<Response> => {
    
  const response = await httpClient.request<Response>({
    url: '/timeline',
    method: 'post',
    headers: {
      Authorization: localStorage.getItem('token') ?? null
    },
    data: postCriado 
  })

  switch (response.status) {
    case 201: return response.data
    case 401: throw new UnauthozidedError()
    default: throw new ServerError()
  }
},


  getAll: async (): Promise<Response[]> => {
    const response = await httpClient.request<Response[]>({
      url: '/timeline',
      method: 'get',
      headers: {
        Authorization: localStorage.getItem('token') ?? null
      }
    })

    switch (response.status) {
      case 200: return response.data
      case 401: throw new UnauthozidedError()
      default: throw new ServerError()
    }
  },
  get: async (timelineId: string) => {
    const response = await httpClient.request<Response>({
      url: `/timeline/${timelineId}`,
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