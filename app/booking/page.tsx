
import Subbanner from "@/app/components/ui/subbanner";
import BookingSection from "../components/layout/booking/booksec";
import CTA from "../components/ui/cta";


export default function BookingPage() {
  return (
    <>
      <Subbanner pageKey="booking" />
      <BookingSection/>
      <CTA/>
    </>
  );
}
