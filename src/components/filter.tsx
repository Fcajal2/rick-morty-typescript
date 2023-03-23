export default function Filter({ setFilter, updatePage }:{setFilter: ,updatePage: }) {
    function handleFilter(query:string) {
      const value = query || "";
      console.log(query, value);
      setFilter(`&status=${value}`);
      updatePage(1);
    }
    return (
      <div>
        <div id="myBtnContainer">
          <button className="btn active" onClick={() => handleFilter("")}>
            {" "}
            Show all
          </button>
          <button className="btn" onClick={() => handleFilter("alive")}>
            {" "}
            Alive
          </button>
          <button className="btn" onClick={() => handleFilter("dead")}>
            {" "}
            Dead
          </button>
          <button className="btn" onClick={() => handleFilter("unknown")}>
            {" "}
            Unknown
          </button>
        </div>
      </div>
    );
  }
  