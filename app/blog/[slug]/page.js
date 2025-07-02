
import blogPosts from '../../../data/blogData.json';
import { getBlogBySlug } from '../../../sanity/lib/getBlogBySlug';
import { urlFor } from '../../../sanity/lib/image';
import { client } from '../../../sanity/lib/client';
import AnimatedOnScroll from '../../../components/AnimatedOnScroll';


export async function generateStaticParams() {
  const query = `*[_type == "blog" && defined(slug.current)]{ "slug": slug.current }`;
  const blogs = await client.fetch(query);
 


  return blogs
    .filter(post => typeof post.slug === 'string') // 🔒 validacija
    .map(post => ({ slug: post.slug }));
}



  export default async function Page({ params }) {
    const post = await getBlogBySlug(params.slug);

    if (!post) return <p>Blog is not found!</p>;

    return (
    <main className=' flex flex-col items-start w-[100%] '>
    <AnimatedOnScroll>
    <section className='custom-blog flex flex-col gap-5 pt-40 bg-[#ede4fc] px-5 rounded-t-3xl
    lg:px-65 md:px-20'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[2.4rem] font-medium leading-[1.15]
            lg:text-[2.8rem] mdtext-[2.8rem]'>
                {post.title}
            </h1>
            <p className=
            'text-[1.1rem] text-[#6c6474]'>{post.desc}</p>
        </div>
        
        <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center gap-2'>
            <div className='rounded-full'>
                <img src={post.avatarimg ? urlFor(post.avatarimg).width(100).url() : '/fallback-avatar.jpg'} 
                className='w-[2.2rem] h-[2.2rem] rounded-full' 
                ></img>
            </div>
            <div>
                <p className='font-medium'>Written by <span>{post.avatarname}</span></p>
                <p className='text-[0.8rem] text-[#6c6474] font-normal'>{post.avatarjob}</p>
            </div>
        </div>
        <img src={post.image ? urlFor(post.image).url() : '/fallback.jpg'}  
        className='rounded-t-2xl'></img>
        </div>
    </section> 
    </AnimatedOnScroll>
    
    <section className='flex flex-col pt-10 px-5 gap-4
    lg:px-65 md:px-20'>
        <AnimatedOnScroll>
        <p className='text-[1.1rem]'>{post.content}</p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <h1 className='text-[1.8rem] font-medium'>{post.section1}</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className='text-[1.1rem]'>{post.text1}</p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <h3 className='text-[1.5rem] font-medium'>{post.section2}</h3>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className='text-[1.1rem]'>{post.text2}</p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <h3 className='text-[1.5rem] font-medium'>{post.section3}</h3>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className='text-[1.1rem]'>{post.text3}</p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <h3 className='text-[1.5rem] font-medium'>{post.section4}</h3>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className='text-[1.1rem]'>T{post.text4}</p>
        </AnimatedOnScroll>
    </section>
      
    </main>
    )

  }




  