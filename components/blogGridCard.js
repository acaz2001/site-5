import React from 'react'
import Link from 'next/link'
import { urlFor } from '../sanity/lib/image';
import AnimatedOnScroll from './AnimatedOnScroll';

function BlogGridCard({ post }) {
  if (!post) return null;

  return (
    <AnimatedOnScroll>
    <div className='group relative'>
      <div className='absolute left-[-5px] bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-3 pr-3 m-2'>
        <p className='text-[0.9rem]'>{post.categoryBlogs?.name}</p>
    </div>
    <Link href={`/blog/${post.slug?.current || post.slug}`}>
      <section className='blog h-[22rem] w-full overflow-hidden cursor-pointer'>
        <div className='relative h-[80%] rounded-2xl overflow-hidden bg-cover object-top'>
          <img
            src={post.image ? urlFor(post.image).url() : '/fallback-avatar.jpg'}
            alt={post.title}
            className='absolute w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.02]'
          />

        </div>
        <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
            {post.title}
          </h1>
        </div>
      </section>
    </Link>
    </div>
    </AnimatedOnScroll>
  );
}

export default BlogGridCard;
