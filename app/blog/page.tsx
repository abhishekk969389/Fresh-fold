import Subbanner from "@/app/components/ui/subbanner";
import Blog from "@/app/components/homelayout/blog";
import CTA from "../components/ui/cta";

export default function BlogPage() {
    return (
        <>
            <Subbanner pageKey="blog" />
            <Blog isPage={true} />
           <CTA/>
        </>
    );
}

