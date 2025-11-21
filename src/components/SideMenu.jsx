import React from 'react'
import './SideMenu.css'

const SideMenu = ({ className = '', items = [], variant = 'landing', onSelectItem }) => {
  if (!items.length) return null

  if (variant === 'login') {
    return (
      <nav className={className}>
        {items.map((item) => (
          <button
            key={item}
            className="login-sidebar__link"
            type="button"
            onClick={() => onSelectItem && onSelectItem(item)}
          >
            {item}
            <span aria-hidden="true">
              ›
            </span>
          </button>
        ))}
      </nav>
    )
  }

  return (
    <aside className={className}>
      {items.map((item) => (
        <button
          key={item}
          className="menu-item"
          type="button"
          onClick={() => onSelectItem && onSelectItem(item)}
        >
          {item}
        </button>
      ))}
    </aside>
  )
}

export default SideMenu
