'use client'

import Metadata from "@/components/meta/metaData"
import getDocumentByID, { getDocument, ResultType } from "@/connections/getData"
import { COLLECTIONS } from "@/constants/collections"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Markdown from 'react-markdown'


const PortfolioPage = () => {
  const params = useSearchParams()
  const tip =  params.get('info')?.toString().search('⍵')
  const details = tip !== -1 ? params.get('info')?.toString().split('⍵') : params.get('info')?.toString().split('%E2%8D%B5') || ['about', '']
  const [itemData, setItemData] = useState<ResultType>({} as ResultType)

  const getData = async () => {
    if (details) {
      const dataSnapShot = await getDocumentByID(COLLECTIONS.PORTFOLIOS_COLLECTION, details[1])
      const result =  dataSnapShot.result?.data()
      const info = await getDocument(result?.product_info)
      const data = {
        ...result,
        product_info: info.data() as { description: string }
      }
      setItemData(data as ResultType)
    }
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const markdown = `# Hi, here this is *${itemData.name}*! \n\n ${itemData.describe}`

  return (
    <div>
      <head>
        <Metadata seoTitle={`wAiii - Portfolio::${itemData.name}}`} seoDescription='wAiii' />
      </head>
      <div style={{ textAlign: 'center', padding: 120 }}>
      <h1 style={{ fontSize: 60, margin: '0 0 2rem' }}>{itemData.name}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={itemData.photo_url} alt={itemData.name} width={400} height={'auto'}/>
      <br />
      <br />
      <Markdown>{markdown}</Markdown>
      <section style={{ fontSize: 20, margin: '2rem 0 0' }}>
        {itemData.product_info?.description}
        <div style={{ color: '#9f0035', fontWeight: 'bold', margin: '2rem 0 2rem' }}>ALL CONTENT IS UNDERCONSTRUCTION</div>
      </section>
      </div>
    </div>
  )
}

export default PortfolioPage
