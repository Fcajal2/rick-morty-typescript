import { useEffect, useState } from "react";
import Link from "next/link";

export default function CharacterTile({endpoint}:{endpoint: string}) {
  const [info, setInfo] = useState<ResultChar>();

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
          <Link href="/character/[id]" as={`/character/${info.id}`}>
            <img src={info.image} alt={`${info.name} Thumb`} />
          </Link>
          <h3>
            {info.name} - {info.status}
          </h3>
        </li>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
