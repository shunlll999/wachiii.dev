import { LocationType } from '@/app/page';
import styles from './actions.module.css'
import Logo from './logo';
import Navigation from './navigation';
const ActionsBar = ({ onAction, addBackground }: { onAction: (location: LocationType) => void, addBackground?: boolean }) => {
  return (
    <div className={[styles.actionContainer, addBackground ? styles.addBackground : ''].join(' ')}>

      <Logo />
      <Navigation onAction={onAction} />
    </div>
  )
}

export default ActionsBar;
