import { allPosts } from "@/.contentlayer/generated";
import DisplayCats from "@/components/DisplayCats";
import GetFormattedDate from "@/utils/getFormattedDate";
import Link from "next/link";

export default function Home() {
  return (
    <div className="site-width xPadding">
      <div className="mt-4 flex flex-col gap-y-5">
        {allPosts.map((post) => (
          <Link href={`blog/${post.slug}`} key={post._id}>
            <article>
              <GetFormattedDate dateString={post.date} />
              <h1>{post.title}</h1>
              {post.description && <p className="mt-0">{post.description}</p>}
              <div className="flex gap-x-2">
                {post.categories?.map((cat, i) => {
                  return (
                    <div className="flex mt-2" key={i}>
                      <div
                        key={cat.title}
                        className="lowercase text-sm border border-neutral-300 dark:border-neutral-600 rounded-full px-3 shadow-sm shadow-neutral-100 dark:shadow-neutral-800"
                      >
                        {cat.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
