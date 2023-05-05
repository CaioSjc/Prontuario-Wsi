import * as yup from "yup"

export const schema = yup.object().shape({
    data: yup
        .string()         
        .required("Campo Obrigatório!!!"),
})

const form = {
    data: 0,
  }

export const validateForm = () => {
    schema
      .validate(form)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }
