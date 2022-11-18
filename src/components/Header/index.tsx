import { HeaderContainer, Logo } from './style.js'
import appLogo from '../../assets/app_logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={appLogo} />
    </HeaderContainer>
  )
}
