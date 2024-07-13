'use client'
import About from '../components/about'
import RootLayout from '../components/layout/layout'
import Portfolio from '../components/portfolio'

const AboutPage = () => {
  console.log('SamplePage view')
  return (
    <RootLayout>
      <About />
    </RootLayout>
  )
}

export default AboutPage
