import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import Timeline from '../components/Timeline';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Shashank Priyadarshi
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Member and Mentor @{''}
              <span className="font-semibold">amFOSS</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              A developer, exploring Deep Learning and computer vision. 
              Ask me about Open-Source, Android, Python, or Machine Learning. 
            
              <div className="mt-3">
                <div className="flex flex-row">
                  <div className="col-auto">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" height = "10px" width="28px"/>
            </div>
            <div className="col-auto ml-3">
            <img src="https://dida.do/img/asset/YXNzZXRzL2Jsb2cvMjAyMTAzMjlfRkdfZGlkYS10ZWNoLXN0YWNrL2dpdGxhYl9sb2dvLnBuZw==?w=1000&h=800&fit=contain&s=87436df5843231427040192cdee31f8d" height = "10px" width="30px"/>
            </div>
            <div className="col-auto ml-3">
            <img src="https://seeklogo.com/images/G/gmail-new-2020-logo-32DBE11BB4-seeklogo.com.png" height = "10px" width="30px"/>
            </div>
            <div className="col-auto ml-3">
            <img src="https://seeklogo.com/images/T/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png" height = "10px" width="30px"/>
            </div>
            <div className="col-auto ml-2">
            <img src="https://4.bp.blogspot.com/-IUDvPAuE9Rg/XE9Muo_8D-I/AAAAAAAAHdE/vDGQsIXh4GM8qdInx9AHPq984Q9P4BEQgCK4BGAYYCw/s1600/Icon-Telegram.png" height = "10px" width="27px"/>
            </div>
            <div className="col-auto ml-3">
            <img src="https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png" height = "10px" width="27px"/>
            </div>
            </div>
        </div>
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Shashank Priyadarshi"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Part 1 - Neural Networks and Deep Learning"
            slug="Part-1-nn-and-DL"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="Which Back End Should I Use As A Front-End Developer?"
            slug="backend"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
