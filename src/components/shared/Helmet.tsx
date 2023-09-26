import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  desc: string
  noindex?: boolean
}

const Helmet = ({ children, title, desc, noindex }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta content={title} property="og:title" />
        <meta content={desc} property="og:description" />
        <meta content="https://bademmedia.com" property="og:url" />
        <meta
          property="og:image"
          content="https://bademmedia.com/images/preview-logo-image.jpg"
        />

        <meta content="website" property="og:type" />
        <meta content="Badem Media" property="og:site_name" />
        <meta content={title} name="twitter:title" />
        <meta content={desc} name="twitter:description" />

        {noindex && <meta name="robots" content="noindex" />}
      </Head>
      {children}
    </>
  )
}

export default Helmet
