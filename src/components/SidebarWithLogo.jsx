import React from 'react'
import SideMenu from './SideMenu'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'

const defaultItems = ['EdInai', 'No Code Development', 'INAI For Marketing', 'INAI For Corporate Agent']

const SidebarWithLogo = ({ items = defaultItems }) => {
  return (
    <aside className="login-sidebar">
      <img src={logoImage} alt="INAI Verse logo" className="login-sidebar__logo" />
      <SideMenu className="side-menu" items={items} variant="landing" />
    </aside>
  )
}

export default SidebarWithLogo
