import * as yup from "yup"

export const schemaAnexo = yup.object().shape({
    data: yup
        .string()         
        .required("Campo Obrigatório!!!"),
    
    titulo: yup
        .string()
        .required("Campo Obrigatório!!!"),

    descriçao: yup
        .string()
        .required("Campo Obrigatório!!!"),

    anexo: yup
        .string()
        .required("Campo Obrigatório!!!"), 
})

const form = {
    data: 0,
    titulo: '',
    descriçao: '',
    anexo: [[]],
  }

export const validateForm = () => {
    schemaAnexo
      .validate(form)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }