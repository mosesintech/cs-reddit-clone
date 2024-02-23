"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";

export function CreatePost() {
  const user = useUser();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setBody("");
    },
  });

  return (
    <>
      {!!user.isSignedIn && (
        <div className="shadow-input flex w-full flex-row items-start justify-around rounded-xl border border-gray-200 p-4 text-base">
          <span className="pr-4">
            <Image
              src={"/images/person.png"}
              alt={"Avatar"}
              className="rounded-full"
              width={24}
              height={24}
            />
          </span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createPost.mutate({ title, body });
            }}
            className="flex w-full flex-col gap-2 "
          >
            <input
              type="text"
              placeholder="Title of your post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-black"
            />

            <input
              type="text"
              placeholder="Share your thoughts with the world!"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full text-black"
            />

            <hr className="mb-2 w-full text-gray-200" />

            <Button
              type="submit"
              className="h-9 w-14 self-end rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition"
              disabled={createPost.isLoading}
            >
              {createPost.isLoading ? "Posting..." : "Post"}
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
