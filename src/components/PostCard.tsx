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
                <CardTitle>
                <Link href={`/post/${post.slug}`}>
                <div className="postCard">
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                </div>
                </Link>
                </CardTitle>
            </CardHeader>   
        </Card>
    )
}

export default PostCard;