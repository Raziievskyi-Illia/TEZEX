import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import Grid2 from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { SxProps, Theme } from "@mui/material/styles";

import style from "./style";
import useStyles from "../../hooks/styles";
import tezexIcon from "../../assets/tezexIcon.svg";
import tzLogo from "../../assets/tzlogo.svg";
import tzbtcLogo from "../../assets/tzbtcLogo.svg";

export const Analytics: FC = () => {
  const styles = useStyles(style);
  const [activeTab, setActiveTab] = useState(0);
  const modalTitles = {
    price: "Price Analysis",
    volume: "24h Volume Analysis",
    apy: "Net APY Analysis",
    efficiency: "Efficiency Analysis (Volume ÷ Liquidity)",
    liquidity: "Pool Liquidity Analysis",
    apyBreakdown: "APY Breakdown Analysis",
    slippageSmall: "Execution Quality - Slippage Analysis (Small)",
    slippageMedium: "Execution Quality - Slippage Analysis (Medium)",
    slippageLarge: "Execution Quality - Slippage Analysis (Large)",
    feeRevenue: "Fee Revenue Analysis",
  } as const;
  type ModalKey = keyof typeof modalTitles;
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const [modalTimeRange, setModalTimeRange] = useState(0);
  const [exportAnchor, setExportAnchor] = useState<null | HTMLElement>(null);

  const timeRanges = ["24h", "7d", "30d", "YTD", "All", "Custom"];

  const tabs = [
    { key: "pool", label: "Pool Analytics" },
    { key: "market", label: "Market" },
    { key: "earnings", label: "Earnings" },
    { key: "activity", label: "Activity" },
    { key: "position", label: "My Position" },
  ];

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setActiveTab(value);
  };

  const handleOpenModal = (key: ModalKey) => () => {
    setActiveModal(key);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const renderSection = (
    title: string,
    sx?: SxProps<Theme>,
    options?: { clickable?: boolean; onClick?: () => void }
  ) => (
    <Card
      sx={[styles.sectionCard, sx, options?.clickable && styles.cardClickable]}
      role={options?.clickable ? "button" : undefined}
      tabIndex={options?.clickable ? 0 : undefined}
      onClick={options?.onClick}
    >
      <CardContent sx={styles.sectionContent}>
        <Typography sx={styles.sectionTitle}>{title}</Typography>
      </CardContent>
    </Card>
  );

  const renderPoolTab = () => (
    <Grid2 container rowSpacing={3} columnSpacing={2}>
      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} sm={6} lg={4}>
            {renderSection("Price", styles.cardKpi, {
              clickable: true,
              onClick: handleOpenModal("price"),
            })}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("24h Volume", styles.cardKpi, {
              clickable: true,
              onClick: handleOpenModal("volume"),
            })}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Net APY", styles.cardKpi, {
              clickable: true,
              onClick: handleOpenModal("apy"),
            })}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={2}>
            {renderSection("Efficiency", styles.cardKpi, {
              clickable: true,
              onClick: handleOpenModal("efficiency"),
            })}
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} lg={3}>
            {renderSection("Pool Liquidity", styles.cardPoolLiquidity, {
              clickable: true,
              onClick: handleOpenModal("liquidity"),
            })}
          </Grid2>
          <Grid2 xs={12} lg={9}>
            {renderSection("Volume Over Time", styles.cardVolumeOverTime)}
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} lg={6}>
            {renderSection("Liquidity Over Time", styles.cardLiquidityOverTime)}
          </Grid2>
          <Grid2 xs={12} lg={6}>
            {renderSection("Fee Revenue Trend", styles.cardFeeRevenueTrend)}
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} lg={6}>
            {renderSection("APY Breakdown", styles.cardApyBreakdown, {
              clickable: true,
              onClick: handleOpenModal("apyBreakdown"),
            })}
          </Grid2>
          <Grid2 xs={12} lg={6}>
            <Grid2 container rowSpacing={3} columnSpacing={2}>
              <Grid2 xs={12} sm={4}>
                {renderSection("Slippage (Small)", styles.cardSlippage, {
                  clickable: true,
                  onClick: handleOpenModal("slippageSmall"),
                })}
              </Grid2>
              <Grid2 xs={12} sm={4}>
                {renderSection("Slippage (Medium)", styles.cardSlippage, {
                  clickable: true,
                  onClick: handleOpenModal("slippageMedium"),
                })}
              </Grid2>
              <Grid2 xs={12} sm={4}>
                {renderSection("Slippage (Large)", styles.cardSlippage, {
                  clickable: true,
                  onClick: handleOpenModal("slippageLarge"),
                })}
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} lg={3}>
            {renderSection("Fee Revenue", styles.cardFeeRevenue, {
              clickable: true,
              onClick: handleOpenModal("feeRevenue"),
            })}
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );

  const renderMarketTab = () => (
    <Grid2 container rowSpacing={3} columnSpacing={2}>
      <Grid2 xs={12} lg={6}>
        {renderSection("Live Price", styles.cardWide)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Execution Cost for Size", styles.cardWide)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Pool vs External Delta", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Depth Inside Bands", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Basis to Implied Cross", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Re-centering Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Volume Over Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Trade Size Distribution", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={4}>
        {renderSection("Routing Share", styles.cardSide)}
      </Grid2>
      <Grid2 xs={12} lg={4}>
        {renderSection("Inventory Skew", styles.cardSide)}
      </Grid2>
      <Grid2 xs={12} lg={4}>
        {renderSection("Depth Stability", styles.cardSide)}
      </Grid2>
      <Grid2 xs={12}>{renderSection("Recent Prints", styles.cardTable)}</Grid2>
    </Grid2>
  );

  const renderEarningsTab = () => (
    <Grid2 container rowSpacing={3} columnSpacing={2}>
      <Grid2 xs={12}>
        {renderSection("Wallet Connection", styles.cardBanner)}
      </Grid2>
      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Earnings Pace", styles.cardKpi)}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Fees in Range", styles.cardKpi)}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Subsidy in Range", styles.cardKpi)}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("SIRS Balance", styles.cardKpi)}
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Fee APR Over Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Projected APY", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Fees Earned", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Subsidy Earned", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Volume per Liquidity", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Fees Over Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Subsidy Over Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Volume Over Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Accrual by Asset", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12} lg={6}>
        {renderSection("Effective Fee Rate", styles.cardChart)}
      </Grid2>
    </Grid2>
  );

  const renderActivityTab = () => (
    <Grid2 container rowSpacing={3} columnSpacing={2}>
      <Grid2 xs={12}>
        <Card sx={[styles.sectionCard, styles.cardActivityFull]}>
          <CardContent sx={styles.activityCardContent}>
            <Box sx={styles.activityHeader}>
              <Box>
                <Typography sx={styles.activityTitle}>
                  Transaction Activity
                </Typography>
                <Typography sx={styles.activitySubtitle}>
                  150 transactions found
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                startIcon={<FileDownloadOutlinedIcon />}
                sx={styles.modalExportBtn}
              >
                Export
              </Button>
            </Box>
            <Box sx={styles.activityFilters}>
              <Typography sx={styles.sectionTitle}>
                Filters placeholder — Type, Side, Asset, Search, Size Range,
                Time Range
              </Typography>
            </Box>
            <Box sx={styles.activityTablePlaceholder}>
              <Typography sx={styles.modalBodyText}>
                Transactions table placeholder
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );

  const renderPositionTab = () => (
    <Grid2 container rowSpacing={3} columnSpacing={2}>
      <Grid2 xs={12}>
        <Grid2 container rowSpacing={3} columnSpacing={2}>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Position Value", styles.cardKpi)}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("SIRS Balance", styles.cardKpi)}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Entry Price", styles.cardKpi)}
          </Grid2>
          <Grid2 xs={12} sm={6} lg={3}>
            {renderSection("Current Value", styles.cardKpi)}
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={12}>
        {renderSection("Position Value Over Time", styles.cardChart)}
      </Grid2>
      <Grid2 xs={12}>
        {renderSection("Recent Operations", styles.cardTable)}
      </Grid2>
    </Grid2>
  );

  const tabContent = [
    renderPoolTab(),
    renderMarketTab(),
    renderEarningsTab(),
    renderActivityTab(),
    renderPositionTab(),
  ];

  return (
    <Grid2 container sx={styles.root}>
      <Grid2 xs={12} sx={styles.header}>
        <Box sx={styles.headerInfo}>
          <Box sx={styles.headerTitleRow}>
            <Box sx={styles.headerLogo}>
              <Box
                component="img"
                src={tezexIcon}
                alt="Tezex"
                sx={styles.headerLogoIcon}
              />
            </Box>
            <Typography sx={styles.title}>
              Liquidity Baking Analytics
            </Typography>
          </Box>
          <Box sx={styles.metaRow}>
            <Box component="img" src={tzLogo} alt="XTZ" sx={styles.metaIcon} />
            <Typography sx={styles.metaText}>XTZ–tzBTC Pool</Typography>
            <Box
              component="img"
              src={tzbtcLogo}
              alt="tzBTC"
              sx={styles.metaIcon}
            />
            <Box sx={styles.metaDot} />
            <Typography sx={styles.metaText}>SIRS Methodology</Typography>
          </Box>
        </Box>
        <Box sx={styles.headerActions}>
          <Box sx={styles.headerBadge}>
            <Box sx={styles.headerBadgeIcon} />
            <Typography component="span" sx={{ fontSize: "inherit" }}>
              Live Data
            </Typography>
          </Box>
        </Box>
      </Grid2>

      <Grid2 xs={12}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={styles.tabs}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.key} label={tab.label} sx={styles.tab} />
          ))}
        </Tabs>
      </Grid2>

      <Grid2 xs={12} sx={styles.tabPanel}>
        {tabContent[activeTab]}
      </Grid2>

      <Grid2 xs={12} sx={styles.footer}>
        <Typography sx={styles.footerText}>
          Liquidity Baking Pool Analytics • Contract:
          KT1TxqZ8QtKvLu3V3JH7Gx58n7Co8pgtpQU5
        </Typography>
        <Typography sx={styles.footerText}>
          Data updates in real-time from the Tezos blockchain
        </Typography>
      </Grid2>

      <Dialog
        open={Boolean(activeModal)}
        onClose={handleCloseModal}
        maxWidth={false}
        sx={styles.modal}
      >
        <Box sx={styles.modalContent}>
          <Box sx={styles.modalHeader}>
            <Typography sx={styles.modalTitle}>
              {activeModal ? modalTitles[activeModal] : ""}
            </Typography>
            <Box sx={styles.modalHeaderActions}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<FileDownloadOutlinedIcon />}
                onClick={(e) => setExportAnchor(e.currentTarget)}
                sx={styles.modalExportBtn}
              >
                Export
              </Button>
              <Menu
                anchorEl={exportAnchor}
                open={Boolean(exportAnchor)}
                onClose={() => setExportAnchor(null)}
              >
                <MenuItem onClick={() => setExportAnchor(null)}>
                  Export as CSV
                </MenuItem>
                <MenuItem onClick={() => setExportAnchor(null)}>
                  Export as JSON
                </MenuItem>
              </Menu>
              <IconButton onClick={handleCloseModal} sx={styles.modalClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={styles.modalTimeRangeTabs}>
            <Tabs
              value={modalTimeRange}
              onChange={(_, v) => setModalTimeRange(v)}
              sx={styles.timeRangeTabs}
              TabIndicatorProps={{ style: { display: "none" } }}
            >
              {timeRanges.map((range) => (
                <Tab key={range} label={range} sx={styles.timeRangeTab} />
              ))}
            </Tabs>
          </Box>
          <Box sx={styles.modalChartSection}>
            <Typography sx={styles.modalBodyText}>
              Chart placeholder — will render graph here
            </Typography>
          </Box>
          <Box sx={styles.modalTableSection}>
            <Typography sx={styles.modalTableTitle}>History</Typography>
            <Box sx={styles.modalTablePlaceholder}>
              <Typography sx={styles.modalBodyText}>
                Table placeholder — will render data history here
              </Typography>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Grid2>
  );
};
