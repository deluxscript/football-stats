import React, { FC } from 'react'
import classNames from 'classnames';

import './FixtureTabContent.scss'

type FixtureTabContentProps = {
  /**
   * The tab children element
   */
  children: React.ReactNode
  /**
   * Flag to know the active tab
   */
  selected: boolean
  /**
   * The class which is used in the tab.
   */
  className?: string
}

export const FixtureTabContent: FC<FixtureTabContentProps> = ({
  children,
  selected,
  className = ''
}) => {
  if (selected) {
    return (
      <div className={classNames('fixture-tab-content', className)}>
        {children}
      </div>
    )
  }
  return null
}
