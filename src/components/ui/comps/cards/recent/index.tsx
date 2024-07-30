/* eslint-disable @next/next/no-img-element */
import { PORT_TYPE } from '@/constants/enum'
import styles from './recent.module.css'

export type CardDataType = {
  type: PORT_TYPE
  name: string
  describe: string
  photo_url: string
  product_year: string
  product_info: string
  viewed: number
}

type RecentCardProps = {
  onSelected?: () => void
  data: CardDataType | any
  type: string
}

const RecentCard = ({ type, onSelected, data }: RecentCardProps) => {
  return (
    <div data-type={type} className={styles.card} onClick={() => onSelected && onSelected()}>
      {data.type === PORT_TYPE.TOP3 && <div className={styles['view-badge']}>{data.viewed}</div>}
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
