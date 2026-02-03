/**
 * Analytics Page Types
 * Based on Figma mockups: Crypto Exchange Analytics Grids - v2
 */

export type TimeRangeOption = "24h" | "7d" | "30d" | "YTD" | "All" | "Custom";

export interface TimeRange {
  option: TimeRangeOption;
  startDate?: Date;
  endDate?: Date;
}

export interface SparklineDataPoint {
  timestamp: number;
  value: number;
}

export interface MetricCardData {
  title: string;
  value: string | number;
  subValue?: string;
  change?: number;
  changeLabel?: string;
  sparklineData?: SparklineDataPoint[];
  icon?: "xtz" | "tzbtc" | "sirs";
}

export interface PriceMetricData extends MetricCardData {
  pricePerUnit: string;
  baseAsset: "XTZ" | "tzBTC";
  quoteAsset: "XTZ" | "tzBTC";
}

export interface VolumeMetricData extends MetricCardData {
  volumeUSD: number;
  volumeXTZ: number;
}

export interface APYMetricData extends MetricCardData {
  netAPY: number;
  feeAPY: number;
  subsidyAPY: number;
}

export interface EfficiencyMetricData extends MetricCardData {
  efficiency: number;
  volumeToLiquidity: number;
}

export interface LiquidityMetricData extends MetricCardData {
  totalLiquidity: number;
  xtzAmount: number;
  tzbtcAmount: number;
}

export interface SlippageMetricData extends MetricCardData {
  size: "small" | "medium" | "large";
  slippageBps: number;
  avgSlippage: number;
}

export interface FeeRevenueMetricData extends MetricCardData {
  dailyRevenue: number;
  cumulativeRevenue: number;
}

export interface ChartDataPoint {
  timestamp: number;
  date: string;
  value: number;
  value2?: number;
}

export interface VolumeChartData {
  timeRange: TimeRange;
  data: ChartDataPoint[];
}

export interface LiquidityChartData {
  timeRange: TimeRange;
  data: ChartDataPoint[];
}

export interface FeeRevenueChartData {
  timeRange: TimeRange;
  dailyData: ChartDataPoint[];
  cumulativeData: ChartDataPoint[];
}

export interface APYBreakdownChartData {
  timeRange: TimeRange;
  data: Array<{
    timestamp: number;
    date: string;
    feeAPY: number;
    subsidyAPY: number;
    netAPY: number;
  }>;
}

export interface LivePriceData {
  poolMid: number;
  externalMid: number;
  deltaBps: number;
  timestamp: number;
}

export interface ExecutionCostPreset {
  size: number;
  cost: number;
}

export interface DepthData {
  bidDepth: number;
  askDepth: number;
  spread: number;
}

export interface RecentPrint {
  timestamp: number;
  side: "BUY" | "SELL";
  size: number;
  preSlippage: number;
  postSlippage: number;
}

export interface EarningsPaceData {
  dailyEarnings: number;
  weeklyEarnings: number;
  asset: "XTZ" | "tzBTC";
}

export interface FeesInRangeData {
  totalUSD: number;
  xtzAmount: number;
  tzbtcAmount: number;
}

export interface SubsidyInRangeData {
  totalUSD: number;
  xtzAmount: number;
  description: string;
}

export interface SIRSBalanceData {
  balance: number;
  valueUSD: number;
  poolShare: number;
}

export interface FeeAPRChartData {
  timeRange: TimeRange;
  data: ChartDataPoint[];
}

export interface FeesEarnedChartData {
  timeRange: TimeRange;
  xtzData: ChartDataPoint[];
  tzbtcData: ChartDataPoint[];
}

export type TransactionType = "Swap" | "Add Liquidity" | "Remove Liquidity";
export type TransactionSide = "BUY" | "SELL" | "-";
export type TransactionAsset = "XTZ" | "tzBTC" | "All";
export type TransactionStatus = "confirmed" | "pending" | "failed";

export interface TransactionFilters {
  type: TransactionType | "All Types";
  side: TransactionSide | "All Sides";
  asset: TransactionAsset | "All Assets";
  searchHash: string;
  minSize?: number;
  maxSize?: number;
  startDate?: Date;
  endDate?: Date;
}

export interface Transaction {
  id: string;
  timestamp: number;
  hash: string;
  type: TransactionType;
  side: TransactionSide;
  amountIn: {
    value: number;
    asset: "XTZ" | "tzBTC";
    usd: number;
  };
  amountOut: {
    value: number;
    asset: "XTZ" | "tzBTC";
    usd: number;
  };
  price?: number;
  fee?: number;
  slippage?: number;
  poolShare?: number;
  block: number;
  status: TransactionStatus;
}

export interface PositionOverview {
  positionValue: number;
  sirsBalance: number;
  entryPrice: number;
  currentValue: number;
}

export interface PositionValueChartData {
  timeRange: TimeRange;
  data: ChartDataPoint[];
}

export interface RecentOperation {
  id: string;
  type: "Add Liquidity" | "Remove Liquidity";
  timestamp: number;
  amounts: {
    xtz: number;
    tzbtc: number;
  };
  sirsChange: number;
  hash: string;
}

export type ModalKey =
  | "price"
  | "volume"
  | "apy"
  | "efficiency"
  | "liquidity"
  | "apyBreakdown"
  | "slippageSmall"
  | "slippageMedium"
  | "slippageLarge"
  | "feeRevenue"
  | null;

export interface AnalysisModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  timeRange: TimeRange;
  onTimeRangeChange: (range: TimeRange) => void;
  onExport: (format: "csv" | "json") => void;
}

export type ExportFormat = "csv" | "json";

export interface ExportOptions {
  format: ExportFormat;
  filename: string;
  data: unknown[];
}

export interface AnalyticsAPIResponse<T> {
  data: T;
  timestamp: number;
  status: "success" | "error";
  error?: string;
}

export interface PoolAnalyticsData {
  price: PriceMetricData;
  volume: VolumeMetricData;
  apy: APYMetricData;
  efficiency: EfficiencyMetricData;
  liquidity: LiquidityMetricData;
  apyBreakdown: APYBreakdownChartData;
  slippageSmall: SlippageMetricData;
  slippageMedium: SlippageMetricData;
  slippageLarge: SlippageMetricData;
  feeRevenue: FeeRevenueMetricData;
  volumeOverTime: VolumeChartData;
  liquidityOverTime: LiquidityChartData;
  feeRevenueTrend: FeeRevenueChartData;
}

export interface MarketData {
  livePrice: LivePriceData;
  executionCost: ExecutionCostPreset[];
  depth: DepthData;
  recentPrints: RecentPrint[];
}

export interface EarningsData {
  pace: EarningsPaceData;
  feesInRange: FeesInRangeData;
  subsidyInRange: SubsidyInRangeData;
  sirsBalance: SIRSBalanceData;
  feeAPR: FeeAPRChartData;
  feesEarned: FeesEarnedChartData;
}

export interface ActivityData {
  transactions: Transaction[];
  totalCount: number;
  filters: TransactionFilters;
}

export interface PositionData {
  overview: PositionOverview;
  valueOverTime: PositionValueChartData;
  recentOperations: RecentOperation[];
}
