'use strict';

import { useEffect, useMemo, useState } from 'react';
import styles from './about.module.css';
import gsap from 'gsap';
import Button from '../ui/button';

let step = 0;

const About = () => {
  const displayTexts = [
    `'m a Software engineer`,
    `'m a Front end engineer`,
    ' do Interactive applications',
    ' do Mobile developer',
    ` feel 🍊`,
    ` play ⚽️`,
    ` eat 🍰`
  ]

  const [display, setDisplay] =useState('')

  useEffect(() => {
    gsap.timeline({repeat:-1, repeatDelay:3})
    .to('#scramble', {duration: 0.7, opacity: 0, onComplete: () => {
      step = (step < displayTexts.length -1) ? step+1 : 0
      setDisplay(displayTexts[step]);
    }})
    .to('#scramble', {duration: 0.5, opacity: 1})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const myParagraph =  `Hello, I'm <span>Wachara Nilsonti</span>, though my friends affectionately call me <span>Wachiii</span>.I work as a Software Engineer in the bustling metropolis of Bangkok, Thailand 🇹🇭  <p>On this personal website, you'll discover not only my professional experiences but also insights into my personal life.</p>`;

  return (
    <div>
      <div className={styles.container}>
        <div>
          <div className={styles.avatar}/>
          <div className={styles['avatar-original']}/>
        </div>
        <div>
          <div className={styles['container-text']}>
            <h1 className={styles.textTitle}>Wachiii <span>Liv Rafael</span></h1>
            <h2 className={styles.textTitle}>{`I`}<span id='scramble'>{displayTexts[step]}</span></h2>
          </div>
          <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: myParagraph }} />
          <div className={styles['container-text-footer']}>
            <Button>Fine me more</Button>
          </div>
        </div>
      </div>
      <div className={styles.information}>
        information
      </div>
    </div>
  )
}

export default About;
