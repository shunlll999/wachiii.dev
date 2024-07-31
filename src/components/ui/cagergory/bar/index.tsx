import { useEffect, useState } from 'react'
import styles from './bar.module.css'
import { useSearchParams } from 'next/navigation';

const GalleryTabBar = ({ onSelectType, count }: any) => {
  const searchParams = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linkList, setLinkList] = useState([
    { value: 'All', href: '#all', active: true, total: 22 },
    { value: 'Web', href: '#web', active: false, total: 3 },
    { value: 'Games', href: '#games', active: false, total: 10 },
    { value: 'Mobile', href: '#mobile', active: false, total: 3 },
  ])

  const onSelectLink = (event: any) => {
    const hrefValue = event.target.href.split('#')[1]
    const linkIndex = linkList.findIndex((link) => link.href === `#${hrefValue}`)
    const newLinkList = linkList.map((link) => ({ ...link, active: false }))
    setCurrentIndex(linkIndex)
    newLinkList[linkIndex].active = true
    setLinkList(newLinkList);
    if (onSelectType) onSelectType(hrefValue);
  }

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['bar-container']}>
      {linkList.map(({ value, href, active }) => (
        <a
          key={value}
          className={[styles['action-button'], active ? styles['active'] : ''].join(' ')}
          href={href}
          onClick={onSelectLink}
        >
          {value}
        </a>
      ))}
      <div className={styles['total']}>{`${count} items`}</div>
    </div>
  )
}

export default GalleryTabBar
