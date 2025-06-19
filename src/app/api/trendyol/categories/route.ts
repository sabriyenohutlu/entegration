// app/api/trendyol/categories/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import crypto from "crypto";

export async function GET() {
  const apiKey = process.env.TRENDYOL_API_KEY!;
  const apiSecret = process.env.TRENDYOL_API_SECRET!;
  const timestamp = Date.now();

  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(apiKey + timestamp)
    .digest("hex");

  const auth = Buffer.from(`${apiKey}:${signature}`).toString("base64");

  try {
    const res = await axios.get("https://api.trendyol.com/sapigw/product-categories", {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
