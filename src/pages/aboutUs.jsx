"use client"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'aboutUs',
        
      ])),
    },
  }
}

export default function AboutUs(){
  const { t } = useTranslation('aboutUs')

    return (
        <>
            <span>{t('title')}</span>
        </>
    )
}

