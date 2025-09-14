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

type RedirectType = {
  id?: string
  pageName: string
}

const Portfolio = () => {
  const [gallery, setGallery] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [top3Data, setTop3Data] = useState<any[]>([])
  const [portfolioData, setPortFolioData] = useState<any[]>([])
  const router = useRouter()

  const  onSelectType = (type: string) => {
    const newGallery = portfolioData.filter((item) => item.type === type)
    setGallery(newGallery.length > 0 ? newGallery : portfolioData);
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
    setPortFolioData(documents);
    setGallery(documents as any);
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
      <GalleryTabBar onSelectType={onSelectType} count={gallery.length} />
      <div className={styles['recent-card-group']}>
        {gallery.map((item, key) => (
           <RecentCard key={key} type={item.type} onSelected={() => onSelectContent(item)} data={item}/>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
