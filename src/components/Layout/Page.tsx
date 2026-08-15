import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = 'https://bibinalias.github.io';

// Structured data so search engines (and recruiter tools) understand who this site is about.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bibin Alias',
  jobTitle: 'Embedded Software Engineer',
  url: SITE_URL,
  image: `${SITE_URL}/1849594.png`,
  email: 'mailto:bibinalias1@gmail.com',
  worksFor: {
    '@type': 'Organization',
    name: 'Bosch Global Software Technologies',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Embedded C',
    'Firmware Development',
    'Device Drivers',
    'RTOS',
    'Embedded Linux',
    'Wi-SUN',
    'NB-IoT',
    'Bluetooth',
    'Wi-Fi',
    'Z-Wave',
    'Python',
  ],
  sameAs: [
    'https://www.linkedin.com/in/bibinalias/',
    'https://github.com/bibinalias',
    'https://www.instagram.com/bibin__alias/',
    'https://www.facebook.com/bibinaliass',
  ],
};

const Page: NextPage<HomepageMeta> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const canonicalUrl = `${SITE_URL}${pathname}`;
  const ogImageUrl = `${SITE_URL}/1849594.png`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* let search engines index and follow this site */}
        <meta content="index, follow" name="robots" />

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

        {/* Structured data (schema.org Person) for rich results / recruiter discoverability */}
        <script
          dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
          type="application/ld+json"
        />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
