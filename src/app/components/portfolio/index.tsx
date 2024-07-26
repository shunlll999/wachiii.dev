'use client'
import styles from './portfolio.module.css'
import RecentCard from '../ui/comps/cards/recent'
import GalleryTabBar from '../ui/cagergory/bar'
import { useEffect, useState } from 'react'
import TopContentView from '../ui/comps/topContentView';
import { getDocuments, ResultType } from '@/app/connections/getData';
import { useRouter } from 'next/navigation'

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

type RedirectType = {
  id?: string
  pageName: string
}

const Portfolio = () => {
  const [gallery, setGallery] = useState(defaultGallery)
  const [isLoading, setIsLoading] = useState(false)
  const [top3Data, setTop3Data] = useState<any[]>([])
  const router = useRouter()

  const  onSelectType = (type: string) => {
    const newGallery = defaultGallery.filter((item) => item.type === type)
    setGallery(newGallery.length > 0 ? newGallery : defaultGallery);
  }

  const onSelectContent = (item?: RedirectType) => {
    if (item) {
      router.push(`portfolio/details?info=${item.pageName}⍵${item.id}`)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getDocuments('/portfoliosCollection', (docs) => {
      setTop3Data(docs)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className={styles['flex-layout']}>
      <TopContentView />
      <h2 className={styles.headline}>Top 3 Recents</h2>
      <div className={styles['recent-card-group']}>
        {isLoading ? 'LOADING' : ''}
        {top3Data.map((item, key) => (
          <RecentCard  key={key} type='top3' data={item} onSelected={() => onSelectContent({ id: item.id, pageName: item.name })} />
        ))}
      </div>
      <h3>Gallery</h3>
      <GalleryTabBar onSelectType={onSelectType} />
      <div className={styles['recent-card-group']}>
        {gallery.map((item, key) => (
           <RecentCard key={key} type={item.type} onSelected={() => onSelectContent()} data={top3[Math.round(Math.random() * 2)]}/>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
