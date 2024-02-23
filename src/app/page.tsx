import { unstable_noStore as noStore } from "next/cache";

import { CreatePost } from "~/app/_components/create-post";
import Post from "~/components/post";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen max-w-[600px] flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <CreatePost />

      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.title}</p>
      ) : (
        <>
          {/*<p>There are no posts yet.</p>*/}
          <AllPosts />
        </>
      )}
    </div>
  );
}

function AllPosts() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* wraps all posts */}

      <Post />
    </div>
  );
}
