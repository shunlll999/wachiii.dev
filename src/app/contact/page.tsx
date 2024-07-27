import Metadata from '@/components/meta/metaData';
import styles from './vblog.module.css'

const ContactMePage = () => {
  return (
    <div>
      <head>
        <Metadata seoTitle="wAiii - Contact me" seoDescription='wAiii' />
      </head>
      <div className={styles['vblog-container']}>Contact 📲</div>
    </div>
  )
}

export default ContactMePage;
