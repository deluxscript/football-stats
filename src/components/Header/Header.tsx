import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/logo.png'

import './Header.scss'

export const Header: FC = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__content-logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' width={170} />
          </Link>
        </div>
      </div>
    </header>
  )
}
