import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Ozzy from '@/templates/Ozzy'

import getImageFiles from '../../../../lib/getImages'
import getVideos from '../../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function OzzyPage({ images, videos }: IProducts) {
  return <Ozzy images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles(
    require.context(
      `/public/images/Klijenti/OZZY/fotke`,
      false,
      /\.(png|jpg|jpeg)$/
    )
  )

  const videos = await getVideos('ozzy/')

  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'ozzy', 'footer'])),
      images: JSON.stringify(images),
      videos
    }
  }
}
