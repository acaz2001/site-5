'use client'
import React from 'react'
import BlogGridCard from './blogGridCard'
import blogPosts from '../data/blogData.json';
import { getAllBlogs } from '../sanity/lib/getAllBlogs';
import { useState, useEffect } from 'react';

export default function BlogGrid({isPopular = 'false'}) {
  const [blogs, setBlogs] = useState([])

    useEffect(() => {
    async function fetchBlogs() {
      const data = await getAllBlogs()
      setBlogs(data)
    }
    fetchBlogs()
  }, [])

  const finalBlogs =
    isPopular === 'true'
      ? blogs.filter((post) => post.popular === true)
      : blogs

  return (
    <main className='w-full h-fit grid grid-cols-1
    lg:grid-cols-3 lg:grid-rows-auto gap-5
    md:grid-cols-2
    '>
      {finalBlogs.map((post) => (
        <BlogGridCard
          key={post.slug.current}
          post={{ ...post, slug: post.slug.current }}
        />
      ))}
    </main>
  )
}

