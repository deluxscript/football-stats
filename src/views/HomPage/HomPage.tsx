import { FC } from 'react';

import { CountryList } from '../../components/CountryList/CountryList'
import { FixtureList } from '../../components/FixtureList/FixtureList';

import './Homepage.scss'

export const HomePage: FC = () => {
  return (
    <div className='home-page'>
      <CountryList />
      <FixtureList />
    </div>
  )
}
