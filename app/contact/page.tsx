
import Subbanner from "@/app/components/ui/subbanner";
import ContactSection from "../components/layout/contact/contactsec";
import CTA from "../components/ui/cta";



export default function ContactPage() {
  return (
    <>
      <Subbanner pageKey="contact" />
      <ContactSection/>
      <CTA/>
    </>
  );
}
