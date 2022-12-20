import { FC } from 'react';
import { Link } from 'react-router-dom';

import comeToMyCityLogo from '../../images/logo/logo.svg'

export const Header: FC = () => {
  return (
    <header className='container mx-auto px-4'>
      <div className='flex flex-row items-center justify-between py-4'
        style={{ height: 'inherit' }}>
        <div>
          <Link to='/'>
            <img src={comeToMyCityLogo} alt='logo' width={150} height={70} />
          </Link>
        </div>
        <div>
          <ul className='inline-flex space-x-4'>
            <li>
              <Link to='/about'>Business</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/privacy-policy'></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
