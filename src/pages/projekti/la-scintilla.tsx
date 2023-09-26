import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import LaScintilla from '@/templates/LaScintilla'

import getImageFiles from '../../../lib/getImages'
import getVideos from '../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function LaScintillaPage({ images, videos }: IProducts) {
  return <LaScintilla images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles(
    require.context(
      `/public/images/Klijenti/LA SCINTILLA/fotke`,
      false,
      /\.(png|jpg|jpeg)$/
    )
  )

  const videos = await getVideos('la-scintilla/')

  return {
    props: {
      ...(await serverSideTranslations('sr', [
        'common',
        'laScintilla',
        'footer'
      ])),
      images: JSON.stringify(images),
      videos
    }
  }
}
