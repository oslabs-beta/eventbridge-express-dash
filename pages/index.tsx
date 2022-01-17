import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div> 
      <Head>
        <title>ExpressBridge Dashboard</title>
        <meta name="description" content="ExpressBridge Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <Nav />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> 
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
