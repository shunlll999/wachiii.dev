import { LocationType } from '@/app/page'
import styles from '../actions.module.css'
import { useState } from 'react'
const Navigation = ({ onAction, addBackground: color }: { onAction: (location: LocationType) => void, addBackground?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onActionLink = (link: LocationType) => {
    if (onAction) onAction(link)
  }

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const promptStyle = [styles.item, color ? styles.addColor : ''].join(' ')

  return (
    <div className={styles.navigationBarContainer}>
      <div className={`${styles.berger} ${isOpen && styles.open}`} onClick={onToggleMenu}>
        <span className={`${styles.line} ${styles.a} ${!isOpen && styles.off}`}></span>
        <span className={`${styles.line} ${styles.c} ${!isOpen && styles.off}`}></span>
        <span className={`${styles.line} ${styles.b} ${!isOpen && styles.off}`}></span>
      </div>
      <ul className={`${styles.navigationBar} ${isOpen && styles.openMenu}`}>
        <li className={promptStyle}><a href='/about'>About</a></li>
        <li className={promptStyle}><a href='/portfolio'>Portfolio</a></li>
        <li className={promptStyle}><a href='/vblog'>VBlog</a></li>
        <li className={promptStyle}><a href='/contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation;
