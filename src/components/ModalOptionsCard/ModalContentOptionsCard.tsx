import { ModalOptions, StyleEditOptions, StyleEditar, StyleExcluir, StyleExportar } from "@/Styles/StyleModal"
import EditOptions from '../../assets/IconsModalOptions/editOptions.svg'
import LixeiraOptions from '../../assets/IconsModalOptions/lixeiraOptions.svg'
import exportarOptions from '../../assets/IconsModalOptions/exportarOptions.svg'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
  }
  
  const ModalContentOptions = ({ isOpen }: ModalProps) => {
   
  
    return (
      <>
        {isOpen && (                
              <ModalOptions > 
             <StyleEditar><StyleEditOptions src={EditOptions} />Editar</StyleEditar>
             <StyleExcluir><StyleEditOptions src={LixeiraOptions} />Excluir</StyleExcluir>
             <StyleExportar><StyleEditOptions src={exportarOptions} />Exportar</StyleExportar>                                    
              </ModalOptions>
        )}
      </>
    )
  }
  export default ModalContentOptions