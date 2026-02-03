/**
 * ChartCard Component
 * Base card for displaying charts with recharts
 */

import React, { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

export interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  height?: number | string;
  cardSx?: SxProps<Theme>;
}

export const ChartCard: FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  actions,
  footer,
  height = 350,
  cardSx,
}) => {
  return (
    <Card
      sx={[
        {
          height: "100%",
          borderRadius: "14px",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
        },
        ...(Array.isArray(cardSx) ? cardSx : [cardSx]),
      ]}
    >
      <CardContent
        sx={{
          p: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          "&:last-child": { pb: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: "#0A0A0A",
                lineHeight: 1.4,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                sx={{
                  fontSize: 12,
                  color: "#717182",
                  mt: 0.5,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
          {actions && <Box sx={{ display: "flex", gap: 1 }}>{actions}</Box>}
        </Box>

        <Box
          sx={{
            flex: 1,
            minHeight: height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>

        {footer && (
          <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            {footer}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
