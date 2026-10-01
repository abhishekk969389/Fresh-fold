import React from "react";
import { data } from "@/app/data";
import Navbar from "@/app/components/homelayout/navbar";
import Subbanner from "@/app/components/ui/subbanner";
import Footer from "@/app/components/homelayout/footer";
import BlogSidebar from "@/app/components/layout/blogdetails/blog-sidebar";
import BlogContent from "@/app/components/layout/blogdetails/blog-content";
import Cta from "@/app/components/ui/cta";

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = data.blog.posts.find(p => p.id === slug);
  const details = data.blogDetails[slug];

  if (!post || !details) {
    return (
      <main className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-bold text-[#0b2d4a] mb-4">Blog Not Found</h1>
        <a href="/blog" className="text-[#00bcd4] hover:underline">Return to Blogs</a>
      </main>
    );
  }

  return (
    <main className="">
      <Subbanner 
        customTitle={details.subbanner.title} 
        customBreadcrumbs={details.subbanner.breadcrumbs}
        customBgImage={details.subbanner.bgImage}
      />

      <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 ">
        <div className="max-w-[1360px] mx-auto px-6 xl:px-12 flex flex-col-reverse lg:flex-row gap-12 xl:gap-16">
          <BlogSidebar blogData={data.blog} currentCategory={post.category} />
          <BlogContent post={post} details={details} />
        </div>
        
        <Cta className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14" />
      </section>
    </main>
  );
}
