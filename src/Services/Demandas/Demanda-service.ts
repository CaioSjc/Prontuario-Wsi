import {  ServerError, UnauthozidedError } from "../../Utils/Errors/index"
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

type CreateRequest = {
    "name": string;
    "profession": string;
    "schooling": string;
    "demands": string;
    "personalAnnotations": string;
    "birthdate": string;
}


export const timelineService = {
  postCriar: async (postCriado: CreateRequest) : Promise<Response> => {
    
  const response = await httpClient.request<Response>({
    url: '/timeline/api/patient',
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
}