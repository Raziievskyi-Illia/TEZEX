/**
 * AnalysisModal Component
 * Base modal for detailed analysis views with TimeRange, Export, Chart & Table sections
 */

import React, { FC, ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps, Theme } from "@mui/material/styles";

import { TimeRangeTabs } from "../common/TimeRangeTabs";
import { ExportMenu } from "../common/ExportMenu";
import type { TimeRange, ExportFormat } from "../../types";

export interface AnalysisModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
  tableSection?: ReactNode;
  tableTitle?: string;
  onExport?: (format: ExportFormat) => void;
  showTimeRange?: boolean;
  initialTimeRange?: TimeRange;
  onTimeRangeChange?: (range: TimeRange) => void;
  sx?: SxProps<Theme>;
}

const defaultTimeRange: TimeRange = { option: "7d" };

export const AnalysisModal: FC<AnalysisModalProps> = ({
  open,
  onClose,
  title,
  children,
  tableSection,
  tableTitle = "History",
  onExport,
  showTimeRange = true,
  initialTimeRange = defaultTimeRange,
  onTimeRangeChange,
  sx,
}) => {
  const [timeRange, setTimeRange] = useState<TimeRange>(initialTimeRange);

  const handleTimeRangeChange = (range: TimeRange) => {
    setTimeRange(range);
    onTimeRangeChange?.(range);
  };

  const handleExport = (format: ExportFormat) => {
    onExport?.(format);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      sx={[
        {
          "& .MuiDialog-container": {
            alignItems: "center",
          },
          "& .MuiDialog-paper": {
            width: "92vw",
            height: "90vh",
            maxWidth: 1486,
            maxHeight: "90vh",
            borderRadius: "16px",
            margin: 0,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 3,
          boxSizing: "border-box",
          gap: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              lineHeight: "28px",
              fontWeight: 600,
              color: "#0A0A0A",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {onExport && (
              <ExportMenu
                onExport={handleExport}
                sx={{
                  textTransform: "none",
                  fontSize: 14,
                  borderColor: "rgba(0,0,0,0.1)",
                  color: "#0A0A0A",
                  borderRadius: "10px",
                  px: 1.5,
                  py: 0.75,
                  "&:hover": {
                    borderColor: "rgba(0,0,0,0.2)",
                    background: "#F9F9F9",
                  },
                }}
              />
            )}
            <IconButton
              onClick={onClose}
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Time Range Tabs */}
        {showTimeRange && (
          <TimeRangeTabs
            value={timeRange}
            onChange={handleTimeRangeChange}
            tabsSx={{
              minHeight: 32,
              border: "1px solid #EDEDED",
              borderRadius: "10px",
              background: "#FFFFFF",
              p: 0.25,
              width: "fit-content",
              "& .MuiTabs-flexContainer": {
                gap: 0.5,
              },
            }}
            tabSx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: 12,
              minHeight: 28,
              minWidth: 48,
              px: 1.5,
              py: 0.5,
              color: "#717182",
              borderRadius: "8px",
              "&.Mui-selected": {
                background: "#E3F7FF",
                color: "#0A0A0A",
              },
            }}
          />
        )}

        {/* Chart Section */}
        <Box
          sx={{
            flex: 1,
            minHeight: 300,
            borderRadius: "16px",
            border: children ? "none" : "1px dashed rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: children ? "transparent" : "#F9F9F9",
            overflow: "hidden",
          }}
        >
          {children || (
            <Typography sx={{ color: "#717182", fontSize: 14 }}>
              Chart placeholder — will render graph here
            </Typography>
          )}
        </Box>

        {/* Table Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#0A0A0A" }}>
            {tableTitle}
          </Typography>
          <Box
            sx={{
              height: 200,
              borderRadius: "12px",
              border: tableSection ? "none" : "1px dashed rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: tableSection ? "transparent" : "#F9F9F9",
              overflow: "auto",
            }}
          >
            {tableSection || (
              <Typography sx={{ color: "#717182", fontSize: 14 }}>
                Table placeholder — will render data history here
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AnalysisModal;
