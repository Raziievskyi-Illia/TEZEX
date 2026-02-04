/**
 * MetricCard Component
 * Base card for displaying metrics with optional sparkline
 */

import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { SxProps, Theme } from "@mui/material/styles";
import { ResponsiveContainer, AreaChart, Area, YAxis } from "recharts";

import type { MetricCardData, SparklineDataPoint } from "../../types";
import { getChangeDirection } from "../../utils/formatters";

export interface MetricCardProps extends MetricCardData {
  onClick?: () => void;
  cardSx?: SxProps<Theme>;
  showExpandIcon?: boolean;
}

const SparklineChart: FC<{ data: SparklineDataPoint[]; positive: boolean }> = ({
  data,
  positive,
}) => {
  const color = positive ? "#10B981" : "#EF4444";
  const gradientId = `sparkline-${positive ? "green" : "red"}`;

  return (
    <ResponsiveContainer width="100%" height={40}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis domain={["dataMin", "dataMax"]} hide />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  subValue,
  change,
  changeLabel,
  sparklineData,
  onClick,
  cardSx,
  showExpandIcon = true,
}) => {
  const isClickable = Boolean(onClick);
  const changeDirection =
    change !== undefined ? getChangeDirection(change) : "neutral";
  const isPositive = changeDirection === "positive";

  return (
    <Card
      sx={[
        {
          height: "100%",
          borderRadius: "14px",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "none",
          transition: "box-shadow 0.2s, border-color 0.2s",
          ...(isClickable && {
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              borderColor: "rgba(0,0,0,0.15)",
            },
          }),
        },
        ...(Array.isArray(cardSx) ? cardSx : [cardSx]),
      ]}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      <CardContent sx={{ p: 3, height: "100%", "&:last-child": { pb: 3 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#717182",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {title}
          </Typography>
          {showExpandIcon && isClickable && (
            <IconButton
              size="small"
              sx={{
                width: 24,
                height: 24,
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
              }}
            >
              <OpenInFullIcon sx={{ fontSize: 14 }} />
            </IconButton>
          )}
        </Box>

        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 600,
            color: "#0A0A0A",
            lineHeight: 1.2,
            mb: 0.5,
          }}
        >
          {value}
        </Typography>

        {subValue && (
          <Typography
            sx={{
              fontSize: 12,
              color: "#717182",
              mb: 2,
            }}
          >
            {subValue}
          </Typography>
        )}

        {sparklineData && sparklineData.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <SparklineChart data={sparklineData} positive={isPositive} />
          </Box>
        )}

        {change !== undefined && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {isPositive ? (
              <TrendingUpIcon sx={{ fontSize: 16, color: "#10B981" }} />
            ) : changeDirection === "negative" ? (
              <TrendingDownIcon sx={{ fontSize: 16, color: "#EF4444" }} />
            ) : null}
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: isPositive
                  ? "#10B981"
                  : changeDirection === "negative"
                  ? "#EF4444"
                  : "#717182",
              }}
            >
              {change > 0 ? "+" : ""}
              {change.toFixed(2)}%
            </Typography>
            {changeLabel && (
              <Typography sx={{ fontSize: 14, color: "#717182", ml: 0.5 }}>
                {changeLabel}
              </Typography>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
