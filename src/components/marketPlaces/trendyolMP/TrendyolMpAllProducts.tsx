import React from "react";
import TrendyolMpAllProductsTable from "./TrendyolMpAllProductsTable";
import { Button } from "@/components/ui/button";

const TrendyolMpAllProducts = () => {
  return (
    <div>
      <div className="grid grid-flow-col grid-rows-2 gap-4">
        <Button variant="outline">Seçili Olanlarda Adet-Fiyat Güncelle</Button>
        <Button variant="outline">Seçili Olanı Trendyol'da Satışa Kapat</Button>
        <Button variant="outline">Seçili Ürünler Yönetilsin</Button>
        <Button variant="outline">Seçili Ürünler Yönetilmesin</Button>
        <Button variant="outline">Seçili Olanın Ürün Id'sini Trendyol'dan Sil</Button>
        <Button variant="outline">Seçili Olanlarda Tüm Bilgileri Güncelle</Button>
        <Button variant="outline">Seçili Olanlara Trendyol Url Oluştur</Button>
      </div>
      <TrendyolMpAllProductsTable />
    </div>
  );
};

export default TrendyolMpAllProducts;
