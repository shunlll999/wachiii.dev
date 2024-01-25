;import View from './view';
import styles from './topContent.module.css'

const TopContentView = () => {
  return (
    <div className={styles.hero}>
     <div className={styles.title}>Top view content</div>
      <View />
  </div>
 )
}

export default TopContentView
