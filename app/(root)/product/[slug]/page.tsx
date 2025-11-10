import { getProductBySlug } from "@/actions/product.actions";
import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus, Star } from "lucide-react";
import { notFound } from "next/navigation";

const ProductDetailsRotue = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Image col */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>

          {/* Details Col */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} - {product.category}
              </p>

              <h1 className="h3-bold">{product.name}</h1>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-primary" />
                <p>
                  {product.rating} من {product.numReviews} تقييم
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="rounded-full bg-primary/20 text-primary px-5 py-2"
                />
              </div>
            </div>

            <div className="mt-10">
              <p className="font-semibold">الوصف</p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </div>

          {/* Action Col */}

          <div className="">
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div className="font-bold">السعر</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>

                <div className="mb-2 flex justify-between">
                  <div>الحالة</div>
                  {product.stock > 0 ? (
                    <Badge variant={`default`} className="text-sm px-2">
                      متوفر
                    </Badge>
                  ) : (
                    <Badge variant={`destructive`}>غير متوفر</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                {product.stock > 0 && (
                  <div className="flex-center w-full">
                    <Button className="w-full">
                      اضف الي السلة
                      <Plus />
                    </Button>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsRotue;
