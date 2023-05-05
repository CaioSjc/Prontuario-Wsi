import * as yup from "yup"

export const schemaFato = yup.object().shape({
    data: yup
        .string()         
        .required("Campo Obrigatório!!!"),
    
    titulo: yup
        .string()
        .required("Campo Obrigatório!!!"),

    descriçao: yup
        .string()
        .required("Campo Obrigatório!!!"),
})

const form = {
    data: 0,
    titulo: '',
    descriçao: '',
  }

export const validateForm = () => {
    schemaFato
      .validate(form)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }
