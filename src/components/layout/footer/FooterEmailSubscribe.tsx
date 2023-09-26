import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'next-i18next'

import Arrow from '/src/assets/icons/footer-arrow.svg'

const FooterEmailSubscribe = () => {
  const { t } = useTranslation('footer')

  return (
    <>
      <label htmlFor="news" className="font-semibold text-2xl">
        {`${t('newsLabel')}`}
      </label>

      <div className="flex gap-3 sm:gap-5 overflow-hidden">
        <motion.input
          initial={{ x: '-100%' }}
          whileInView={{ x: '0%' }}
          transition={{ type: 'spring', stiffness: 40 }}
          viewport={{ once: true }}
          type="text"
          placeholder={`${t('newsPlaceholder')}`}
          className="rounded-full bg-transparent placeholder:text-lg placeholder:text-white border-2 border-white w-full sm:w-96 py-1 px-6"
        />
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '0%' }}
          transition={{ type: 'spring', stiffness: 40 }}
          viewport={{ once: true }}
          className="min-w-[2.75rem] h-11 rounded-full border-2 hover:border-[3px] border-white grid place-content-center pl-1 cursor-pointer group"
        >
          <Arrow className="duration-200 group-hover:scale-110" />
        </motion.div>
      </div>
    </>
  )
}

export default FooterEmailSubscribe
