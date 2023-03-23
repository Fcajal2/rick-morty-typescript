import { useEffect, useState } from "react";
import Link from "next/link";

export default function EpisodeList({endpoint}:{endpoint: string}) {
  const [info, setInfo] = useState<ResultEp>();

  useEffect(() => {
    async function request() {
      const res = await fetch(endpoint);

      const data = await res.json();
      setInfo(data);
    }
    request();
  }, [endpoint]);

  return (
    <>
      {info ? (
        <li key={info.id}>
          <Link href="/episode/[id]" as={`/episode/${info.id}`}>
            <h4>
              {info.name} - {info.episode}
            </h4>
          </Link>
        </li>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
