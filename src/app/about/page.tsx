'use client'
import About from '../components/about'
import RootLayout from '../components/layout/layout'
import Metadata from '../components/layout/metaData'

const AboutPage = () => {
  console.log('SamplePage view')
  return (
    <RootLayout>
      <About />
    </RootLayout>
  )
}

export default AboutPage
