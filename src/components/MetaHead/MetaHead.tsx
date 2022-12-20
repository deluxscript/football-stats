import React from 'react'
import { Helmet } from 'react-helmet'

import Favicon from '../../images/icon/favicon.png'

type HTMLHeadProps = {
  title: string;
  description: string;
  keywords: string;
}

export const MetaHead: React.FC<HTMLHeadProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='shortcut icon' href={Favicon} />
    </Helmet>
  )
}
