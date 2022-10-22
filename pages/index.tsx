import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Localeap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* header */}
      <Header />
      {/*  banner */}
      <Banner />

    </div>
  )
}

export default Home
