/* eslint-disable @next/next/no-img-element */
import styles from './recent.module.css'

const RecentCard = ({ type }: { type: string }) => {
  return (
    <div data-type={type} className={styles.card}>
      <img className={styles['card-body-image']} src='/assets/images/papaerboy_a.png' alt='wachiii' />
      <h5 className={styles['card-title']}>PaperBoy the game</h5>
      <p className={styles['card-description']}>With supporting text below as a natural lead-in to additional content.</p>
      <div className={styles.badges}>
        <div className={styles.badge}><i className={`${styles.icon} ${styles.web}`}/></div>
        <div className={styles.badge}><i className={`${styles.icon} ${styles.game}`}/></div>
      </div>
    </div>
  )
}

export default RecentCard
