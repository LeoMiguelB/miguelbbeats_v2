"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";


interface MDXContentProps {
  source: MDXRemoteProps;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote
    {...source}
    // components={
    //   {
    //     h1: (props) => <H1 {...props}/>,
    //     h2: (props) => <H2 {...props}/>,
    //     p: (props) => <P {...props}/>
    //   }
    // }
  />;
}