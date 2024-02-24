"use server"

// grab the prisma client
import prisma from "../../utils/prisma/prisma"
import { post, author } from "@prisma/client";

export async function getAllPost() {
  // fetch only title and summary to display 
  // aparently (someArg) are not allowed in the SQL statement
  const result: post[] = await prisma.$queryRaw`
  SELECT * FROM post;`;

  
  return result;
}

export async function getPost(slug: string) {
  // slug is indexed in db
  // join on fk authorId
  const result: post[] & author[] = await prisma.$queryRaw`
  SELECT * FROM post INNER JOIN author ON post.email = author.email WHERE slug=${slug}`;

  return result[0];
}

export async function getAllSlugs() {
  const result: {slug: post["slug"]}[] = await prisma.$queryRaw`
  SELECT slug FROM post;
  `;

  return result;
}


export async function createPost(formData: FormData) {
  const rawFormData = {
    markdown: formData.get('markdown-content') as string,
    email: formData.get('email') as string,
    title: formData.get('title') as string,
    metaTitle: formData.get('metaTitle') as string,
    slug: formData.get('slug') as string,
    summary: formData.get('summary') as string,
  }

  // email is indexed
  const author: author[] = await prisma.$queryRaw`
  SELECT * FROM author WHERE email=${rawFormData.email}
  `;


  // TODO should implement error handling here
  const insertPost = await prisma.$executeRaw`
  INSERT INTO POST 
  (email, title, metaTitle, slug, summary, published, content) VALUES
  (${author[0].email}::jsonb::text::numeric, ${rawFormData.title},${rawFormData.metaTitle}, ${rawFormData.slug}, ${rawFormData.summary}, true, ${rawFormData.markdown})`;

}

