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

export const salvarNovaSessao = async (dados : any): Promise<Response> => {
  console.log(dados)
  const atributs = {
    "type": "session",
    "timelineId": "6457fff705a413679909edf3",
    "title": dados.titulo,
    "content": dados.resumoSessao,
    "payment": {"value": dados.valor, "method": dados.formaDePagamento,"status" : dados.pago },
  }
  const token = localStorage.getItem('token') 
  const response = await httpClient.post<Response>("/occurrence",  atributs , {
    
    headers: {
      'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
      Authorization: token,
      'Content-Type': 'application/json',
      'Accept': '*/*',
    }
  });

  if (response.status === 201) {
    return response.data
    
  }

  throw new Error('O id de timeline fornecido não foi encontrado na base de dados')
}