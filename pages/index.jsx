import meta_seo from "@/constants/meta_seo";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace(
      "https://vuwik.com/top-5-lifesaving-treatments-and-innovations-hospitals-in-mumbai"
    );
  }, []);
  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>{`${meta_seo.pages.home.title}`}</title>
        <meta name="author" content={meta_seo.author} />
        <meta name="description" content={meta_seo.pages.home.desc} />
        <meta name="keywords" content={meta_seo.keywords} />
        {/* facebook */}
        <meta property="og:title" content={`${meta_seo.pages.home.title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta_seo.pages.home.image} />

        {/* twitter */}
        <meta name="twitter:title" content={`${meta_seo.pages.home.title}`} />
        <meta name="twitter:description" content={meta_seo.pages.home.desc} />
        <meta name="twitter:image" content={meta_seo.pages.home.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <h1>{meta_seo.title}</h1>
      </main>
    </>
  );
}
