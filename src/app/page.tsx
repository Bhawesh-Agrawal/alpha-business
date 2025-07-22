import BestSellingProduct from "@/Component/BestSelingProduct/page";
import Framework from "@/Component/Company/page";
import ContactCTA from "@/Component/Contact/page";
import GoogleReviews from "@/Component/GoogleReview/page";
import HeroSection from "@/Component/HeroSection/page";
import ProductList from "@/Component/ProductCard/page";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-start">
      <HeroSection/>
    </div>
    <div>
      <ProductList/>
    </div>
    {/* <div>
      <Framework />
    </div> */}
    <div>
      <BestSellingProduct />
    </div>
    <div>
      <GoogleReviews />
    </div>
    <div>
      <ContactCTA />
    </div>
    <div className="h-[100vh]"></div>
    </>
  );
}
