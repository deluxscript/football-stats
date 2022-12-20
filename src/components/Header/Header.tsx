import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/logo.png'

export const Header: FC = () => {
  return (
    <header>
      <div>
        <div>
          <Link to='/'>
            <img src={Logo} alt='logo' width={170} />
          </Link>
        </div>
      </div>
    </header>
  )
}
