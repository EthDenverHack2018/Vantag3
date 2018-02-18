import React from 'react'

// Images
import uPortLogo from '../../../img/Uport.png'

 const LoginButton = ({ onLoginUserClick }) => {
  return(
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link"><img className="uport-logo" src={uPortLogo} alt="UPort Logo" /></a>
    </li>
  )
}


export default LoginButton
