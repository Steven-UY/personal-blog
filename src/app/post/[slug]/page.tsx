import React from "react"
import Markdown from "markdown-to-jsx"
import getPostMetadata from "../../../../utils/getPostMetadata"
import fs from 'fs'
import matter from 'gray-matter'

type PostContent = {
    content: string,
    data: {
        title: string,
        date: string
    }
}

type PostPageProps = {
    params: {
        slug: string
    }
    searchParams?: Record<string, string>
}

//fetch content from markdown file that matches the slug
function getPostContent(slug: string): PostContent{
    const folder = 'posts/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content) as unknown as PostContent;
    return matterResult;
}

//fetch metadata of the page
export const generateStaticParams = async (): Promise<Array<{ slug: string }>> => {
    const posts = getPostMetadata('posts');
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params
    const id = slug ? ' ⋅ ' + slug : '';
    return {
        title: `The Garbage Dump ${id.replaceAll('_', ' ')}`
    };
}

export default async function PostPage({ params }: PostPageProps){
    const { slug } = params
    const post = getPostContent(slug)

    return (
        <main>
            <article>
                <Markdown>{post.content}</Markdown>
            </article>
        </main>
    )
}
