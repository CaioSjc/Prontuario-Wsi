import GlobalStyle, {
  ButtonMenu,
  StyleAdd,
  StyleButtonMenu,
  StyleContentPerfil,
  StyleExpand,
  StyleLogo,
  StyleLogos,
  StyleMask,
  StyleMenu,
  StylePath,
  StylePerfilCliente,
  StyleVector
} from '@/Styles/StyledMenuNavBar'
import { Normalize } from 'styled-normalize'
import Logo from '../../assets/IconsMenuHeader/Logo.svg'
import Mask from '../../assets/IconsMenuHeader/Mask.svg'
import Path from '../../assets/IconsMenuHeader/Path.svg'
import Vector from '../../assets/IconsMenuHeader/Vector.svg'
import Add from '../../assets/IconsMenuHeader/Add.svg'
import IconMenu from '../../assets/IconsMenuHeader/IconMenu.svg'
import ExpandIcon from '../../assets/IconsMenuHeader/ExpandIcon.svg'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserService } from '../../Services/Usuario/user'
import Sidebar from '../SideBar/SideBar'

function MenuHeader() {
  const [user, setUser] = useState()

  useEffect(() => {
    UserService().then(response => {
      setUser(response)
    })
  }, [])

  const [sideBar, setSidebar] = useState(false)
  const showSideBar = () => setSidebar(!sideBar)

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <StyleLogos>
        <StyleLogo src={Logo} />
      </StyleLogos>
      <StyleMenu>
        <StyleMask src={Mask} />
        <StyleVector src={Vector} />
        <StyleAdd src={Add} />
        <StylePath src={Path} />
      </StyleMenu>
      <StyleContentPerfil>
        <StyleButtonMenu onClick={showSideBar}>
          <ButtonMenu src={IconMenu} />
        </StyleButtonMenu>
        <StylePerfilCliente>Bem vindo(a), {user?.name} </StylePerfilCliente>
        <StyleExpand src={ExpandIcon} />
        {sideBar && <Sidebar active={setSidebar} />}
      </StyleContentPerfil>
      <Outlet />
    </>
  )
}

export default MenuHeader
