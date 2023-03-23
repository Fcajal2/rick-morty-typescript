import { Dispatch, SetStateAction } from "react";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Pagination2({
  page,
  updatePage,
  info,
}: {
  page: number;
  updatePage: Dispatch<SetStateAction<number>>;
  info: Info;
}) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    updatePage(value);
  };
  return (
    <>
      <div>
        <Stack spacing={2}>
          <Pagination
            page={page}
            onChange={handleChange}
            count={info.pages}
            variant="outlined"
            color="secondary"
          />
        </Stack>
      </div>
    </>
  );
}
