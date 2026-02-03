import React, { FC } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import style from "./style";
import useStyles from "../../hooks/styles";

export const Analytics: FC = () => {
  const styles = useStyles(style);

  return (
    <Grid2 container sx={styles.root}>
      <Grid2 xs={12}>
        <Typography variant="h4">Analytics</Typography>
      </Grid2>
    </Grid2>
  );
};
