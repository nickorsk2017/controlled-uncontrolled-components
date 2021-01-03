import Head from 'next/head'
import { Layout } from '@main'
import { Content } from '@pagesBlocks/_controlled'

function Users() {
  return (
    <>
      <Head>
        <title>Controlled components</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content />
    </>
  )
}

export default Layout(Users)
