import React from "react";
import { post } from "@prisma/client";
import Link from "next/link";

const BlogCard: React.FC<{ p: post }> = ({ p }: { p: post }) => {
  return (
    <div className="p-6 rounded-lg w-full">
      <Link href={`/blog/${p.slug}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{p.title}</h5>
      </Link>
      {/* medium emphasis text 60 percent */}
      <p className="mb-1 font-normal">{p.summary}</p>
      <p className="mb-3 opacity-60">{p.publishedat?.toDateString()}</p>
      <Link href={`/blog/${p.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
      <div className="w-full h-[0.5px] rounded-full mb-3 bg-white opacity-[38%]"></div>
    </div>
  )
}

export default BlogCard;