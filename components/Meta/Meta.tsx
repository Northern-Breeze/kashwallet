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
      <meta property='og:title' content='Kashwallet' key='title' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name='name' content='Kashwallet' />
      <meta name='keywords' content={keywords} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Kashwallet - payments resilience",
  keywords:
    "Peer 2 peer, payments, Invoicing, Scan to pay, Payment links, make payments easily",
  description:
    "Kashwallet is a payments solution for peer to peer user's",
};