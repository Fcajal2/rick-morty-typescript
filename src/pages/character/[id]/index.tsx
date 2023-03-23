import Head from "next/head";
import Link from "next/link";
import EpisodeList from "../../../components/episodes";
import styles from "../../../styles/Main.module.css";
import Navbar from "../../../components/navbar";

const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

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

export default function Charater({ result }: { result: ResultChar }) {
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
            <img src={result.image} alt={result.name} />
          </div>
          <div>
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> {result.name}
              </li>
              <li>
                <strong>Status:</strong> {result.status}
              </li>
              <li>
                <strong>Gender:</strong> {result.gender}
              </li>
              <li>
                <strong>Species:</strong> {result.species}
              </li>
              <li>
                <strong>Type:</strong> {result.type}
              </li>
              <li>
                <strong>Location: </strong>
                <Link
                  href={`/location/${
                    result.location.url.split("/").slice(-1)[0]
                  }`}
                >
                  {result.location.name}
                </Link>
              </li>
              <li>
                <strong>Originally From: </strong>
                <Link
                  href={`/location/${
                    result.origin.url.split("/").slice(-1)[0]
                  }`}
                >
                  {result.origin.name}
                </Link>
              </li>
            </ul>
            <div>
              {result.episode.length ? (
                <div>
                  <h1>Episode Appearances</h1>
                  <ul className={styles.character_tiles}>
                    {result.episode.map((episode) => {
                      return <EpisodeList endpoint={episode} />;
                    })}
                  </ul>
                </div>
              ) : (
                <h1>No Episode Records</h1>
              )}
            </div>
          </div>
        </div>
        <p>
          <Link href="/character">Back to All Characters</Link>
        </p>
      </main>
    </>
  );
}
