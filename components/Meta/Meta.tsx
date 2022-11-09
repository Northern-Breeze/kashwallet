import React from "react";
import Head from "next/head";

interface Props {
  keywords: string;
  title: string;
  description: string;
}

export default function Meta(props: Props) {
  const { keywords, title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content='2pay' key='title' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name='name' content='The Ultimate News' />
      <meta name='keywords' content={keywords} />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-B92XVTGRKR'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B92XVTGRKR');
        `,
        }}
      />
    </Head>
  );
}

Meta.defaultProps = {
  title: "2pay - payments resilience",
  keywords:
    "Peer 2 peer, payments, Invoicing, Scan to pay, Payment links, make payments easily",
  description:
    "2pay is a payments solution for small business and peer to peer user's",
};