import  S from '../../Styles/IdPacienteStyle'
import Person from '../../assets/IconsIdPaciente/person.svg'
import Calendar from '../../assets/IconsIdPaciente/calendar.svg'
import Teacher from '../../assets/IconsIdPaciente/teacher.svg'
import Schooling from '../../assets/IconsIdPaciente/schooling.svg'
import Label from './TypeLabel'

function IdPaciente() {
    return (
        <>       
        <S.Content>          
           <S.TitleId>Identificação do Paciente</S.TitleId>
           <S.Icon src={Person}/><Label label="Paciente" value="Ana Ester Resende"/>             
           <S.Icon src={Calendar}/><Label label="Nascimento" value="10/09/2000"/>       
           <S.Icon src={Teacher}/><Label label="Profissão" value="Designer"/>
           <S.Icon src={Schooling}/><Label label="Escolaridade" value="Superior"/>  
        </S.Content>
        </>
    )
}

export default IdPaciente