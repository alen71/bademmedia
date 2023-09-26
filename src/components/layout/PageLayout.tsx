import React, { ReactNode } from 'react'

import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

import Helmet from '../shared/Helmet'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  title: string
  desc: string
  purpleBg?: boolean
  noindex?: boolean
}

const PageLayout = ({ children, title, desc, purpleBg, noindex }: Props) => {
  return (
    <Helmet title={title} desc={desc} noindex>
      <div
        className={clsx('transition-colors duration-300 overflow-hidden  ', {
          'bg-badem-brown dark:bg-main-black': !purpleBg,
          'bg-purple': purpleBg
        })}
      >
        <Navbar purpleBg={purpleBg} />
        <main className="min-h-screen">{children}</main>

        <Footer />
      </div>
    </Helmet>
  )
}

export default PageLayout
