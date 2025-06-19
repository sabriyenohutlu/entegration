import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const MarketPlaceCard = () => {
  return (
    <div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="">Trendyol</CardTitle>
          <CardDescription>
            Trendyol'a bağlı ürünleri görüntüleyebilirsiniz
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex-row gap-2">
          <Button type="submit"><Link href="/pazaryerleri/trendyol-tum-urunler">Tüm Ürünler</Link></Button>
          <Button type="submit">Stok ve Fiyat Güncelle</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MarketPlaceCard;
