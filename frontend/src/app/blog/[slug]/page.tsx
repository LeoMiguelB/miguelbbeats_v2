import { getAllSlugs, getPost } from "../../../../libs/actions";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteProps } from "next-mdx-remote";
import MDXContent from "@/app/components/MDXContent";
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {

  const post = await getPost(params.slug);

  return {
    title: post.metatitle,
    description: post.summary
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  /*
  by default next.js will try to prerender everything (this is essentially the alternative to getStaticProps())
  reference: https://github.com/vercel/next.js/issues/51860#issuecomment-1609019374
  */
  const post = await getPost(params.slug);

  // front matter is bugged
  const source = await serialize(post.content);


  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
    {/* // stole from https://flowbite.com/blocks/publisher/blog-templates/ */}
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        {/* using flowbite typography through the format class */}
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <div>
                  {/* TODO update to route to the about me page */}
                  <a href="" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{`${post.firstname} ${post.lastname}`}</a>
                  <p className="text-base text-gray-500 dark:text-gray-400">{post.publishedat?.toDateString()}</p>
                </div>
              </div>
            </address>
          </header>
          {/* wrapper (reference: https://github.com/hashicorp/next-mdx-remote/issues/307#issuecomment-1322246883) */}
          <MDXContent source={source} />
        </article>
      </div>
    </main>
  )
}

// generate all routes at build time
export const generateStaticParams = async () => {
  const slugs = await getAllSlugs();

  return slugs.slice();
}

export default Page;
