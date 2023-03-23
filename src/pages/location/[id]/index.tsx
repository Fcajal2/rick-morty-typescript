import Head from "next/head";
import Link from "next/link";
import CharacterTile from "../../../components/character";
import styles from "../../../styles/Main.module.css";
import Navbar from "../../../components/navbar";

const defaultEndpoint = "https://rickandmortyapi.com/api/location/";

export async function getServerSideProps({ query }) {
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

export default function Location({ result }:{result:ResultLoc}) {
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
            <h2>Location Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> {result.name}
              </li>
              <li>
                <strong>Type:</strong> {result.type}
              </li>
              <li>
                <strong>Dimension:</strong> {result.dimension}
              </li>
            </ul>
          </div>
          <div>
            {result.residents.length ? (
              <div>
                <h1>Current Residents</h1>
                <ul className={styles.character_tiles}>
                  {result.residents.map((resident) => {
                    return <CharacterTile endpoint={resident} />;
                  })}
                </ul>
              </div>
            ) : (
              <h1>No Resident Characters</h1>
            )}
          </div>
        </div>
        <p>
          <Link href="/location">Back to All Locations</Link>
        </p>
      </main>
    </>
  );
}
