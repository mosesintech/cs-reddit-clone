import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start justify-between border border-y-0 border-l-0 border-gray-200 p-4 text-base font-medium">
      <div className="">
        <span className="flex w-60 flex-row items-center gap-4 rounded-xl bg-gray-50 px-4 py-3">
          <Image
            src={"/images/icons/home-icon.svg"}
            alt={"Home"}
            width={24}
            height={24}
          />
          <Link href="/">Home</Link>
        </span>
        <span className="flex w-60 flex-row items-center gap-4 rounded-xl px-4 py-3">
          <Image
            src={"/images/icons/posts-icon.svg"}
            alt={"Home"}
            width={24}
            height={24}
          />
          <Link href="/">My posts</Link>
        </span>
        <span className="flex w-60 flex-row items-center gap-4 rounded-xl px-4 py-3">
          <Image
            src={"/images/icons/login-icon.svg"}
            alt={"Home"}
            width={24}
            height={24}
          />
          <Link href="/">Log in</Link>
        </span>
      </div>

      <span className="flex flex-row items-center justify-between gap-4">
        <Image
          src={"/images/person.png"}
          alt={"Avatar"}
          className="rounded-full"
          width={24}
          height={24}
        />

        <p>Firstname Lastname</p>
      </span>
    </div>
  );
}
