'use client'
import styles from './portfolio.module.css'
import RecentCard, { CardDataType } from '../ui/comps/cards/recent'
import GalleryTabBar from '../ui/cagergory/bar'
import { useEffect, useState } from 'react'
import TopContentView from '../ui/comps/topContentView';;
import { useRouter } from 'next/navigation'
import { getDocuments, ResultType } from '@/connections/getData'
import { COLLECTIONS } from '@/constants/collections'
import Link from 'next/link'
import { PORT_TYPE } from '@/constants/enum'

const defaultGallery = [
  { type: 'web' },
  { type: 'games' },
  { type: 'games' },
  { type: 'web' },
  { type: 'web' },
  { type: 'mobile' },
  { type: 'mobile' },
];

const top3: CardDataType[] = [
  {
    type: PORT_TYPE.ALL,
    name: 'PaperBoy',
    describe: '>With supporting text below as a natural lead-in to additional content.',
    photo_url: '/assets/images/papaerboy_a.png',
    product_year: '2022',
    product_info: '1',
    viewed: 0
  },
  {
    type: PORT_TYPE.ALL,
    name: 'Preload game',
    describe: 'Preload the game',
    photo_url: '/assets/images/projects/html5Game/2014/game/cover.png',
    product_year: '2022',
    product_info: '2',
    viewed: 0
  },
  {
    type: PORT_TYPE.ALL,
    name: 'Kids games',
    describe: 'Game for kids',
    photo_url: '/assets/images/projects/kidsGame/2012/cover.png',
    product_year: '2012',
    product_info: '3',
    viewed: 0
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
      router.push(`/details?info=${item.pageName}⍵${item.id}`)
    }
  }

  const getAllTopThree = async () => {
    const documents: ResultType[] = await getDocuments(COLLECTIONS.PORTFOLIOS_COLLECTION)
    setIsLoading(false)
    setTop3Data(documents.sort(function(a, b){return b.viewed - a.viewed}).slice(0, 3).map((item) => ({ ...item, type: PORT_TYPE.TOP3 })))
  }

  useEffect(() => {
    setIsLoading(true)
    getAllTopThree()
  }, [])

  return (
    <div className={styles['flex-layout']}>
      <TopContentView />
      <h2 className={styles.headline}>Top 3 Recents</h2>
      <div className={styles['recent-card-group']}>
        {isLoading ? 'LOADING' : ''}
        {top3Data.map((item, key) => (
          <Link key={key} href={`/details?info=${item.name}⍵${item.id}`}><RecentCard type='top3' data={item} /></Link>
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
