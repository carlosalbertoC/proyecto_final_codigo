import * as React from "react";
import Stack from "@mui/material/Stack";

import { AdminGrid, AdminDialog } from "../../components";

export default function IconLabelButtons() {
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ margin: "50px" }}>
        <AdminDialog />
      </Stack>
      <AdminGrid />
    </div>
  );
}
