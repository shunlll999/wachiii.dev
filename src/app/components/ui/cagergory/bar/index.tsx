import { useEffect, useState } from 'react'
import styles from './bar.module.css'
import { useSearchParams } from 'next/navigation';

const GalleryTabBar = ({ onSelectType }: any) => {
  const searchParams = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linkList, setLinkList] = useState([
    { value: 'All', href: '#all', active: true, total: 22 },
    { value: 'Videos', href: '#videos', active: false, total: 4 },
    { value: 'Web', href: '#webs', active: false, total: 3 },
    { value: 'Games', href: '#games', active: false, total: 10 },
    { value: 'Mobile', href: '#mobiles', active: false, total: 3 },
    { value: 'Photos', href: '#images', active: false, total: 2 },
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
    console.log('searchParams', searchParams)
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
      <div className={styles['total']}>{`${linkList[currentIndex].total} items`}</div>
    </div>
  )
}

export default GalleryTabBar
