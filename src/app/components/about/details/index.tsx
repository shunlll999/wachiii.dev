import styles from '../about.module.css';
import { CloseButton } from '../../ui/button';
const Details = ({ displayTexts, myParagraph, show, onClose }: { displayTexts: string, myParagraph: string, show: boolean, onClose: () => void }) => {
  return (
    <div className={[styles.cover, show ? styles.show : ''].join(' ')}>
      <div className={`${styles.information} ${styles['add-long']}`}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className={styles.informationDetail}>
          <div className={styles['avatar-circle']} />
          <h3 className={styles['text-title']}>Wachiii <span>Liv Rafael</span></h3>
          <div className={styles['text-title_subtitle']}><span>Software</span> Engineer</div>
          <ul className={styles['personal-detail']}>
            <li>Wachara Nilsonti</li>
            <li>Rankhumhang 30/1, 2186/209, BKK (TH)</li>
            <li>+66 81 123 4567</li>
            <li>rafael5715@gmail.com</li>
          </ul>
        </div>
        <div className={styles['information-more-detail']}>
          <div className={styles['container-text']}>
            <h1>Wachiii <span>Liv Rafael</span></h1>
            <h2>{`I`}<span id='scramble'>{displayTexts}</span></h2>
          </div>
          <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: myParagraph }} />
          <section className={styles['section-container']}>
            <div>Quality Services</div>
            <ul>
              <li>Website developemnt</li>
              <li>Mobile developemnt</li>
            </ul>
          </section>
          <section className={styles['section-container']}>
            <div>Experiences</div>
            <ul className={styles['hide']}>
              <li>
                <span>ReactJS</span><br />
                <progress data-value="85" className={styles['progress-bar']} value="85" max="100" />
              </li>
              <li>
                <span>React Native</span><br />
                <progress data-value="77" className={styles['progress-bar']} value="77" max="100" />
              </li>
              <li>
                <span>Flutter</span><br />
                <progress data-value="32" className={styles['progress-bar']} value="32" max="100" />
              </li>
              <li>
                <span>C# (Unity)</span><br />
                <progress data-value="50" className={styles['progress-bar']} value="50" max="100" />
              </li>
              <li>
                <span>NodeJS</span><br />
                <progress data-value="60" className={styles['progress-bar']} value="60" max="100" />
              </li>
            </ul>
          </section>
          <section className={styles['section-container']}>
            <div>Language Skills</div>
            <ul>
              <li>TH</li>
              <li>EN</li>
            </ul>
          </section>
          <section className={styles['section-container']}>
            <div>Education Timeline</div>
            <ul>
              <li>TH</li>
              <li>EN</li>
            </ul>
          </section>
          <section className={styles['section-container']}>
            <div>Working Timeline</div>
            <ul>
              <li>TH</li>
              <li>EN</li>
            </ul>
          </section>
          <section className={styles['section-container']}>
            <div>Clients Feedback</div>
            <ul>
              <li>TH</li>
              <li>EN</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Details
