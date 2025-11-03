import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Star } from "lucide-react";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
          />
        </Link>
      </CardHeader>

      <CardContent className={`p-4 grid gap-4`}>
        <Badge className="text-xs">{product.brand}</Badge>

        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-semibold">{product.name}</h2>
        </Link>

        <div className="flex-between gap-4">
          <div className="flex gap-2 items-center">
            <Star size={18} className="text-primary" />
            <p>{product.rating}</p>
          </div>

          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">تم نفاد الكمية</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
