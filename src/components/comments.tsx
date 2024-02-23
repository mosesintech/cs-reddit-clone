import Image from "next/image";

import { CreateComment } from "~/components/create-comment";

export default function Comments() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-6 border border-x-0 border-t-0 border-b-gray-200 px-4 py-8">
      <span className="flex w-full flex-col items-start justify-between gap-2">
        <div className="flex w-full flex-row items-center justify-around gap-4 text-base">
          <div className="flex w-full flex-col items-start justify-center">
            <span className="flex flex-row items-center justify-center gap-2">
              <span className="">
                <Image
                  src={"/images/person.png"}
                  alt={"Avatar"}
                  className="rounded-full"
                  width={24}
                  height={24}
                />
              </span>

              <p className="text-sm font-normal">username 3 hours ago</p>
            </span>

            <p className="py-1 text-sm font-normal">
              Tell me your good and bad experiences of using Lime as a Rider in
              London
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <span className="flex flex-row items-center justify-center gap-2">
            <Image
              src={"/images/icons/chevrons-up-icon.svg"}
              alt={"upvote"}
              className="rounded-full"
              width={16}
              height={16}
            />
            <p>105</p>
            <Image
              src={"/images/icons/chevrons-down-icon.svg"}
              alt={"downvote"}
              className="rounded-full"
              width={16}
              height={16}
            />
          </span>

          <span className="flex flex-row items-center justify-between gap-2">
            <Image
              src={"/images/icons/comment-icon.svg"}
              alt={"downvote"}
              className="rounded-full"
              width={16}
              height={16}
            />
            <p>Reply</p>
          </span>
        </div>
      </span>

      <CreateComment postId={1} authorId={1} />
    </div>
  );
}
