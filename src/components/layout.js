import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
export default function Layout({ children }) {
  return (
    <>
      <div className='bg-[#F4F7FC] dark:bg-[#272B34] flex flex-col h-screen justify-between'>
      <Head>
        <title>InnovTech</title>
      </Head>
        <Navbar />
        <main className='py-12 mt-12  bg-[#F4F7FC] dark:bg-[#272B34] '><div className='container'>{children}</div></main>
        <Footer />
      </div>
    </>
  )
}