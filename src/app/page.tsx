import { PostCard } from "@/components";
import { Menu } from "lucide-react";
import Image from "next/image";
import getPostMetadata from "../../utils/getPostMetadata";
import { normalizeDate } from "../../utils/normalizeDate";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Home() {
  const postMetadata = getPostMetadata('posts');

  const visiblePosts = postMetadata
    .filter(post => !post.hidden)
    .sort((a, b) => {
      const dateA = normalizeDate(a.date);
      const dateB = normalizeDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return ( 
    <main className = "container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post, postIndex) => {
          return(
            <PostCard key={postIndex} post={post}></PostCard>
          )
        })}
      </div>
    </main>
  );
}