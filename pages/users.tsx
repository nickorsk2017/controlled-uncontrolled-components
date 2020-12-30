import Head from 'next/head';
import {Layout} from "@main";
import {Content} from "@pagesBlocks/_users";

function Users() {
  return (
    <>
      <Head>
        <title>Users page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content/>
    </>
  )
}

export default Layout(Users);
