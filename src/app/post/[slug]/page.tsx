import React from "react"
import Markdown from "markdown-to-jsx"
import getPostMetadata from "../../../../utils/getPostMetadata"
import fs from 'fs'
import matter from 'gray-matter'

interface Params {
  slug: string
}

interface PageProps {
  params: Params
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

export async function generateMetadata({ params }: PageProps) {
    const id = params?.slug ? ' * ' + params.slug : '' 
    return {
        title: `The Garbage Dump ${id.replaceAll('-', ' ')}`,
    }
}

export default async function PostPage(props: PageProps) {
    const { slug } = props.params
    const post = getPostContent(slug)
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
    )
}
