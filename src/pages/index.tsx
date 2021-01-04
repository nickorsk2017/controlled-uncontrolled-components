import Head from 'next/head';
import {Layout} from '@main';
import {Content} from '@pagesBlocks/_home/';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content />
    </>
  );
}

export default Layout(Home);
