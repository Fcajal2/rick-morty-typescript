import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination2 from "../../components/pagination";
import Search from "../../components/search";
import styles from "../../styles/Main.module.css";
import Navbar from "../../components/navbar";

const defaultEndpoint = "https://rickandmortyapi.com/api/location/";

export async function getServerSideProps() {
  //fetching data
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  //send fetched data to the page compenent via props
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }: { data: DataLoc }) {
  const {
    info: defaultInfo = {
      count: 0,
      pages: 0,
    },
    results: defaultResults = [],
  }: { info: Info; results: ResultLoc[] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [info, updateInfo] = useState(defaultInfo);
  const [page, updatePage] = useState(1);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    async function request() {
      const res = await fetch(`${defaultEndpoint}?page=${page}${search ?? ""}`);
      const nextData = await res.json();
      updateInfo(nextData.info);
      updateResults(nextData.results);
    }
    request();
  }, [page, search]);

  return (
    <>
      <Head>
        <title>R&M Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <p>Locations</p>

        <Search setSearch={setSearch} updatePage={updatePage} />

        {results ? (
          <ul className={styles.character_tiles}>
            {results.map((result) => {
              const { id, name, type, dimension } = result;
              return (
                <li key={id}>
                  <Link href="/location/[id]" as={`/location/${id}`}>
                    <h3>{name}</h3>
                  </Link>
                  <h5>
                    {type} - {dimension}
                  </h5>
                </li>
              );
            })}
          </ul>
        ) : (
          <h1>No Locations Found</h1>
        )}

        <Pagination2 page={page} updatePage={updatePage} info={info} />
      </main>
    </>
  );
}
