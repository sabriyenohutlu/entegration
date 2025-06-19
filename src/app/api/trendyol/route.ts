// app/api/trendyol/route.ts
import { NextResponse } from "next/server";
import { fetchTrendyolProducts } from "../../../lib/trendyolCalculet";

export async function GET() {
  try {
    const products = await fetchTrendyolProducts();
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("Trendyol API Hatası:", error.message);
    return NextResponse.json({ error: "API hatası oluştu." }, { status: 500 });
  }
}
