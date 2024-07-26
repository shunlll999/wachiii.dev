'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import { useEffect, useState } from 'react'
import Metadata from './components/meta/metaData'
import ActionsBar from './components/actions'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [menuBg, setMenuBg] = useState<boolean>(false)

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
        <link rel="icon" href="/assets/images/logo/wachiii-fav.ico" type='image/x-icon' sizes='32x32' />
      </head>
      <body className={inter.className}>
        <ActionsBar addBackground={menuBg} />
        <div className={`${styles['layout-content-container']} ${!menuBg && styles['long']}`}>
          {children}
        </div>
        <iframe src='/wave/index.html' style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100%', zIndex: -1, border: 'none' }}/>
      </body>
    </html>
  )
}
