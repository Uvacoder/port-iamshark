import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
//import Subscribe from '../components/Subscribe';
//import VideoCard from '../components/VideoCard';
import Timeline from '../components/Timeline';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
              Shashank Priyadarshi
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Member and Mentor {''}
              <a href="https://amfoss.in"><span className="font-semibold" >@amFOSS</span></a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              A developer, exploring Deep Learning and computer vision. 
              Ask me about Open-Source, Android, Python, or Machine Learning. 
              <div className="mb-0 prose leading-2 text-gray-600 dark:text-gray-400">
          <p>
            Checkout my CV&nbsp;
            <a
              href="https://iamsh4shank.github.io/docs/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
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
            title="The year with new learnings: 2021"
            slug="year_review_2021"
            gradient="from-purple-400 via-pink-500 to-blue-500"
          />
          <BlogPostCard
            title="GSoC 2020 Work Report for Android Client app"
            slug="gsoc_report"
            gradient="from-green-400 to-red-500"
          />
          <BlogPostCard
            title="Part 1 - Neural Networks and Deep Learning"
            slug="part1-nn-and-dl"
            gradient="from-yellow-400 to-blue-500"
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
      </div>
    </Container>
  );
}
