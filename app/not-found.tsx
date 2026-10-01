import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function NotFound() {
  return (
    <main className="relative min-h-[90vh] lg:min-h-screen flex items-start pt-8 sm:pt-12 lg:pt-16 pb-20 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/notfound.png"
          alt="404 Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 xl:px-12">
        <div className="max-w-xl text-white space-y-6">
          <h1 className="text-[60px] sm:text-[80px] lg:text-[100px] font-extrabold tracking-tight leading-none mb-2 drop-shadow-md">
            Oops!
          </h1>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold leading-tight mb-6 drop-shadow-md">
            Page <span className="text-[#ffc107]">Not Found</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-200 leading-relaxed mb-8 drop-shadow-sm font-medium">
            The page you're looking for might have been<br className="hidden sm:block" />
            moved, deleted, or doesn't exist.<br className="hidden sm:block" />
            Let's get you back on track.
          </p>
          
          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 bg-[#ffc107] hover:bg-[#ffca28] text-[#023e52] font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Back to Home
              <FiArrowRight className="w-5 h-5 font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
