import Head from "next/head";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Head>
        <title>R&M Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/" as={`/`}>
          <h1>Rick and morty Wiki</h1>
        </Link>
        <p>Welcome to the wiki</p>

        <Link href="/character" as="/character">
          <h2>Characters</h2>
        </Link>
        <Link href="/location" as="/location">
          <h2>Locations</h2>
        </Link>
        <Link href="/episode" as="/episode">
          <h2>Episodes</h2>
        </Link>
      </main>
    </>
  );
}
