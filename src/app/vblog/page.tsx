import RootLayout from '../components/layout/layout'
import styles from './vblog.module.css'

const VBlogPage = () => {
  return (
    <RootLayout>
      <div className={styles['vblog-container']}>VBLog</div>
    </RootLayout>
  )
}

export default VBlogPage;
