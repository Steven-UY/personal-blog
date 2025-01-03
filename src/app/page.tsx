import { PostCard } from "@/components";
import { Menu } from "lucide-react";
import Image from "next/image";
import getPostMetadata from "../../utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata('posts');
  console.log(postMetadata);
  return ( 
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return(
            <PostCard key={postIndex} post={post}></PostCard>
          )
        })}
      </div>
    </main>
  );
}