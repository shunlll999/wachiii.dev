import Metadata from '@/components/meta/metaData';
import styles from './vblog.module.css'

const VBlogPage = () => {
  return (
    <div>
      <head>
        <Metadata seoTitle='wAiii - VBLog' seoDescription='wAiii' />
      </head>
      <div className={styles['vblog-container']}>VBLog</div>
    </div>
  )
}

export default VBlogPage;
