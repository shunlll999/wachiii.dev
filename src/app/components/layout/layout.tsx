'use client'
import '../../../app/globals.css'
import { Inter } from 'next/font/google'
import ActionsBar from '../actions'
import styles from './layout.module.css'
import { LocationType } from '@/app/page'
import { useEffect, useState } from 'react'
import Metadata from './metaData'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [menuBg, setMenuBg] = useState<boolean>(false)
  const redirectTo = (locationSelected: LocationType, params?: any) => {
    // router.push(locationSelected)
    console.log(locationSelected, params)
  }

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window === undefined) return
    window.addEventListener("scroll",() => {
      setMenuBg(window.scrollY > 10)
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <Metadata seoTitle='wAiii' seoDescription='wAiii' />
      </head>
      <body className={inter.className}>
        <ActionsBar onAction={redirectTo} addBackground={menuBg} />
        <div className={`${styles['layout-content-container']} ${!menuBg && styles['long']}`}>
          {children}
        </div>
        <iframe src='/wave/index.html' style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100%', zIndex: -1, border: 'none' }}/>
      </body>
    </html>
  )
}
