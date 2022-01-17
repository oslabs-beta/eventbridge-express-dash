import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import ActionForm from '../components/ActionForm'

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
        <div className="md:flex md:items-center md:justify-between py-4 px-20">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate">Submit Action</h2>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <ActionForm />
        </div>
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
