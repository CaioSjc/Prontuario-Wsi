import * as yup from "yup"

export const schema = yup.object().shape({
    anotaçao: yup
        .string() ,         
})

const form = {
    anotaçao: '',  
  }

export const validateForm = () => {
    schema
      .validate(form)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }
