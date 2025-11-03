import { getLatestProducts } from "@/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "الصفحة الرئيسية",
};

const HomeRoute = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="الجديد" />
    </div>
  );
};

export default HomeRoute;
