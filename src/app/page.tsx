import BestSellingProduct from "@/Component/BestSelingProduct/page";
import BlogCarousel from "@/Component/Blog/page";
import Framework from "@/Component/Company/page";
import ContactCTA from "@/Component/Contact/page";
import GoogleReviews from "@/Component/GoogleReview/page";
import HeroSection from "@/Component/HeroSection/page";
import ProductList from "@/Component/ProductCard/page";
import ProductSection from "@/Component/ProductSection/page";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-start">
      <HeroSection/>
    </div>
    <div>
      <ProductList/>
    </div>
    <div>
      <BestSellingProduct />
    </div>
    <div>
      <GoogleReviews />
    </div>
    <div>
      <ContactCTA />
    </div>
    <div>
      <ProductSection />
    </div>
    <div>
      <BlogCarousel />
    </div>
    <div>
      <Framework />
    </div>
    </>
  );
}
