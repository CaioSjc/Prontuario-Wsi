import { httpClient } from "../Usuario/http-client"

type Response = {
  "_id": string,
  "patientId": string,
  "occurrences": [
      {
          "assessments": {
              "interview": string,
              "tests": string,
              "observation": string,
          },
          "_id": string,
          "files": [],
          "type": string,
          "createdOn": string,
          "modifiedOn": string,
          "__v": number,
      },
      {
          "payment": {
              "value": number,
              "method": string,
              "status": string,
          },
          "_id": string,
          "title": string,
          "content": string,
          "files": [],
          "type": string,
          "createdOn": string,
          "modifiedOn": string,
          "__v": number,
      },
      {
          "_id": string,
          "title": string,
          "content": string,
          "files": [],
          "type": string,
          "createdOn": string,
          "modifiedOn": string,
          "__v": number,
      }
  ],
  "serviceName": string,
  "createdOn": string,
  "modifiedOn": string,
  "__v": number,
}

type Request = {
    "type": string,
    "timelineId": string,
    "title": string,
    "content": string ,
}
export const salvarNovaSessao = async (dados: Request): Promise<Response> => {
  const token = localStorage.getItem("token") 
  const response = await httpClient.post<Response>("/occurrence", dados,{ 
    
    headers:{
      Authorization: token, 'Content-Type': 'application/json' 
    }
  });

  if (response.status === 201) {
    return response.data
    
  }

  throw new Error('O id de timeline fornecido não foi encontrado na base de dados')
}