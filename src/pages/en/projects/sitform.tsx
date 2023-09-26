import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Sitform from '@/templates/Sitform'

import getImageFiles from '../../../../lib/getImages'
import getVideos from '../../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function SitformPage({ images, videos }: IProducts) {
  return <Sitform images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles(
    require.context(
      `/public/images/Klijenti/SIT FORM/fotke`,
      false,
      /\.(png|jpg|jpeg)$/
    )
  )

  const videos = await getVideos('sitform/')

  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'sitform', 'footer'])),
      images: JSON.stringify(images),
      videos
    }
  }
}
