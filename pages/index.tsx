import Head from 'next/head'
import Layout from '../components/layout'
import Experience from '../components/sections/experience'
import Intro from '../components/sections/intro'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abba Sali Aboubakar Mamate</title>
        <meta name="description" content="Top mangas apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Intro />
        <Experience />
      </Layout>
    </>
  )
}
