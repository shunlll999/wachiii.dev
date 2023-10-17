import Image from 'next/image';
import styles from '../actions.module.css'
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image src='/assets/images/logo/wachiii.png'
      className={styles.logo}
      alt='wachiii'
      width={150}
      height={140}
      objectFit='contain'/>
    </div>
  )
}

export default Logo;
