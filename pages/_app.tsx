import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import GlobalStyle from '../components/GlobalStyles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  return (
    ready && (
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  );
}

export default MyApp;
