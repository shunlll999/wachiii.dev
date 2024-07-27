'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';
import gsap from 'gsap';
import Button from '../ui/button';
import Details from './details';

let step = 0;

const About = () => {
  const displayTexts = [
    `'m a Software engineer`,
    `'m a Front end engineer`,
    ' do Interactive applications',
    ' do Mobile developer',
    ` feel 🍊`,
    ` play 🎮`,
    ` eat 🍰`,
    ` love to hangout with friends 🎉`,
  ]

  const [display, setDisplay] =useState('')
  const [currentStep, setStep] = useState(0)
  const [show, setPopup] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const findMoreInfomation = () => {
    setPopup(!show)
  }

  useEffect(() => {
    gsap.timeline({repeat:-1, repeatDelay:3})
    .to('#scramble', {duration: 0.7, opacity: 0, onComplete: () => {
      step = (step < displayTexts.length -1) ? step+1 : 0
      setDisplay(displayTexts[step])
      setStep(step)
    }})
    .to('#scramble', {duration: 0.5, opacity: 1})

    console.group('👋 Hello, I\'m Wachiii Liv Rafael')
    console.log(`I work as a Software Engineer in the bustling metropolis of Bangkok, Thailand 🇹🇭, On this personal website, you'll discover not only my professional experiences but also insights into my personal life. `)
    console.groupEnd()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const myParagraph =  `Hello, I'm <span class="subTitle">Wachara Nilsonti</span>, though my friends affectionately call me <span>Wachiii</span>. I work as a Software Engineer in the bustling metropolis of Bangkok, Thailand 🇹🇭  <p>On this personal website, you'll discover not only my professional experiences but also insights into my personal life.</p>`;
  return (
    <div id="panel" className={styles['flex-layout']}>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}/>
          <div className={styles['avatar-original']}/>
        </div>
        <div className={styles.informationContainer}>
          <div>
            <div className={styles['container-text']}>
              <h1 className={styles.title}>Wachiii <span className={styles.subTitle}>Liv Rafael</span></h1>
              <h2 className={[styles.title, styles.small].join(' ')}>{currentStep === displayTexts.length -1 ? 'And I' : 'I'}<span className={styles.subTitle} id='scramble'>{display}</span></h2>
            </div>
            <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: myParagraph }} />
          </div>
          <div className={styles['container-text-footer']} onClick={findMoreInfomation}>
            <Button><span className={styles['btn-text']}>Fine me more</span></Button>
          </div>
        </div>
      </div>
      <Details displayTexts={display} myParagraph={myParagraph} show={show} onClose={findMoreInfomation} />
    </div>
  )
}

export default About;
