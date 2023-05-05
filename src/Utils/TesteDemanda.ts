import * as yup from "yup"

export const schema = yup.object().shape({
    data: yup
        .string(),         
        
    
    serviço: yup
        .string(),  
        
  
    demandas: yup
        .string(),
          
})

const form = {
    data: 0,
    serviço: '',
    demandas: '',
  }

export const validateForm = () => {
    schema
      .validate(form)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }