/* eslint-disable @next/next/no-img-element */
import styles from './recent.module.css'

export type CardDataType = {
  type: string
  name: string
  describe: string
  photo_url: string
  product_year: string
  product_info: number
}

type RecentCardProps = {
  onSelected?: (type: string) => void
  data: CardDataType
  type: string
}

const RecentCard = ({ type, onSelected, data }: RecentCardProps) => {
  return (
    <div data-type={type} className={styles.card} onClick={() => onSelected && onSelected(type)}>
      <img className={styles['card-body-image']} src={data.photo_url} alt={data.name} />
      <h5 className={styles['card-title']}>{data.name}</h5>
      <p className={styles['card-description']}>{data.describe}</p>
      <div className={styles.badges}>
        <div className={styles.badge}><i className={`${styles.icon} ${styles.web}`}/></div>
        <div className={styles.badge}><i className={`${styles.icon} ${styles.game}`}/></div>
      </div>
    </div>
  )
}

export default RecentCard
