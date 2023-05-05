import { CloseButtonAnotaçao, CloseIconModal } from '@/Styles/StyleModal'
import {ModalBackgroundAnota, ModalContentAnotaçoes, ModalTitleAnotaçao, ModalWindowAnotaçao } from '../../Styles/StyleAnotaçoesPessoais'
import Close from '@/assets/IconModalClose/close.svg'
import { ButtonCancelaAnotaçao, ContentCancelaCriaFato, ContentCriaAnotaçao } from '@/Styles/StyleCardFatoRelevante'
import { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {schema} from '../../Utils/TesteNovaSessao'
import { FormValuesAnotaçao, defaultValues } from "../FormsContent/FormAnotaçoesPessoais"
import { timelineService } from "@/Services/Timeline/timeline-service"

type ModalPropsAnota = {
  isOpen: boolean
  onClose: () => void
}

const ModalAnotaçoes = ({ isOpen, onClose }: ModalPropsAnota) => {
  const [styleText, setStyleText] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState: any) => {
    setStyleText(editorState)
  }

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  }) 
console.log(errors)
const onSubmit = (data: Partial<FormValuesAnotaçao>) => {
  timelineService.postCriar(data as any)
console.log(data)
}

  return (
    <>
      {isOpen && (
        <ModalWindowAnotaçao>
          <ModalBackgroundAnota onClick={onClose} />
          <ModalContentAnotaçoes>
            <ModalTitleAnotaçao>Anotações Pessoais</ModalTitleAnotaçao>
            <CloseButtonAnotaçao onClick={onClose}>
              <CloseIconModal src={Close} />
            </CloseButtonAnotaçao>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Editor 
              editorState={styleText} 
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
              toolbarClassName="demo-toolbar"
              toolbar={{
                options: ['inline', 'list', 'textAlign', 'link', 'history']
              }}
              data-contents = {register("anotaçao")}
            />
            </form>
            <ContentCancelaCriaFato>
              <ButtonCancelaAnotaçao onClick={onClose}>Cancelar</ButtonCancelaAnotaçao>
              <ContentCriaAnotaçao type={'submit'}>Criar</ContentCriaAnotaçao>             
            </ContentCancelaCriaFato>
          </ModalContentAnotaçoes>
        </ModalWindowAnotaçao>
      )}
    </>
  )
}

export default ModalAnotaçoes
