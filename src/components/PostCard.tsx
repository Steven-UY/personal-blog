import React from 'react'
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
type PostCardProps = {
    post: {
        title: string,
        date: string,
        slug: string
    }
}

const PostCard: React.FC<PostCardProps> = ( {post} ) => {
    return (
        <Card> 
            <CardHeader>
                <div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p>My first post for whatever uhh this is...</p>
            </CardContent>
            <CardFooter>
                <Link href = {`/post/${post.slug}`}>
                    <button>View Post</button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default PostCard;