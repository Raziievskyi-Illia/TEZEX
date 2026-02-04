import React, { FC } from "react";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

import style from "./style";
import useStyles from "../../../../hooks/styles";
import sidelogo from "../../../../assets/sidelogo.svg";

export interface IMainWindow {
  children:
    | JSX.Element[]
    | JSX.Element
    | React.ReactElement
    | React.ReactElement[]
    | string;
}

export const MainWindow: FC<IMainWindow> = (props) => {
  const styles = useStyles(style);
  const location = useLocation();
  const isAnalytics = location.pathname.startsWith("/analytics");
  return (
    <Box sx={[styles.root, isAnalytics && styles.rootScrollable]}>
      {!isAnalytics && (
        <Box sx={styles.sideLogo}>
          <img src={sidelogo} alt="Tezex" />
        </Box>
      )}
      {props.children}
    </Box>
  );
};
