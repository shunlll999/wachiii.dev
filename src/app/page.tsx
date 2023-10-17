'use client'

import { useState} from 'react'
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
  const [location, setLocation] = useState<LocationType>('about')
  return (
    <main className={styles.main}>
      <ActionsBar onAction={setLocation} />
      {actions[location]}
    </main>
  )
}
