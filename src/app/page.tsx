'use client'

import { useEffect, useMemo, useState} from 'react'
import styles from './page.module.css'
import ActionsBar from './components/actions'
import About from './components/about'
import { AppContext } from './context/applicationContent'
import HEIGH_COMPONENT from './context/componentsContextApp'
import Transition from '@/utils/transition-page-utils'
import Portfolio from './components/portfolio'
import ContentView from './components/content'
import { useSearchParams, useRouter } from 'next/navigation'

export type LocationType = 'about' | 'portfolio' | 'vblog' | 'contact' | 'content'
type ActionType = Record<LocationType, any>
const actions: ActionType = {
  about: About,
  portfolio: Portfolio,
  vblog: () => <div>VBlog</div>,
  contact: () => <div>Contact</div>,
  content: ContentView
}

export default function Home() {
  const [menuBg, setMenuBg] = useState<boolean>(false)
  const [location, setLocation] = useState<LocationType>('about')
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const page = searchParams.get('page')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window === undefined) return
    window.addEventListener("scroll",() => {
      setMenuBg(window.scrollY > 10)
    });
  }, []);

  const redirectTo = (locationSelected: LocationType, params?: any) => {
    router.push(`?page=${locationSelected}`)
    Transition.out(actions[location], () => {
      setLocation(locationSelected)
      setLoading(false)
    })

  }

  const preparingRedirect = (locationSelected: LocationType, params?: any) => {
    redirectTo(locationSelected, params)
  }

  useMemo(() => {
    setLoading(true)
    if (page) {
      redirectTo(page as LocationType)
    } else {
      if (location) redirectTo(location)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])



  const value: any = {
    transition: Transition,
    redirectTo: preparingRedirect,
  }

  return (
    <AppContext.Provider value={value}>
      <main className={styles.main}>
        <ActionsBar onAction={redirectTo} addBackground={menuBg} />
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          top: 0,
          left: 0,
          zIndex: 1,
          display: loading ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          LOADING...
        </div>
        <HEIGH_COMPONENT Component={actions[location]} />
      </main>
    </AppContext.Provider>
  )
}
