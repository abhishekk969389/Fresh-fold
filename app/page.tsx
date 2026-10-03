import Banner from "@/app/components/homelayout/banner";
import Services from "@/app/components/homelayout/services";
import Works from "@/app/components/homelayout/works";
import WhyChoose from "@/app/components/homelayout/whychoose";
import Testimonial from "@/app/components/homelayout/testimonial";
import Counting from "@/app/components/homelayout/counting";
import Blog from "@/app/components/homelayout/blog";
import CTA from "@/app/components/ui/cta";
import About from "./components/homelayout/about";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Works />
      <WhyChoose />
      <Testimonial />
      <Counting />
      <Blog />
      <CTA />
    </>
  );
}
