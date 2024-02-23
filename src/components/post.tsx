import Image from "next/image";

export default function Post() {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-around gap-4 border border-x-0 border-t-0 border-b-gray-200 px-4 py-12 text-base">
        {/* wraps one post */}

        <span className="flex w-7 flex-col items-center justify-center gap-2">
          <Image
            src={"/images/icons/chevrons-up-icon.svg"}
            alt={"upvote"}
            className="rounded-full"
            width={20}
            height={20}
          />
          <p>105</p>
          <Image
            src={"/images/icons/chevrons-down-icon.svg"}
            alt={"downvote"}
            className="rounded-full"
            width={20}
            height={20}
          />
        </span>

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

            <p className="text-sm font-normal">
              Posted by username 3 hours ago
            </p>
          </span>

          <span className="">
            <p className="py-1 font-medium">
              Honest opinions on Lime ebikes in London
            </p>

            <p className="py-1 text-sm font-normal">
              Tell me your good and bad experiences of using Lime as a Rider in
              London
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
