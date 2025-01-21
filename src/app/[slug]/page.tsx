import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import Comment from '../components/coment';
import { Footers } from '../components/footer';


// Static Paths Generate
// export async function generateStaticParams() {
//   const blogs = await client.fetch(`*[_type == "featured"]{ slug }`);

//   return blogs.map((blog: { slug: { current: string } }) => ({
//     slug: blog.slug.current, // Extract the "current" field from slug
//   }));
// }

interface BlogPostParams {
  params: Promise<{ slug: string; }>; 
}

// Page Component
export default async function BlogPost({ params }:BlogPostParams) {
  const {slug} =await params;
  const blog = await client.fetch(
    `*[_type == "featured" && slug.current == $slug][0]{article,paragraph,"imageUrl":image.asset->url,content}`,
    { slug }
  );

  if (!blog) {
    return (
      <div>
        <h1>Blog not found</h1>
        <p>The blog you are looking for does not exist.</p>
      </div>
    );
  }


  return (
   <div>
   <div className='grid place-items-center m-7'>
      <div className="text-center mt-7">
        <h1 className="text-[#003366] text-[30px] font-bold ">{blog.article}</h1>
      </div>
      <div className='mt-7'>
        <img className='h-[500px] w-auto rounded-md' src={blog.imageUrl} alt={blog.article} />
      </div>
      <div className='text-[24px] mt-7 leading-[40px]'>
      <PortableText value={blog.content} />
      </div>
      <Comment/> 
      
    </div>
    <Footers/>
   </div>
  );
}
