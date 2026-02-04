export const formatUSD = (
  value: number,
  options?: { compact?: boolean; decimals?: number }
): string => {
  const { compact = false, decimals = 2 } = options || {};

  if (compact) {
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(decimals)}M`;
    }
    if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(decimals)}K`;
    }
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

export interface TokenConfig {
  symbol: string;
  decimals: number;
  compact?: boolean;
  useIntlFormat?: boolean;
}

export const TOKEN_CONFIG: Record<string, TokenConfig> = {
  XTZ: { symbol: "XTZ", decimals: 2, compact: true, useIntlFormat: true },
  tzBTC: { symbol: "tzBTC", decimals: 6, compact: false, useIntlFormat: false },
  SIRS: { symbol: "SIRS", decimals: 2, compact: false, useIntlFormat: true },
};

export const formatToken = (
  value: number,
  token: keyof typeof TOKEN_CONFIG | string,
  options?: { compact?: boolean; decimals?: number; showSymbol?: boolean }
): string => {
  const config = TOKEN_CONFIG[token] || {
    symbol: token,
    decimals: 2,
    compact: false,
    useIntlFormat: true,
  };

  const {
    compact = config.compact ?? false,
    decimals = config.decimals,
    showSymbol = true,
  } = options || {};

  const symbol = showSymbol ? ` ${config.symbol}` : "";

  if (compact) {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(decimals)}M${symbol}`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(decimals)}K${symbol}`;
    }
  }

  if (config.useIntlFormat) {
    return `${new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value)}${symbol}`;
  }

  return `${value.toFixed(decimals)}${symbol}`;
};

export const formatPercent = (
  value: number,
  options?: { decimals?: number; showSign?: boolean }
): string => {
  const { decimals = 2, showSign = false } = options || {};
  const sign = showSign && value > 0 ? "+" : "";

  return `${sign}${value.toFixed(decimals)}%`;
};

export const formatBps = (
  value: number,
  options?: { showSign?: boolean }
): string => {
  const { showSign = true } = options || {};
  const sign = showSign && value > 0 ? "+" : "";

  return `${sign}${value.toFixed(1)} bps`;
};

export const formatPrice = (value: number, decimals = 10): string => {
  return value.toFixed(decimals);
};

export const formatDate = (
  timestamp: number,
  options?: { format?: "short" | "long" | "time" | "datetime" }
): string => {
  const { format = "short" } = options || {};
  const date = new Date(timestamp);

  switch (format) {
    case "long":
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case "time":
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    case "datetime":
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    case "short":
    default:
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
  }
};

export const formatTimeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return "just now";
};

export const formatTxHash = (hash: string, chars = 8): string => {
  if (hash.length <= chars * 2) return hash;
  return `${hash.slice(0, chars)}...`;
};

export const formatCompactNumber = (value: number): string => {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(2)}K`;
  }
  return value.toFixed(2);
};

export const getChangeDirection = (
  value: number
): "positive" | "negative" | "neutral" => {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
};

export const formatChange = (
  value: number,
  options?: { type?: "percent" | "value"; decimals?: number }
): { text: string; direction: "positive" | "negative" | "neutral" } => {
  const { type = "percent", decimals = 2 } = options || {};
  const direction = getChangeDirection(value);
  const sign = value > 0 ? "+" : "";

  const text =
    type === "percent"
      ? `${sign}${value.toFixed(decimals)}%`
      : `${sign}${value.toFixed(decimals)}`;

  return { text, direction };
};
