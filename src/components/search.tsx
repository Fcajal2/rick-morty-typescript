import { Dispatch, FormEvent, SetStateAction } from "react";

export default function Search({
  setSearch,
  updatePage,
}: {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
  updatePage: Dispatch<SetStateAction<number>>;
}) {
  function handleOnSumbitSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = e.currentTarget?.query.value || "";
    setSearch(`&name=${value}`);
    updatePage(1);
  }
  return (
    <div>
      <form onSubmit={handleOnSumbitSearch}>
        <input type="search" name="query" />
        <button>Search</button>
      </form>
    </div>
  );
}
