import { allPosts } from "@/.contentlayer/generated";
import DisplayCats from "@/components/DisplayCats";
import GetFormattedDate from "@/utils/getFormattedDate";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillCheckSquare,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="xPadding min-h-screen">
      <section className="sm:flex items-end">
        <div>
          <img
            src="transparent_profile.png"
            alt=""
            className="brightness-150 w-[175px] rounded-full"
          />
          <div className="flex items-center gap-x-6">
            <h1 className="text-[42px] tracking-wider mt-6 font-bold">Henrik Näsmark</h1>

            {/* <div>
            <AiFillCheckSquare className="text-green-500" size={45} />
          </div> */}
          </div>
          <div className="text-[16px] tracking-[1px] font-semibold uppercase flex gap-x-2 items-center">
            <div className=" gap-x-2 items-center">
              <span>Entrepreneur</span>
              {/* <AiFillCheckSquare className="text-sky-500" size={25} /> */}
            </div>
            <div className="flex gap-x-2 items-center">
              <span>Visionary</span>
              {/* <AiFillCheckSquare className="text-sky-500" size={25} /> */}
            </div>
            <div className="flex gap-x-2 items-center">
              <span>Activist</span>
              {/* <span>Activist</span> <AiFillCheckSquare className="text-sky-500" size={25} /> */}
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-2 text-sky-400">
            <AiFillInstagram className=" hover:text-sky-700" size={25} />
            <AiFillFacebook className=" hover:text-sky-700" size={25} />
            <AiFillLinkedin className=" hover:text-sky-700" size={25} />
            <AiFillTwitterSquare className=" hover:text-sky-700" size={25} />
            <AiFillYoutube className=" hover:text-sky-700" size={25} />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-[32px] font-semibold uppercase text-sky-400">My mission</div>
          <div className="text-3xl max-w-[650px] mx-auto">
            {/* Entreprenör, visionär och aktivist som underivsar om det pågående förfallet av vårt
          samhälle, hur man överlever, samt hur vi bygger en hållbar värld ur askan. */}
            To inform, educate and warn about the ongoing societal{" "}
            <span className="line-through">collapse</span> decline, how to{" "}
            <span className="line-through">survive</span> live through it, and build a new earth
            sustailable with ecology.
            {/* <span className="decoration-green-400 font-semibold lg:decoration-[3px] decoration-[2px] underline-offset-[5px] lg:underline-offset-[5px]">
            new
          </span>{" "}
          <span className="decoration-green-400 font-semibold lg:decoration-[3px] decoration-[2px] underline-offset-[5px] lg:underline-offset-[5px]">
            sustailable
          </span>{" "}
          <span className="decoration-green-400 font-semibold lg:decoration-[3px] decoration-[2px] underline-offset-[5px] lg:underline-offset-[5px]">
            earth
          </span>{" "} */}
          </div>

          {/* <button className="px-8 py-2.5 bg-sky-400 text-white rounded-xl mt-6">Learn more</button> */}
        </div>
      </section>
      <hr className="h-px my-16" />
      <section className="">
        <h1 className="h-underline">entrepreneurship</h1>
        <div className="w-full mt-10 flex items-center gap-x-8">
          <div className="px-7 py-4 bg-neutral-100 rounded-xl">
            <img src="logo_app.png" className="w-[50px]" alt="" />
            <h2>Virvelvind AB</h2>
            <p className="text-lg mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, aspernatur
              reprehenderit error quidem, quia voluptate commodi dignissimos necessitatibus quo
              deleniti voluptates provident.
            </p>
          </div>
          <div className="px-7 py-4 bg-neutral-100 rounded-xl">
            <img src="logo.png" alt="" />
            <h2>Naesmark web design</h2>
            <p className="text-lg mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, aspernatur
              reprehenderit error quidem, quia voluptate commodi dignissimos necessitatibus quo
              deleniti voluptates provident.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <h1 className="h-underline">articles</h1>
        <div className="grid sm:grid-cols-2 w-full sm:gap-y-8 sm:gap-x-8 gap-y-6 mt-8 sm:mt-12">
          {allPosts.map((post) => (
            <Link href={`blog/${post.slug}`} key={post._id}>
              <article className="sm:px-8 sm:py-6 px-6 py-4 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <div className="flex gap-x-2">
                  {post.categories?.map((cat, i) => {
                    return (
                      <div className="flex mt-2" key={i}>
                        <div
                          key={cat.title}
                          className="text-sm border-neutral-400 dark:border-neutral-600 rounded-full border px-2 shadow-sm shadow-neutral-100 dark:shadow-neutral-800"
                        >
                          {cat.title}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <h2>{post.title}</h2>
                {post.description && <p className="mt-0">{post.description}</p>}
                <div className="text-neutral-500 dark:text-neutral-500 mt-4">
                  <GetFormattedDate dateString={post.date} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
