import { LocationType } from '@/app/page'
import styles from '../actions.module.css'
const Navigation = ({ onAction }: { onAction: (location: LocationType) => void }) => {
  const onActionLink = (link: LocationType) => {
    if (onAction) onAction(link)
  }
  return (
    <ul className={styles.navigationBar}>
      <li className={styles.item}><a onClick={() => onActionLink('about')}>About</a></li>
      <li className={styles.item}><a onClick={() => onActionLink('portfolio')}>Portfolio</a></li>
      <li className={styles.item}><a onClick={() => onActionLink('vblog')}>VBlog</a></li>
      <li className={styles.item}><a onClick={() => onActionLink('contact')}>Contact</a></li>
    </ul>
  )
}

export default Navigation;
