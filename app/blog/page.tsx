import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  console.log(allPosts[1].slug);
  return (
    <div className="site-width xPadding">
      <h1 className="mt-6">Blog</h1>
      <div className="grid grid-cols-3 sm:grid-cold-5">Categories</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={`${post.slug}`}>
              <h2>{post.title}</h2>
              {post.slug}
              {post.description && <p className="mt-0">{post.description}</p>}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
