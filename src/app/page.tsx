'use client'

import { useEffect, useRef, useState} from 'react'
import styles from './page.module.css'
import ActionsBar from './components/actions'
import About from './components/about'

export type LocationType = 'about' | 'portfolio' | 'vblog' | 'contact'
type ActionType = Record<LocationType, JSX.Element>
const actions: ActionType = {
  about: <About />,
  portfolio: <div>Portfolio</div>,
  vblog: <div>VBlog</div>,
  contact: <div>Contact</div>
}

export default function Home() {
  const [menuBg, setMenuBg] = useState<boolean>(false)
  const [location, setLocation] = useState<LocationType>('about')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window === undefined) return
    window.addEventListener("scroll",() => {
      setMenuBg(window.scrollY > 10)
    });
  }, []);

  return (
    <main className={styles.main}>
      <ActionsBar onAction={setLocation} addBackground={menuBg} />
      {actions[location]}
    </main>
  )
}
