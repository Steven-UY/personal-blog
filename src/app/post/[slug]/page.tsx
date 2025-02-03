import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../../utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug: string) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

// Notice that we allow params to be either a plain object or a promise that resolves to that object.
export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params; // safe whether params is a promise or not
  const id = slug ? " * " + slug : "";
  return {
    title: `The Garbage Dump ${id.replaceAll("-", " ")}`,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostContent(slug);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto flex-grow">
        <article className="prose dark:prose-invert max-w-none w-full">
          <h1>{post.data.title}</h1>
          <h3 className="-mt-4">{post.data.date}</h3>
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
    </div>
  );
}
