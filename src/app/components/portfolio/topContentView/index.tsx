import styles from './topContent.module.css'
import Image from 'next/image';

const imageURL = "/assets/images/avatars/avatar4.jpg"
const containerWith = 1440
const imageHeight = 450
const TopContentView = () => {
  return (
    <div>
      <h1 style={{ margin: '0 0 3rem' }}>Top view content</h1>
      <div className={styles.coverTopcontentView}>
        <Image className={styles.coverImage} width={containerWith} height={imageHeight} src={imageURL} alt="wachiii" />
        <div className={styles.coverDescription}>
          <div>
            <h2>Wachiii <span>Liv Rafael</span></h2>
            <p>Hello, I'm <span>Wachara Nilsonti</span>, though my friends affectionately call me <span>Wachiii</span>.</p>
            <p>I work as a Software Engineer in the bustling metropolis of Bangkok, Thailand 🇹🇭</p>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttons}>
              <button>web</button>
              <button>apple</button>
              <button>android</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopContentView
