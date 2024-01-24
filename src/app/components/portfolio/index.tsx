import styles from './portfolio.module.css'
import TopContentView from './topContentView'
const Portfolio = () => {
  return (
    <div className={styles['flex-layout']}>
      <TopContentView />
    </div>
  )
}

export default Portfolio
