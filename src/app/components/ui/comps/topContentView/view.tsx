/* eslint-disable @next/next/no-img-element */
import styles from './topContent.module.css'

const imageURL = "/assets/images/papaerboy.png"
const containerWith = 1240
const imageHeight = 300
const View = () => {
  return (
    <div className={styles.displayImageContainer}>
      <div className={styles.coverTopcontentView}>
      <img className={styles.coverImage} src={imageURL} alt="wachiii" />
      <div className={styles.coverDescription}>
        <div className={styles.description}>
          <h1>♽ Paper Boy</h1>
          <p>I&apos;ve planed to make this game for <span>web and mobile devices</span> using the tool called <span>cocoon</span></p>
          <p>the libraly for mobile game developent using javascript and HTML5 📟</p>
        </div>
      </div>
      </div>
      <img className={styles.displayImage} src={imageURL} alt="wachiii" />
    </div>
  )
}

export default View
