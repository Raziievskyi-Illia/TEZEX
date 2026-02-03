export type TimeRange = "24h" | "7d" | "30d" | "YTD" | "ALL" | "CUSTOM";

export type TrendDirection = "up" | "down" | "flat";

export type AnalyticsTab =
  | "pool"
  | "market"
  | "earnings"
  | "activity"
  | "position";

export interface SeriesPoint {
  ts: string;
  value: number;
  valueB?: number;
}

export interface KpiMetric {
  label: string;
  value: number;
  subtitle?: string;
  deltaPct: number;
  deltaDirection: TrendDirection;
  deltaLabel?: string;
  sparkline?: SeriesPoint[];
}

export interface AnalyticsKpis {
  price: KpiMetric;
  volume24h: KpiMetric;
  netApy: KpiMetric;
  efficiency: KpiMetric;
}

export interface PoolLiquidityMetric {
  valueUsd: number;
  deltaPct: number;
  barValue: number;
}

export interface AnalyticsHeader {
  title: string;
  poolLabel: string;
  methodologyLabel: string;
  isLive: boolean;
}

export interface ApyBreakdownMetric {
  feeApy: number;
  subsidyApy: number;
  totalApy: number;
}

export interface SlippageMetrics {
  small: KpiMetric;
  medium: KpiMetric;
  large: KpiMetric;
}

export interface FeeRevenueSummary {
  value: number;
  subtitle?: string;
  sparkline?: SeriesPoint[];
}

export interface AnalyticsFooter {
  contractAddress: string;
  note: string;
}

export interface AnalyticsData {
  poolId: string;
  updatedAt: string;
  range: TimeRange;
  tabs: AnalyticsTab[];
  activeTab: AnalyticsTab;
  header: AnalyticsHeader;
  kpis: AnalyticsKpis;
  poolLiquidity: PoolLiquidityMetric;
  volumeOverTime: SeriesPoint[];
  liquidityOverTime: SeriesPoint[];
  feeRevenueTrend: SeriesPoint[];
  apyBreakdown: ApyBreakdownMetric;
  slippage: SlippageMetrics;
  feeRevenueSummary: FeeRevenueSummary;
  footer: AnalyticsFooter;
}
