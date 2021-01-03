import Head from 'next/head'
import { Layout } from '@main'
import { Content } from '@pagesBlocks/_throttle'

function Users() {
  return (
    <>
      <Head>
        <title>Uncontrolled components</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content />
    </>
  )
}

export default Layout(Users)
