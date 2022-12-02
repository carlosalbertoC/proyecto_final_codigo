import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://media.istockphoto.com/id/522189109/es/foto/no-se-tome-tambi%C3%A9n-en-serio-la-vida.jpg?s=612x612&w=0&k=20&c=4RcKyGRBw_fwH_hl80Fn-COdYk9bjbrVq5v7u97dct4="
        sx={{ width: 250, height: 250, margin: "0 auto" }}
      />
    </Stack>
  );
}
export default ImageAvatars;
