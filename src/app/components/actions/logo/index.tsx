import Image from 'next/image';
import styles from '../actions.module.css'
const Logo = ({addColor}: {addColor?:boolean}) => {
  return (
    <div className={[styles.logoContainer,  addColor ? styles.addColor : ''].join('')}>
      <Image src='/assets/images/logo/wachiii.png'
      className={[styles.logo, addColor ? styles.addColor : ''].join(' ')}
      alt='wachiii'
      width={150}
      height={140}
      objectFit='contain'/>
    </div>
  )
}

export default Logo;
