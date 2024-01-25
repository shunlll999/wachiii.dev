/* eslint-disable @next/next/no-img-element */
import styles from './topContent.module.css'

const imageURL = "/assets/images/papaerboy.png"
const containerWith = 1240
const imageHeight = 300
const View = () => {
  return (
    <div className={styles.coverTopcontentView}>
    <img className={styles.coverImage} src={imageURL} alt="wachiii" />
    <div className={styles.coverDescription}>
      <div>
        <h1>♽ Paper Boy</h1>
        <p>I&apos;ve planed to make this game for <span>web and mobile devices</span> using the tool called <span>cocoon</span></p>
        <p>the libraly for mobile game developent using javascript and HTML5 📟</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.badges}>
          <div className={styles.badge}><i className={`${styles.icon} ${styles.web}`}/></div>
          <div className={styles.badge}><i className={`${styles.icon} ${styles.game}`}/></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
