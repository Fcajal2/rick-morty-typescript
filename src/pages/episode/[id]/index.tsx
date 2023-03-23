import Head from "next/head";
import Link from "next/link";
import CharacterTile from "../../../components/character";
import styles from "../../../styles/Main.module.css";
import Navbar from "../../../components/navbar";

const defaultEndpoint = "https://rickandmortyapi.com/api/episode/";

export async function getServerSideProps({
  query,
}: {
  query: Record<string, string[]>;
}) {
  const { id } = query;
  //fetching data
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const result = await res.json();
  //send fetched data to the page compenent via props
  return {
    props: {
      result,
    },
  };
}

export default function Location({ result }: { result: ResultEp }) {
  return (
    <>
      <Head>
        <title>{result.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h1>{result.name}</h1>

        <div>
          <div>
            <h2>Episode Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> {result.name} - {result.episode}
              </li>
              <li>
                <strong>Air Date:</strong> {result.air_date}
              </li>
            </ul>
          </div>
          <div>
            {result.characters.length ? (
              <div>
                <h1>Characters</h1>
                <ul className={styles.character_tiles}>
                  {result.characters.map((character) => {
                    return <CharacterTile endpoint={character} />;
                  })}
                </ul>
              </div>
            ) : (
              <h1>No Appearing Characters</h1>
            )}
          </div>
        </div>
        <p>
          <Link href="/episode">Back to All Episodes</Link>
        </p>
      </main>
    </>
  );
}
