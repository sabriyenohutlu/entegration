// lib/trendyol.ts
import crypto from "crypto";
import axios from "axios";

const BASE_URL = "https://api.trendyol.com/sapigw";

export async function fetchTrendyolProducts() {
  const apiKey = process.env.TRENDYOL_API_KEY!;
  const apiSecret = process.env.TRENDYOL_API_SECRET!;
  const supplierId = process.env.TRENDYOL_SUPPLIER_ID!;
  const timestamp = Date.now();
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(apiKey + timestamp)
    .digest("hex");

  const auth = Buffer.from(`${apiKey}:${signature}`).toString("base64");

  const headers = {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/json",
  };

  const res = await axios.get(
    `${BASE_URL}/suppliers/${supplierId}/products`,
    { headers }
  );

  return res.data.content;
}
