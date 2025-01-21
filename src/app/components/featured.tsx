import { client } from "@/sanity/lib/client"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";




async function getData(){
    const fetch = await client.fetch(`*[_type == "featured"]{
        "slug":slug.current,
        heading,
        "imageUrl": image.asset->url,
        article,
          paragraph,
          button
          
      }`)
      return fetch;
}


export async function Featured() {
  const data = await getData()
  
    return (
        <div className="text-center  mt-10">
            <h1 className="text-[2rem] font-bold text-[#003366]">Featured Article</h1>
            <div className="flex flex-wrap gap-[100px] justify-center mt-10" >{data.map((item: { imageUrl: string | undefined; article: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<void>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<void>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; paragraph: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<void>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<void>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; slug: void; button: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<void>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<void>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; },i:number)=>{
                return(
                    <div key={i}>
                        <div className=" bg-white shadow-md p-[15px] rounded-[5px] hover:scale-[1.05] cursor-pointer hover:duration-300 w-[400px]  ">
                    <img className="w-[100%] rounded-[5px]" src={item.imageUrl} alt="" />
                    <h1 className="text-[1.2rem] font-bold text-[#003366] mt-[10px]">{item.article}</h1>
                    <p className="mt-[10px]"> {item.paragraph} </p>
                   <div className="flex justify-start"> <a href={`/${item.slug}`} className="h-5 text-indigo-600 cursor-pointer mt-4 hover:text-red-600" >{item.button}</a>
</div>


                </div>
                
                    </div>
                )
            })}
                
            </div>

        </div>
)
}