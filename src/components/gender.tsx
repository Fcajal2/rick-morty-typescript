import { Dispatch, SetStateAction } from "react";

export default function Gender({
  setGender,
  updatePage,
}: {
  setGender: Dispatch<SetStateAction<string>>;
  updatePage: Dispatch<SetStateAction<number>>;
}) {
  function handleFilter(query: string) {
    const value = query || "";
    console.log(query, value);
    setGender(`&gender=${value}`);
    updatePage(1);
  }
  return (
    <div>
      <div id="myBtnContainer">
        <button className="btn active" onClick={() => handleFilter("")}>
          {" "}
          Show all
        </button>
        <button className="btn" onClick={() => handleFilter("male")}>
          {" "}
          Male
        </button>
        <button className="btn" onClick={() => handleFilter("female")}>
          {" "}
          Female
        </button>
        <button className="btn" onClick={() => handleFilter("genderless")}>
          {" "}
          Genderless
        </button>
        <button className="btn" onClick={() => handleFilter("unknown")}>
          {" "}
          Unknown
        </button>
      </div>
    </div>
  );
}
