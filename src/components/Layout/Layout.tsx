import React, { FC } from 'react';
import { description, keywords, title } from '../../config/constants'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { MetaHead } from '../MetaHead/MetaHead'

import './Layout.scss'

type LayoutProps = {
  children?: React.ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MetaHead title={title} description={description} keywords={keywords} />
      <Header />
      <div className='layout'>{children}</div>
      <Footer />
    </>
  )
}
