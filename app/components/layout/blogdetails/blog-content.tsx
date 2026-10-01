import React from 'react';
import Image from 'next/image';
import { FaUser, FaCommentAlt, FaRegCheckCircle } from 'react-icons/fa';
import type { BlogPost, BlogDetailsData } from '@/app/data';

interface Props {
  post: BlogPost;
  details: BlogDetailsData;
}

export default function BlogContent({ post, details }: Props) {
  return (
    <article className="w-full lg:flex-1">
      
      {/* Hero Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden mb-8">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-6 text-[#5a7184] text-[15px] font-medium mb-6">
        <div className="flex items-center gap-2">
          <FaUser className="text-[#00bcd4]" />
          <span>By {details.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCommentAlt className="text-[#00bcd4]" />
          <span>{details.commentsCount}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#0b2d4a] leading-[1.1] mb-6">
        {post.title}
      </h1>

      {/* Content 1 */}
      <div className="text-[#5a7184] text-[16px] leading-[1.8] mb-10 flex flex-col gap-6">
        {details.content1.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Expertise Section */}
      <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#0b2d4a] mb-6">
        {details.expertise.title}
      </h3>
      <div className="text-[#5a7184] text-[16px] leading-[1.8] mb-10 flex flex-col gap-6">
        {details.expertise.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {details.expertise.images.map((img, idx) => (
          <div key={idx} className="relative w-full h-[250px] md:h-[300px] rounded-[20px] overflow-hidden shadow-lg">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Top Tips Section */}
      <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#0b2d4a] mb-6">
        {details.tips.title}
      </h3>
      <p className="text-[#5a7184] text-[16px] leading-[1.8] mb-8">
        {details.tips.description}
      </p>

      <ul className="flex flex-col gap-4 mb-10">
        {details.tips.list.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaRegCheckCircle className="text-[#00bcd4] text-[20px] shrink-0 mt-1" />
            <span className="text-[#5a7184] text-[16px] leading-[1.6]">{item}</span>
          </li>
        ))}
      </ul>

      {/* Why Professional Cleaning Matters Section */}
      <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#0b2d4a] mb-6">
        {details.why.title}
      </h3>
      <div className="text-[#5a7184] text-[16px] leading-[1.8] mb-0 flex flex-col gap-6">
        {details.why.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

    </article>
  );
}
