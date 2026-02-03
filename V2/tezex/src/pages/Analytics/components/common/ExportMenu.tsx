/**
 * ExportMenu Component
 * Dropdown menu for exporting data as CSV or JSON
 */

import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { SxProps, Theme } from "@mui/material/styles";

import type { ExportFormat } from "../../types";

export interface ExportMenuProps {
  onExport: (format: ExportFormat) => void;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export const ExportMenu: FC<ExportMenuProps> = ({
  onExport,
  disabled = false,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExport = (format: ExportFormat) => {
    onExport(format);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        startIcon={<FileDownloadOutlinedIcon />}
        onClick={handleClick}
        disabled={disabled}
        sx={sx}
      >
        Export
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleExport("csv")}>Export as CSV</MenuItem>
        <MenuItem onClick={() => handleExport("json")}>Export as JSON</MenuItem>
      </Menu>
    </>
  );
};

export default ExportMenu;
