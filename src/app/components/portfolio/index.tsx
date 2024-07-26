import styles from './portfolio.module.css'
import RecentCard from '../ui/comps/cards/recent'
import GalleryTabBar from '../ui/cagergory/bar'
import { useState } from 'react'
import TopContentView from '../ui/comps/topContentView';
import { describe } from 'node:test';

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

const top3 = [
  {
    type: 'top3',
    name: 'PaperBoy',
    describe: '>With supporting text below as a natural lead-in to additional content.',
    photo_url: '/assets/images/papaerboy_a.png',
    product_year: '2022',
    product_info: 1,
  },
  {
    type: 'top3',
    name: 'Preload game',
    describe: 'Preload the game',
    photo_url: '/assets/images/projects/html5Game/2014/game/cover.png',
    product_year: '2022',
    product_info: 2,
  },
  {
    type: 'top3',
    name: 'Kids games',
    describe: 'Game for kids',
    photo_url: '/assets/images/projects/kidsGame/2012/cover.png',
    product_year: '2012',
    product_info: 3,
  }
]

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
        {/* <RecentCard type='top3' />
        <RecentCard type='top3' />
        <RecentCard type='top3' /> */}
        {top3.map((item, key) => (
           <RecentCard  key={key} type='top3' data={item} />
        ))}
      </div>
      <h3>Gallery</h3>
      <GalleryTabBar onSelectType={onSelectType} />
      <div className={styles['recent-card-group']}>
        {/* {gallery.map((item, key) => (
           <RecentCard key={key} type={item.type} onSelected={onSelectContent}/>
        ))} */}
      </div>
    </div>
  )
}

export default Portfolio
