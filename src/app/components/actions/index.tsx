import styles from './actions.module.css'
import Logo from './logo';
import Navigation from './navigation';
const ActionsBar = ({ addBackground }: { addBackground?: boolean }) => {
  return (
    <div className={[styles.actionContainer, addBackground ? styles.addBackground : ''].join(' ')}>
      <Logo addColor={addBackground} />
      <Navigation addBackground={addBackground} />
    </div>
  )
}

export default ActionsBar;
