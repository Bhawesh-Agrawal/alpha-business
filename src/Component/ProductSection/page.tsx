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

export default function ProductSection(){
    const productdata = products.filter(product => !product.best_product).slice(0, 8);
    return (
        <div className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              OUR SHOP
            </div>
            <div className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
              Products
            </div>
          </div>
    
          <div className="container mx-auto px-4 sm:px-6 lg:px-28 mt-12">
            <div className="flex flex-wrap justify-center gap-y-10 -mx-4">
              {productdata.map((product) => {
                const productWithUpdatedImages = {
                  ...product,
                  productImages: product.productImages.map(img => `/products/${img}`),
                };
    
                return (
                  <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 px-4">
                    <ProductCard {...productWithUpdatedImages} />
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      );
}