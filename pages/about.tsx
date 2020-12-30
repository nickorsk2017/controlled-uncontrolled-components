import Head from 'next/head';
import {Layout} from "@main";
import {Content} from "@pagesBlocks/_about/";

function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content/>
    </>
  )
}

export default Layout(About);
