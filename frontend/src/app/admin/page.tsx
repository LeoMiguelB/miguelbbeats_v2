"use client"

import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from "next/dynamic";
import { useState } from 'react';
import { createPost } from '../../../libs/actions';

// support for lazy loading
const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

const Page = () => {
  const [markdown, setMarkdown] = useState("type here...");


  return (
    <div className="p-3">
      <form className="flex flex-col items-center gap-8" action={createPost}>
        <MarkdownEditor
          value={markdown}
          height="500px"
          className="w-full"
          onChange={(value, viewUpdate) => {
            setMarkdown(value);
          }}
        />
        <input type="hidden" name="markdown-content" value={markdown} />
        <input type="text" name="title" className="rounded-md w-1/4 bg-grey p-4 border border-none" defaultValue="title" required/>
        <input type="text" name="metaTitle" className="rounded-md w-1/4 bg-grey p-4 border border-none" defaultValue="meta title" required/>
        <input type="text" name="slug" className="rounded-md w-1/4 bg-grey p-4 border border-none" defaultValue="slug" required/>
        <input type="text" name="summary" className="rounded-md w-1/4 bg-grey p-4 border border-none" defaultValue="summary" required/>
        <input type="email" name="email" className="rounded-md w-1/4 bg-grey p-4 border border-none" defaultValue="enter email..." required/>
        <button type="submit" className="bg-grey rounded-md p-3">Submit</button>
      </form>
    </div>
  )
}

export default Page;