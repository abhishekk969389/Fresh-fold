import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { GoArrowRight } from "react-icons/go";
import type { BlogData, BlogPost } from '@/app/data';
import { FaCalendarAlt } from 'react-icons/fa';

interface Props {
  blogData: BlogData;
  currentCategory?: string;
}

export default function BlogSidebar({ blogData, currentCategory }: Props) {
  return (
    <aside className="w-full lg:w-[400px] shrink-0 flex flex-col gap-10">
      
      {/* Categories */}
      <div className="bg-gray-200/80 rounded-2xl p-6 md:p-8">
        <h3 className="text-[22px] font-extrabold text-[#0b2d4a] mb-2">Categories</h3>
        <div className="w-10 h-[3px] bg-[#00bcd4] mb-6"></div>
        
        <ul className="flex flex-col gap-3">
          {blogData.categories.map((cat, idx) => {
            const matchedPost = blogData.posts.find(p => p.category === cat) || blogData.posts[idx % blogData.posts.length];
            const isActive = currentCategory === cat;
            return (
            <li key={idx}>
              <Link 
                href={`/blogdetails/${matchedPost.id}`}
                className={`flex items-center justify-between px-5 py-4 rounded-xl font-bold text-[15px] transition-all ${
                  isActive 
                    ? 'bg-[#073c47] text-white shadow-md' 
                    : 'bg-white text-[#5a7184] hover:bg-[#073c47] hover:text-white hover:shadow-md'
                }`}
              >
                <span>{cat}</span>
                <GoArrowRight className="text-[18px]" />
              </Link>
            </li>
            );
          })}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-200/80 rounded-2xl p-6 md:p-8">
        <h3 className="text-[22px] font-extrabold text-[#0b2d4a] mb-2">Recent Posts</h3>
        <div className="w-10 h-[3px] bg-[#00bcd4] mb-6"></div>
        
        <div className="flex flex-col gap-6">
          {blogData.posts.slice(0, 3).map((post: BlogPost) => (
            <Link href={`/blogdetails/${post.id}`} key={post.id} className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full h-[160px] rounded-xl overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#5a7184] text-[12px] mb-1.5 font-medium">
                  <FaCalendarAlt className="text-[#00bcd4]" />
                  <span>{post.date.day} {post.date.month} {post.date.year}</span>
                </div>
                <h4 className="text-[16px] font-bold text-[#0b2d4a] leading-snug group-hover:text-[#00bcd4] transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </aside>
  );
}
