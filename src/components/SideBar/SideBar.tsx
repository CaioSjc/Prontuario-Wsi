import { Container, Content } from '@/Styles/StyleSideBar'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  active: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ active }: Props) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <Content></Content>
    </Container>
  )
}

export default Sidebar
