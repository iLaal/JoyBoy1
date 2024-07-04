// Import the action creators 'incremented' and 'decremented' from the 'counterSlice'.
import meta_seo from "@/constants/meta_seo";
import { decremented, incremented } from "@/src/store/features/counterSlice";

// Import the 'Head' component from 'next/head' to set document head metadata.
import Head from "next/head";

// Import 'useDispatch' and 'useSelector' hooks from 'react-redux' to interact with the Redux store.
import { useDispatch, useSelector } from "react-redux";

// Define your main application component.
export default function Home() {
  // Use 'useSelector' to select the 'counter' state from the Redux store.
  const { value } = useSelector((state) => state.counter);

  // Use 'useDispatch' to get access to the Redux store's 'dispatch' function.
  const dispatch = useDispatch();

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
      <h1>
          {meta_seo.title}
        </h1>
      </main>
    </>
  );
}
