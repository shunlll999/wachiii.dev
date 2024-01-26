import styles from '../portfolio/portfolio.module.css'
import TopContentView from '../ui/comps/topContentView'

const ContentView = () => {
  console.log('content view')
  return (
    <div className={styles['flex-layout']}>
      <TopContentView />
    </div>
  )
}

export default ContentView
