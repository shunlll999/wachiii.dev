'use client'

import BackDoorForm from '@/components/hidden/form';
import HiddenAddContent from '@/components/hidden/add';
import { useState } from 'react';
import Metadata from '@/components/meta/metaData';

const HiddenPage = () => {
  const [response, setResponse] = useState<any>(null)
  const [isAuth, setAuth] = useState<boolean>(false)
  return (
    <div>
      <head>
        <Metadata seoTitle='WACHIII ADDING CONTENT' seoDescription='wAiii' />
      </head>
      {isAuth && <HiddenAddContent response={response} killedBackdoor={() => setAuth(false)} />}
      <BackDoorForm onAuthSucceess={(res) => {
        setResponse(res)
        setAuth(true)
      }} />
    </div>
  )
}

export default HiddenPage;
