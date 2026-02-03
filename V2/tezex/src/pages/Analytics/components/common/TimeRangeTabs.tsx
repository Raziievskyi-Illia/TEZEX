/**
 * TimeRangeTabs Component
 * Reusable time range selector: 24h | 7d | 30d | YTD | All | Custom
 */

import React, { FC } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";

import type { TimeRangeOption, TimeRange } from "../../types";

export interface TimeRangeTabsProps {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
  options?: TimeRangeOption[];
  sx?: SxProps<Theme>;
  tabsSx?: SxProps<Theme>;
  tabSx?: SxProps<Theme>;
}

const defaultOptions: TimeRangeOption[] = [
  "24h",
  "7d",
  "30d",
  "YTD",
  "All",
  "Custom",
];

export const TimeRangeTabs: FC<TimeRangeTabsProps> = ({
  value,
  onChange,
  options = defaultOptions,
  sx,
  tabsSx,
  tabSx,
}) => {
  const currentIndex = options.indexOf(value.option);

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    const newOption = options[newIndex];
    onChange({
      option: newOption,
      startDate: newOption === "Custom" ? value.startDate : undefined,
      endDate: newOption === "Custom" ? value.endDate : undefined,
    });
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      startDate: e.target.value ? new Date(e.target.value) : undefined,
    });
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      endDate: e.target.value ? new Date(e.target.value) : undefined,
    });
  };

  const formatDateForInput = (date?: Date): string => {
    if (!date) return "";
    return date.toISOString().slice(0, 16);
  };

  return (
    <Box sx={sx}>
      <Tabs
        value={currentIndex >= 0 ? currentIndex : 0}
        onChange={handleTabChange}
        sx={tabsSx}
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {options.map((option) => (
          <Tab key={option} label={option} sx={tabSx} />
        ))}
      </Tabs>

      {value.option === "Custom" && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            alignItems: "center",
          }}
        >
          <TextField
            type="datetime-local"
            label="Start"
            size="small"
            value={formatDateForInput(value.startDate)}
            onChange={handleStartDateChange}
            InputLabelProps={{ shrink: true }}
            sx={{ flex: 1 }}
          />
          <TextField
            type="datetime-local"
            label="End"
            size="small"
            value={formatDateForInput(value.endDate)}
            onChange={handleEndDateChange}
            InputLabelProps={{ shrink: true }}
            sx={{ flex: 1 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default TimeRangeTabs;
