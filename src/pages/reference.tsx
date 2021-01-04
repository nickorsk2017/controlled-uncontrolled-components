import Head from 'next/head';
import {Layout} from '@main';
import {Content} from '@pagesBlocks/_reference';

function Users(): JSX.Element {
  return (
    <>
      <Head>
        <title>Uncontrolled components</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content />
    </>
  );
}

export default Layout(Users);
