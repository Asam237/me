import Head from 'next/head'
import Layout from '../components/layout'
import Education from '../components/sections/education'
import Experience from '../components/sections/experience'
import Interested from '../components/sections/interests'
import Intro from '../components/sections/intro'
import Projects from '../components/sections/projects'
import Skills from '../components/sections/skills'

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
        <Education />
        <Skills />
        <Interested />
        <Projects />
      </Layout>
    </>
  )
}
