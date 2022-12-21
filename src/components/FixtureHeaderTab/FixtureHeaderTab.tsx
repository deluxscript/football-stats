import React, { FC } from 'react'
import classnames from 'classnames'

import './FixtureHeaderTab.scss'

type FixtureHeaderTabProps = {
  /**
   * The tab children element
   */
  children: React.ReactNode
  /**
   * Flag to know the active tab
   */
  isActive: boolean
  /**
   * The function which is used on click of the tab.
   */
  onClick: () => void
  /**
   * The class which is used in the tab.
   */
  className?: string
}

export const FixtureHeaderTab: FC<FixtureHeaderTabProps> = ({
  isActive,
  onClick,
  className = '',
  children }) => {
  return (
    <button onClick={onClick} type='button' className={classnames('fixture-header-tab', className, {
      'fixture-header-tab--active': isActive
    })}>
      {children}
    </button>
  )
}
