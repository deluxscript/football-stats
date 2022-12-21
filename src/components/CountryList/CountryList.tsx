import { FC } from 'react';
import classNames from 'classnames';

import './CountryList.scss'

type CountryListProps = {
  /**
   * class for the component
   */
  className?: string
}
export const CountryList: FC<CountryListProps> = ({className}) => {
  return (
    <div className={classNames('country-list', className)}>
      <div className='country-list__content'>Countries</div>
    </div>
  )
}
