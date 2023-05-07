import E from '../../Styles/StyleListPerguntas'
import Left from '../../assets/IconListPerguntas/left.svg'
import Header2 from '../../assets/IconListPerguntas/header2.svg'
import Header1 from '../../assets/IconListPerguntas/header1.svg'
import Header3 from '../../assets/IconListPerguntas/header3.svg'
import Disket from '../../assets/IconListPerguntas/disket.svg'
import Rigth from '../../assets/IconListPerguntas/rigth.svg'
import Question from '../../assets/IconListPerguntas/question.svg'
import { useNavigate } from "react-router-dom"

const EntrevistaPsicologica = () => {
  const Navigate = useNavigate()
  
    return (
      <>      
        <E.ContentNavBar>
          <E.NavBarContent>
            <E.ButtonVoltar onClick={() => Navigate('/App')} >
              <img src={Left} />
              Voltar
            </E.ButtonVoltar>
            <E.Divisao/>
            <E.SubTitle>Avaliação Psicológica</E.SubTitle>
            <E.Divisao2/>
            <E.TitleCustomList>Data:</E.TitleCustomList><E.ContentDataListPerguntas>18/10/2002</E.ContentDataListPerguntas>      
          </E.NavBarContent>
        </E.ContentNavBar>           
          <E.ContentImg src={Header2} /><E.ContentListImg>Entrevista Psicológica</E.ContentListImg>       
          <E.ContentImg2 src={Header1} /><E.ContentListMargin>Aplicação de Teste</E.ContentListMargin>
          <E.ContentImg3 src={Header3} /><E.ContentListMargin2>Observação Comportamental</E.ContentListMargin2>
        
       <E.ContentStyleList>
        <E.ContentSalvarPular>
          <E.ContentTitle>Entrevista Psicológica</E.ContentTitle>
          <E.ButtonSalvar onClick={() => Navigate('/AplicaçaoTeste')} >
            <img src={Disket} />
            Salvar
            </E.ButtonSalvar>
            <E.ButtonPular onClick={() => Navigate('/AplicaçaoTeste')} >
              Pular
              <img  src={Rigth} />
              </E.ButtonPular>
              </E.ContentSalvarPular>
              <E.ContentSubTitle>Síntese da Entrevista</E.ContentSubTitle><E.StyleQuestion  src={Question} />
              <E.StyleTextArea placeholder={"Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..."} />
              <E.TitleSessao>Condições para realização da avaliação</E.TitleSessao>
               <E.StyleDivisao/>
               <E.StylePerguntas>01 - Está descansado hoje?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked'} type={'radio'} /><E.StyleLabel htmlFor={'cheked'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked1'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked1'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Por quê?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>03 - Está alimentado?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked2'} type={'radio'} /><E.StyleLabel htmlFor={'cheked2'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked3'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked3'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas> 05 - Fez uso de alguma medicação ontem/hoje? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked4'} type={'radio'} /><E.StyleLabel htmlFor={'cheked4'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked5'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked5'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Qual (is)?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>07 - Considera-se em boas condições para realização da avaliação psicológica? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked6'} type={'radio'} /><E.StyleLabel htmlFor={'cheked6'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked7'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked7'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Por quê?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntasMargin>02 - Dormiu bem esta noite? </E.StylePerguntasMargin>
               <E.StyleCheckboxLateral name={'provider'} id={'cheked8'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked8'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral2 name={'provider'}  id={'cheked9'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked9'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2> Quantas horas?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>04 - Fez uso de bebida alcoólica nas últimas horas?</E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral3 name={'provider'} id={'cheked10'} type={'radio'} /><E.StyleLabelLateral3 htmlFor={'cheked10'} >Sim</E.StyleLabelLateral3>
               <E.StyleCheckboxLateral4 name={'provider'}  id={'cheked11'} type={'radio'} /> <E.StyleLabelLateral4 htmlFor={'cheked11'} >Não</E.StyleLabelLateral4>
               <E.StylePerguntasMargin2>06 - Faz uso de lentes corretivas/óculos? </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral5 name={'provider'} id={'cheked12'} type={'radio'} /><E.StyleLabelLateral3 htmlFor={'cheked12'} >Sim</E.StyleLabelLateral3>
               <E.StyleCheckboxLateral6 name={'provider'}  id={'cheked13'} type={'radio'} /> <E.StyleLabelLateral4 htmlFor={'cheked13'} >Não</E.StyleLabelLateral4>             
               <E.TitleSessaoStyle>Histórico familiar</E.TitleSessaoStyle>
               <E.StyleDivisao/>
               <E.StylePerguntas>08 - Estado civil:</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked14'} type={'radio'} /><E.StyleLabel htmlFor={'cheked14'} >Divorciado</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked15'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked15'} >Viúvo</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked16'} type={'radio'} /><E.StyleLabel htmlFor={'cheked16'} >Solteiro</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked17'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked17'} >Casado</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked18'} type={'radio'} /><E.StyleLabel htmlFor={'cheked18'} >União Estável</E.StyleLabel>
               <E.StylePerguntas>10 - Com quem você mora?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>12 - Possui irmãos?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked19'} type={'radio'} /><E.StyleLabel htmlFor={'cheked19'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked20'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked20'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Quantos?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>14- Na família existe alguém que necessite de cuidados médicos ou psicológicos? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked21'} type={'radio'} /><E.StyleLabel htmlFor={'cheked21'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked22'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked22'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Nota</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntasMargin> 09 - Possui filhos?  </E.StylePerguntasMargin>
               <E.StyleCheckboxLateral name={'provider'} id={'cheked23'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked23'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral2 name={'provider'}  id={'cheked24'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked24'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2> Quantos, e qual a idade?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>11 - Está enfrentando problemas familiares? </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral3 name={'provider'} id={'cheked25'} type={'radio'} /><E.StyleLabelLateral3 htmlFor={'cheked25'} >Sim</E.StyleLabelLateral3>
               <E.StyleCheckboxLateral4 name={'provider'}  id={'cheked26'} type={'radio'} /> <E.StyleLabelLateral4 htmlFor={'cheked26'} >Não</E.StyleLabelLateral4>
               <E.StylePerguntasMargin2>Quais? </E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>13 - Como é seu relacionamento com sua família?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.TitleSessaoStyle2>Vida Profissional</E.TitleSessaoStyle2>
               <E.StyleDivisao/>
               <E.StylePerguntas>15 - Atualmente:</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked27'} type={'radio'} /><E.StyleLabel htmlFor={'cheked27'} >Aposentado</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked28'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked28'} >Desempregado</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked29'} type={'radio'} /><E.StyleLabel htmlFor={'cheked29'} >Nunca trabalhou</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked30'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked30'} >Está trabalhando</E.StyleLabelMargin>
               <E.StylePerguntas>17 - Está satisfeito com o que faz?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked31'} type={'radio'} /><E.StyleLabel htmlFor={'cheked31'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked32'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked32'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Por quê?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>19 - Está afastado pelo INSS?  </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked33'} type={'radio'} /><E.StyleLabel htmlFor={'cheked33'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked34'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked34'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Por qual motivo?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntasMargin3>16 - Função desempenhada? Há quanto tempo? </E.StylePerguntasMargin3>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>18 - Trabalha em que turno?  </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral7 name={'provider'} id={'cheked35'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked35'} >Diurno</E.StyleLabelLateral>
               <E.StyleCheckboxLateral8 name={'provider'}  id={'cheked36'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked36'} >Noturno</E.StyleLabelLateral2>
               <E.StyleCheckboxLateral9 name={'provider'} id={'cheked37'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked37'} >Rodízio de turnos Horário:</E.StyleLabelLateral>
               <E.StylePerguntasMargin2>Nota </E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.TitleSessaoStyle2>Vida Escolar</E.TitleSessaoStyle2>
               <E.StyleDivisao/>
               <E.StylePerguntas>20 - Escolaridade:</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked38'} type={'radio'} /><E.StyleLabel htmlFor={'cheked38'} >Superior incompleto</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked39'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked39'} >Superior completo</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked40'} type={'radio'} /><E.StyleLabel htmlFor={'cheked40'} >Médio incompleto</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked41'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked41'} >Médio completo</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked42'} type={'radio'} /><E.StyleLabel htmlFor={'cheked42'} >Fundamental incompleto</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked43'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked43'} >Fundamental completo</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked44'} type={'radio'} /><E.StyleLabel htmlFor={'cheked44'} >Primário</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked45'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked45'} >Alfabetizado</E.StyleLabelMargin>
               <E.StylePerguntas>22 - Ensino:</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked46'} type={'radio'} /><E.StyleLabel htmlFor={'cheked46'} >Regular</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked47'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked47'} >Supletivo </E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked48'} type={'radio'} /><E.StyleLabel htmlFor={'cheked48'} >A distância </E.StyleLabel>
               <E.StylePerguntas>Nota</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntasMargin4>21 - Está estudando? </E.StylePerguntasMargin4>
               <E.StyleCheckboxLateral10 name={'provider'} id={'cheked49'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked49'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral11 name={'provider'}  id={'cheked50'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked50'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Parou há quanto tempo? </E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.TitleSessaoStyle>Saúde</E.TitleSessaoStyle>
               <E.StyleDivisao/>
               <E.StylePerguntas>23 - Tem ou já teve problema de saúde com necessidade de acompanhamento médico/psicológico?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked51'} type={'radio'} /><E.StyleLabel htmlFor={'cheked51'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked52'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked52'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Qual?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>25 -Possui deficiência? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked53'} type={'radio'} /><E.StyleLabel htmlFor={'cheked53'} >Visual</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked54'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked54'} >Fala</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked55'} type={'radio'} /><E.StyleLabel htmlFor={'cheked55'} >Auditiva</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked56'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked56'} >Física</E.StyleLabelMargin>
               <br></br>
               <E.StyleCheckbox name={'provider'} id={'cheked57'} type={'radio'} /><E.StyleLabel htmlFor={'cheked57'} >Não</E.StyleLabel>
               <E.StylePerguntas>Qual?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>27 - Já sofreu algum acidente, tombo, fratura, pancada na cabeça? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked58'} type={'radio'} /><E.StyleLabel htmlFor={'cheked58'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked59'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked59'} >Não</E.StyleLabelMargin>
               <E.StylePerguntasMargin5>24 - Faz uso de medicamentos?</E.StylePerguntasMargin5>
               <E.StyleCheckboxLateral12 name={'provider'} id={'cheked60'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked60'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral13 name={'provider'}  id={'cheked61'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked61'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Qual (is)?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>26 - Sente desmaios, tontura, mal estar, dores de cabeça constantes, crises convulsivas? </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral14 name={'provider'} id={'cheked62'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked62'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral15 name={'provider'}  id={'cheked63'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked63'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2> 28 - Pratica alguma atividade física?</E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral9 name={'provider'} id={'cheked64'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked64'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral16 name={'provider'}  id={'cheked65'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked65'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Quais?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.TitleSessaoStyle3>Hábitos e conduta social</E.TitleSessaoStyle3>
               <E.StyleDivisao/>
               <E.StylePerguntas>29 - Faz uso de cigarros? 	</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked66'} type={'radio'} /><E.StyleLabel htmlFor={'cheked66'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked67'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked67'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Quantos por dia?	</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>31 - Faz ingestão de café? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked68'} type={'radio'} /><E.StyleLabel htmlFor={'cheked68'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked69'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked69'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Frequência:</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas> 33 - Já usou ou usa algum tipo de droga? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked70'} type={'radio'} /><E.StyleLabel htmlFor={'cheked70'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked71'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked71'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Qual/frequência: </E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>35 - Quais são suas atividades de lazer, hobbies?</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>37 - Houve alguma mudança na sua rotina nas últimas semanas?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked72'} type={'radio'} /><E.StyleLabel htmlFor={'cheked72'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked73'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked73'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Nota:</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>39 - Já teve passagem pela delegacia?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked74'} type={'radio'} /><E.StyleLabel htmlFor={'cheked74'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked75'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked75'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Nota:</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>41 - Fale sobre você: 1 ponto positivo e 1 ponto negativo: </E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntasMargin6> 30 - É ex-fumante? </E.StylePerguntasMargin6>
               <E.StyleCheckboxLateral17 name={'provider'} id={'cheked76'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked76'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral18 name={'provider'}  id={'cheked77'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked77'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Há quanto tempo </E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>32 - Faz uso de bebida alcoólica?</E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral19 name={'provider'} id={'cheked78'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked78'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral20 name={'provider'}  id={'cheked79'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked79'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Quantidade/frequência:</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>34 - Faz/fez tratamento para deixar de usar? </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral12 name={'provider'} id={'cheked80'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked80'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral13 name={'provider'}  id={'cheked81'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked81'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Por quê?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>36 - Pratica alguma religião? </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral15 name={'provider'} id={'cheked82'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked83'} >Não</E.StyleLabelLateral>
               <E.StyleCheckboxLateral14 name={'provider'}  id={'cheked83'} type={'radio'} /><E.StyleLabelLateral2 htmlFor={'cheked82'} >Sim</E.StyleLabelLateral2> 
               <E.StylePerguntasMargin2>Qual/frequência:</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>38 - Possui antecedente penal/criminal? </E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral21 name={'provider'} id={'cheked84'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked84'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral22 name={'provider'}  id={'cheked85'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked85'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>40 - Qual a sua meta de vida?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>42 - Sugestão para redução de acidentes no trânsito: </E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.TitleSessaoStyle4>Complementos para atividade remunerada como condutor</E.TitleSessaoStyle4>
               <E.StyleDivisao/>
               <E.StylePerguntas>43 - Já possui experiência como motorista profissional?</E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked86'} type={'radio'} /><E.StyleLabel htmlFor={'cheked86'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked87'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked87'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Tempo/Carga: </E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>45 - Fale sobre uma situação que te deixou mais irritado no trânsito:</E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>47 - Teve multas, ponto na CNH? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked88'} type={'radio'} /><E.StyleLabel htmlFor={'cheked88'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked89'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked89'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Por quê?  </E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>49 - Usa algum estimulante para dirigir? </E.StylePerguntas>
               <E.StyleCheckbox name={'provider'} id={'cheked90'} type={'radio'} /><E.StyleLabel htmlFor={'cheked90'} >Sim</E.StyleLabel>
               <E.StyleCheckboxMargin name={'provider'}  id={'cheked91'} type={'radio'} /> <E.StyleLabelMargin htmlFor={'cheked91'} >Não</E.StyleLabelMargin>
               <E.StylePerguntas>Qual </E.StylePerguntas>
               <E.InputResposta placeholder={'Resposta'} />
               <E.StylePerguntas>51 - Quando você é convidado para um evento em que você fará uso de bebida alcoólica, como se organiza, com relação à condução do veículo?</E.StylePerguntas>
               <E.InputRespostaMargin2 placeholder={'Resposta'} />
               <E.StylePerguntasMargin7>44  - Já passou por alguma situação de perigo no trânsito?</E.StylePerguntasMargin7>
               <E.StyleCheckboxLateral23 name={'provider'} id={'cheked92'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked92'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral24 name={'provider'}  id={'cheked93'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked93'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Qual?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>46 - Já sofreu acidente de trânsito?</E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral3 name={'provider'} id={'cheked94'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked94'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral4 name={'provider'}  id={'cheked95'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked95'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Qual?</E.StylePerguntasMargin2>
               <E.InputRespostaMargin placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>48 - CNH já foi apreendida ou cassada?</E.StylePerguntasMargin2>
               <E.StyleCheckboxLateral25 name={'provider'} id={'cheked96'} type={'radio'} /><E.StyleLabelLateral htmlFor={'cheked96'} >Sim</E.StyleLabelLateral>
               <E.StyleCheckboxLateral26 name={'provider'}  id={'cheked97'} type={'radio'} /> <E.StyleLabelLateral2 htmlFor={'cheked97'} >Não</E.StyleLabelLateral2>
               <E.StylePerguntasMargin2>Porque/quando?</E.StylePerguntasMargin2>
               <br></br>
               <E.InputRespostaMargin3 placeholder={'Resposta'} />
               <E.StylePerguntasMargin2>50 - Quando está dirigindo e recebe uma ligação ou percebe que chegou uma mensagem no celular, como reage?</E.StylePerguntasMargin2>
               <br></br>
               <E.InputRespostaMargin3 placeholder={'Resposta'} />
               <E.ButtonSalvarList onClick={() => Navigate('/AplicaçaoTeste')} ><img src={Disket} />Salvar</E.ButtonSalvarList><E.ButtonPularList onClick={() => Navigate('/AplicaçaoTeste')} >Pular<img src={Rigth} /></E.ButtonPularList>
        </E.ContentStyleList>      
    </>
  )
}
  
export default EntrevistaPsicologica