import styles from './portfolio.module.css'
import RecentCard from '../ui/comps/cards/recent'
import GalleryTabBar from '../ui/cagergory/bar'
import { useState } from 'react'
import TopContentView from '../ui/comps/topContentView';

const defaultGallery = [
  { type: 'webs' },
  { type: 'webs' },
  { type: 'videos' },
  { type: 'videos' },
  { type: 'videos' },
  { type: 'games' },
  { type: 'games' },
  { type: 'games' },
  { type: 'images' },
  { type: 'images' },
  { type: 'webs' },
  { type: 'webs' },
  { type: 'webs' },
  { type: 'webs' },
  { type: 'mobiles' },
  { type: 'mobiles' },
  { type: 'mobiles' },
  { type: 'videos' },
  { type: 'videos' },
  { type: 'videos' },
  { type: 'games' },
  { type: 'games' },
];

const Portfolio = (props: any) => {
  const [gallery, setGallery] = useState(defaultGallery)

  const  onSelectType = (type: string) => {
    const newGallery = defaultGallery.filter((item) => item.type === type)
    setGallery(newGallery.length > 0 ? newGallery : defaultGallery);
  }

  const onSelectContent = (type: string) => {
    props.redirectTo('content', { type })
  }

  return (
    <div className={styles['flex-layout']}>
      <TopContentView />
      <h2 className={styles.headline}>Top 3 Recents</h2>
      <div className={styles['recent-card-group']}>
        <RecentCard type='top3' />
        <RecentCard type='top3' />
        <RecentCard type='top3' />
      </div>
      <h3>Gallery</h3>
      <GalleryTabBar onSelectType={onSelectType} />
      <div className={styles['recent-card-group']}>
        {gallery.map((item, key) => (
           <RecentCard key={key} type={item.type} onSelected={onSelectContent}/>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
