import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import Post from "~/components/post";
import { api } from "~/trpc/server";

export default async function SinglePostPage() {
  noStore();

  const latestPost = await api.post.getLatest.query();

  return (
    <main className="min-h-screen max-w-[600px]">
      <div className="container flex flex-col items-center justify-center px-4 py-8">
        <div className="flex w-full flex-col items-start justify-center">
          <Link href="/">
            <span className="flex w-60 flex-row items-center gap-4 rounded-xl px-4 py-3">
              <Image
                src={"/images/icons/arrow-left-icon.svg"}
                alt={"Home"}
                width={24}
                height={24}
              />
              Back to posts
            </span>
          </Link>
          <Post />


          {latestPost ? (
            <p className="truncate">
              Your most recent post: {latestPost.title}
            </p>
          ) : (
            <>
              <p className="p-4">There are no comments yet.</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
