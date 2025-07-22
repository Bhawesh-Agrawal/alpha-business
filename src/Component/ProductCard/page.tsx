import products from '../../../db-temp/catalouge.json';
import Card from './card';

interface Product {
  id: number;
  title: string;
  description: string;
  Promo: string;
  image: string;
}

export default function ProductList() {
  return (
    // 1. Add the main relative container with a base background color
    <div className="relative bg-gray-50 overflow-hidden py-16 lg:py-24">
      {/* 2. Add the same absolute positioned background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/279.jpg')",
          backgroundSize: '80px 80px'
        }}
      />

      {/* 3. Wrap your content and give it a z-index to place it on top */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item: Product) => (
            <div key={item.id}>
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                promo={item.Promo}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}