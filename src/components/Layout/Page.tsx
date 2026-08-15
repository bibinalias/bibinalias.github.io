import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = 'https://bibinalias.github.io';

const Page: NextPage<HomepageMeta> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const canonicalUrl = `${SITE_URL}${pathname}`;
  const ogImageUrl = `${SITE_URL}/1849594.png`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={canonicalUrl} key="canonical" rel="canonical" />

        <link href="/1849565.png" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content={ogImageUrl} property="og:image" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={ogImageUrl} name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
