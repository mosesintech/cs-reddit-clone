"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import Image from "next/image";

interface CreatePostProps {
  postId: number;
  authorId: number;
}

export function CreateComment(props: CreatePostProps) {
  const { postId, authorId } = props;
  const router = useRouter();
  const [body, setBody] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setBody("");
    },
  });

  return (
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
          createPost.mutate({ body });
        }}
        className="flex w-full flex-col gap-2 "
      >
        <input
          type="text"
          placeholder="Comment your thoughts"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full text-black"
        />

        <hr className="mb-2 w-full text-gray-200" />

        <Button
          type="submit"
          className="h-9 w-24 self-end rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition"
          disabled={createPost.isLoading}
        >
          {createPost.isLoading ? "Commenting..." : "Comment"}
        </Button>
      </form>
    </div>
  );
}
