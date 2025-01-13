import React from "react"
import Markdown from "markdown-to-jsx"
import getPostMetadata from "../../../../utils/getPostMetadata"
import fs from 'fs'
import matter from 'gray-matter'

interface PostPage {
    params: {
        slug: string
    };
    searchParams: { [key: string]: string | string[] | undefined};
}

function getPostContent(slug: string) {
    const folder = 'posts/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    console.log("Raw content: ", content)

    const matterResult = matter(content)

    console.log("Matter result: ", matterResult)

    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('posts')
    return posts.map((post) => ({ slug: post.slug}))
}

export async function generateMetadata({ params, searchParams }: PostPage) {
    const resolvedParams = await params
    const id = resolvedParams?.slug ? ' * ' + resolvedParams?.slug: '' 
    return {
        title: `The Garbage Dump ${id.replaceAll('-', ' ')}`,
    }
}

export default async function PostPage(props: PostPage) {
    const params = props.params
    const slug = params.slug
    const post = getPostContent(slug)
    return (
        <main className = "container mx-auto">
            <article className="prose dark:prose-invert max-w-none w-full">
                <h1>{post.data.title}</h1>
                <h2>{post.data.date}</h2>
                <Markdown>{post.content}</Markdown>
            </article>
        </main>
    )
}
