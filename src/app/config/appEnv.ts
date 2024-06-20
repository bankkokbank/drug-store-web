export const appEnv = {
  NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  NEXT_PUBLIC_CUSTOMER_API_URL:
    process.env.NEXT_PUBLIC_CUSTOMER_API_URL || "http://localhost:4001",
  NEXT_PUBLIC_UNLAYER_ID: process.env.NEXT_PUBLIC_UNLAYER_ID || "182896",
  NEXT_PUBLIC_TBS_HOSTNAME: process.env.NEXT_PUBLIC_TBS_HOSTNAME || "",
};
