import { LocationType } from '@/app/page';
import styles from './actions.module.css'
import Logo from './logo';
import Navigation from './navigation';
const ActionsBar = ({ onAction }: { onAction: (location: LocationType) => void }) => {
  return (
    <div className={styles.actionContainer}>
      <Logo />
      <Navigation onAction={onAction} />
    </div>
  )
}

export default ActionsBar;
