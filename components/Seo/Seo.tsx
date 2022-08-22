import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  favicon?: string;
}

export const Seo: FC<Props> = ({ title, description, favicon }) => {
  const faviconIcon = favicon ? favicon : "/favicon.ico";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={faviconIcon} />
    </Head>
  );
};
