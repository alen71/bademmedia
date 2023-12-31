import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SerbiaOpen from '@/templates/SerbiaOpen'

import getImageFiles from '../../../lib/getImages'
import getVideos from '../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function SerbiaOpenPage({ images, videos }: IProducts) {
  return <SerbiaOpen images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles(
    require.context(
      `/public/images/Klijenti/SERBIA OPEN/fotke`,
      false,
      /\.(png|jpg|jpeg)$/
    )
  )

  const videos = await getVideos('serbia-open/')

  return {
    props: {
      ...(await serverSideTranslations('sr', [
        'common',
        'serbiaOpen',
        'footer'
      ])),
      images: JSON.stringify(images),
      videos
    }
  }
}
