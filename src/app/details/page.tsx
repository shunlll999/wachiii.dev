'use client'

import getDocumentByID, { getDocument, ResultType } from "@/app/connections/getData"
import RootLayout from "@/app/layout"
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
      const dataSnapShot = await getDocumentByID('/portfoliosCollection', details[1])
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
    <RootLayout>
      <div style={{ textAlign: 'center', padding: 120 }}>
      <h1 style={{ fontSize: 60, margin: '0 0 2rem' }}>{itemData.name}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={itemData.photo_url} alt={itemData.name} width={400} height={'auto'}/>
      <br />
      <br />
      <Markdown>{markdown}</Markdown>
      <section style={{ fontSize: 20, margin: '2rem 0 2rem' }}>
        {itemData.product_info?.description}
      </section>
      </div>
    </RootLayout>
  )
}

export default PortfolioPage
