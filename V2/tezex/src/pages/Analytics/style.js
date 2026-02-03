const style = (theme, scale = 1) => {
  return {
    root: {
      width: "100%",
      maxWidth: `calc(1800px * ${scale})`,
      display: "flex",
      flexDirection: "column",
      gap: `calc(32px * ${scale})`,
      padding: `calc(24px * ${scale})`,
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        padding: `calc(24px * ${scale})`,
      },
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: `calc(16px * ${scale})`,
      flexWrap: "wrap",
    },
    headerInfo: {
      display: "flex",
      flexDirection: "column",
      gap: `calc(4px * ${scale})`,
    },
    headerTitleRow: {
      display: "flex",
      alignItems: "center",
      gap: `calc(16px * ${scale})`,
    },
    headerLogo: {
      width: `calc(48px * ${scale})`,
      height: `calc(48px * ${scale})`,
      borderRadius: `calc(10px * ${scale})`,
      background: "#030213",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    headerLogoIcon: {
      width: `calc(24px * ${scale})`,
      height: `calc(24px * ${scale})`,
    },
    title: {
      fontSize: `calc(30px * ${scale})`,
      lineHeight: `calc(36px * ${scale})`,
      fontWeight: 700,
      color: "#0A0A0A",
    },
    subtitle: {
      fontSize: `calc(16px * ${scale})`,
      lineHeight: `calc(24px * ${scale})`,
      color: "#717182",
    },
    metaRow: {
      display: "flex",
      alignItems: "center",
      gap: `calc(8px * ${scale})`,
    },
    metaIcon: {
      width: `calc(18px * ${scale})`,
      height: `calc(18px * ${scale})`,
      flexShrink: 0,
    },
    metaText: {
      fontSize: `calc(16px * ${scale})`,
      lineHeight: `calc(24px * ${scale})`,
      color: "#717182",
    },
    metaDot: {
      width: `calc(4px * ${scale})`,
      height: `calc(4px * ${scale})`,
      borderRadius: "50%",
      background: "#717182",
    },
    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: `calc(8px * ${scale})`,
      flexWrap: "wrap",
    },
    headerBadge: {
      height: `calc(22px * ${scale})`,
      padding: `calc(2px * ${scale}) calc(8px * ${scale})`,
      borderRadius: `calc(8px * ${scale})`,
      border: "1px solid rgba(0,0,0,0.1)",
      background: "#FFFFFF",
      fontSize: `calc(12px * ${scale})`,
      fontWeight: 500,
      color: "#0A0A0A",
      display: "inline-flex",
      alignItems: "center",
      gap: `calc(8px * ${scale})`,
    },
    headerBadgeIcon: {
      width: `calc(12px * ${scale})`,
      height: `calc(12px * ${scale})`,
      borderRadius: "50%",
      border: "1px solid rgba(0,0,0,0.1)",
    },
    tabs: {
      border: "1px solid #EDEDED",
      borderRadius: `calc(14px * ${scale})`,
      minHeight: `calc(36px * ${scale})`,
      height: `calc(36px * ${scale})`,
      background: "#FFFFFF",
      overflow: "hidden",
      padding: `calc(4px * ${scale})`,
      boxSizing: "border-box",
      "& .MuiTabs-scroller": {
        height: "100%",
        minHeight: "100%",
      },
      "& .MuiTabs-flexContainer": {
        height: "100%",
        alignItems: "center",
      },
    },
    tab: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: `calc(12px * ${scale})`,
      minHeight: `calc(27px * ${scale})`,
      height: `calc(27px * ${scale})`,
      padding: 0,
      color: "#0A0A0A",
      borderRadius: `calc(14px * ${scale})`,
      lineHeight: `calc(16px * ${scale})`,
      "&.Mui-selected": {
        background: "#E3F7FF",
        color: "#0A0A0A",
      },
    },
    tabPanel: {
      paddingTop: `calc(32px * ${scale})`,
    },
    sectionCard: {
      height: "100%",
      width: "100%",
      borderRadius: `calc(14px * ${scale})`,
      border: "1px solid rgba(0,0,0,0.1)",
      background: "#FFFFFF",
      boxShadow: "none",
    },
    sectionContent: {
      padding: `calc(24px * ${scale})`,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      height: "100%",
      "&:last-child": {
        paddingBottom: `calc(24px * ${scale})`,
      },
    },
    sectionTitle: {
      fontSize: `calc(14px * ${scale})`,
      lineHeight: `calc(20px * ${scale})`,
      fontWeight: 500,
      color: "#717182",
    },
    cardClickable: {
      cursor: "pointer",
      transition: "box-shadow 0.2s ease, border-color 0.2s ease",
      "&:hover": {
        borderColor: "rgba(0,0,0,0.2)",
        boxShadow: "0 2px 8px rgba(10, 10, 10, 0.06)",
      },
      "&:focus-visible": {
        outline: "2px solid rgba(10, 10, 10, 0.2)",
        outlineOffset: 2,
      },
    },
    cardKpi: {
      height: `calc(244px * ${scale})`,
    },
    cardPoolLiquidity: {
      height: `calc(240px * ${scale})`,
    },
    cardVolumeOverTime: {
      height: `calc(410px * ${scale})`,
    },
    cardLiquidityOverTime: {
      height: `calc(410px * ${scale})`,
    },
    cardFeeRevenueTrend: {
      height: `calc(410px * ${scale})`,
    },
    cardApyBreakdown: {
      height: `calc(253px * ${scale})`,
    },
    cardSlippage: {
      height: `calc(220px * ${scale})`,
    },
    cardFeeRevenue: {
      height: `calc(220px * ${scale})`,
    },
    cardChart: {
      height: `calc(410px * ${scale})`,
    },
    cardSide: {
      height: `calc(300px * ${scale})`,
    },
    cardWide: {
      height: `calc(244px * ${scale})`,
    },
    cardBanner: {
      height: `calc(160px * ${scale})`,
    },
    cardTable: {
      height: `calc(460px * ${scale})`,
    },
    cardActivityFull: {
      minHeight: `calc(800px * ${scale})`,
    },
    activityCardContent: {
      display: "flex",
      flexDirection: "column",
      gap: `calc(16px * ${scale})`,
      padding: `calc(24px * ${scale})`,
      height: "100%",
      "&:last-child": {
        paddingBottom: `calc(24px * ${scale})`,
      },
    },
    activityHeader: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    activityTitle: {
      fontSize: `calc(16px * ${scale})`,
      fontWeight: 600,
      color: "#0A0A0A",
      lineHeight: `calc(20px * ${scale})`,
    },
    activitySubtitle: {
      fontSize: `calc(14px * ${scale})`,
      color: "#717182",
      marginTop: `calc(4px * ${scale})`,
    },
    activityFilters: {
      padding: `calc(16px * ${scale})`,
      borderRadius: `calc(12px * ${scale})`,
      border: "1px dashed rgba(0,0,0,0.1)",
      background: "#F9F9F9",
    },
    activityTablePlaceholder: {
      flex: 1,
      minHeight: `calc(500px * ${scale})`,
      borderRadius: `calc(12px * ${scale})`,
      border: "1px dashed rgba(0,0,0,0.1)",
      background: "#F9F9F9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardFooter: {
      minHeight: `calc(100px * ${scale})`,
    },
    modal: {
      "& .MuiDialog-container": {
        alignItems: "center",
      },
      "& .MuiDialog-paper": {
        width: `calc(92vw * ${scale})`,
        height: `calc(90vh * ${scale})`,
        maxWidth: `calc(1486px * ${scale})`,
        margin: `calc(16px * ${scale})`,
        borderRadius: `calc(20px * ${scale})`,
        background: "#FFFFFF",
        overflow: "hidden",
      },
    },
    modalContent: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: `calc(24px * ${scale})`,
      boxSizing: "border-box",
      gap: `calc(16px * ${scale})`,
    },
    modalHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: `calc(16px * ${scale})`,
    },
    modalTitle: {
      fontSize: `calc(20px * ${scale})`,
      lineHeight: `calc(28px * ${scale})`,
      fontWeight: 600,
      color: "#0A0A0A",
    },
    modalHeaderActions: {
      display: "flex",
      alignItems: "center",
      gap: `calc(12px * ${scale})`,
    },
    modalExportBtn: {
      textTransform: "none",
      fontSize: `calc(14px * ${scale})`,
      borderColor: "rgba(0,0,0,0.1)",
      color: "#0A0A0A",
      borderRadius: `calc(10px * ${scale})`,
      padding: `calc(6px * ${scale}) calc(12px * ${scale})`,
      "&:hover": {
        borderColor: "rgba(0,0,0,0.2)",
        background: "#F9F9F9",
      },
    },
    modalClose: {
      width: `calc(36px * ${scale})`,
      height: `calc(36px * ${scale})`,
      borderRadius: `calc(10px * ${scale})`,
      border: "1px solid rgba(0,0,0,0.1)",
    },
    modalTimeRangeTabs: {
      display: "flex",
      alignItems: "center",
    },
    timeRangeTabs: {
      minHeight: `calc(32px * ${scale})`,
      border: "1px solid #EDEDED",
      borderRadius: `calc(10px * ${scale})`,
      background: "#FFFFFF",
      padding: `calc(2px * ${scale})`,
      "& .MuiTabs-flexContainer": {
        gap: `calc(4px * ${scale})`,
      },
    },
    timeRangeTab: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: `calc(12px * ${scale})`,
      minHeight: `calc(28px * ${scale})`,
      minWidth: `calc(48px * ${scale})`,
      padding: `calc(4px * ${scale}) calc(12px * ${scale})`,
      color: "#717182",
      borderRadius: `calc(8px * ${scale})`,
      "&.Mui-selected": {
        background: "#E3F7FF",
        color: "#0A0A0A",
      },
    },
    modalChartSection: {
      flex: 1,
      minHeight: `calc(300px * ${scale})`,
      borderRadius: `calc(16px * ${scale})`,
      border: "1px dashed rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F9F9F9",
    },
    modalTableSection: {
      display: "flex",
      flexDirection: "column",
      gap: `calc(12px * ${scale})`,
    },
    modalTableTitle: {
      fontSize: `calc(16px * ${scale})`,
      fontWeight: 600,
      color: "#0A0A0A",
    },
    modalTablePlaceholder: {
      height: `calc(200px * ${scale})`,
      borderRadius: `calc(12px * ${scale})`,
      border: "1px dashed rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F9F9F9",
    },
    modalBodyText: {
      color: "#717182",
      fontSize: `calc(14px * ${scale})`,
    },
    footer: {
      borderTop: "1px solid rgba(0,0,0,0.1)",
      paddingTop: `calc(24px * ${scale})`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: `calc(4px * ${scale})`,
    },
    footerText: {
      fontSize: `calc(14px * ${scale})`,
      color: "#717182",
      textAlign: "center",
    },
  };
};

export default style;
