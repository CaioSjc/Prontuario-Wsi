import * as yup from "yup"

export const schema = yup.object().shape({
    data: yup
        .string()         
        .required("Campo Obrigatório!!!"),
    
    horaInicio: yup
        .string()   
        .required("Campo Obrigatório!!!"),
  
    horaFim: yup
        .string()
        .required("Campo Obrigatório!!!"),
    
    titulo: yup
        .string()
        .required("Campo Obrigatório!!!"),

    resumoSessao: yup
        .string()
        .required("Campo Obrigatório!!!"),

    valor: yup
        .string(),
        

    formaDePagamento: yup
        .string(),
        

    pago: yup
        .string(),
        
})

const form = {
    data: 0,
    horaInicio: 0,
    horaFim: 0,
    titulo: '',
    resumoSessao: '',
    valor: 0,
    formaDePagamento: '',
    pago: '',
  }

export const validateForm = () => {
    schema
      .validate(form)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }
