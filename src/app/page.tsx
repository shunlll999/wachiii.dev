'use client'

import { useEffect, useState} from 'react'
import styles from './page.module.css'
import ActionsBar from './components/actions'
import About from './components/about'
import { AppContext } from './context/applicationContent'
import HEIGH_COMPONENT from './context/componentsContextApp'
import Transition from '@/utils/transition-page-utils'
import Portfolio from './components/portfolio'

export type LocationType = 'about' | 'portfolio' | 'vblog' | 'contact'
type ActionType = Record<LocationType, any>
const actions: ActionType = {
  about: About,
  portfolio: Portfolio,
  vblog: () => <div>VBlog</div>,
  contact: () => <div>Contact</div>
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

  const redirectTo = (locationSelected: LocationType) => {
    Transition.out(actions[location], () => {
      setLocation(locationSelected)
    })

  }

  const value: any = {
    transition: Transition
  }

  return (
    <AppContext.Provider value={value}>
      <main className={styles.main}>
        <ActionsBar onAction={redirectTo} addBackground={menuBg} />
        <HEIGH_COMPONENT Component={actions[location]} />
      </main>
    </AppContext.Provider>
  )
}
