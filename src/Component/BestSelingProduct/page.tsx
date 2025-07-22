import productsData from '../../../db-temp/product_catalouge.json';
import ProductCard from '../ProductShop/page'; 

type Product = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  inStock: boolean;
  best_product: boolean;
  createdAt: string;
  tags: string[];
  productImages: string[];
};

const products: Product[] = productsData;

export default function BestSellingProduct() {
  const bestSellingProducts = products.filter(
    (product) => product.best_product
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
          OUR SHOP
        </div>
        <div className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          Popular Products
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-22 mt-12">
        {/* MODIFIED: Switched from Grid to a centered Flexbox layout */}
        <div className="flex flex-wrap justify-center gap-y-10 -mx-4">
          {bestSellingProducts.map((product) => {
            const productWithUpdatedImages = {
              ...product,
              productImages: product.productImages.map(img => `/products/${img}`),
            };

            // MODIFIED: Each card is now a flex item with defined widths
            return (
              <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
                <ProductCard {...productWithUpdatedImages} />
              </div>
            );
          })}
        </div>
        <div className='flex justify-center items-center mt-16'>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-5 px-8 transition-colors duration-200 hover:shadow-lg cursor-pointer">
                                More Products
            </button>
        </div>
      </div>
    </div>
  );
}