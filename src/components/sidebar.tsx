"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

export default function Sidebar() {
  const user = useUser();

  return (
    <div className="flex min-h-screen flex-col items-start justify-between border border-y-0 border-l-0 border-gray-200 p-4 text-base font-medium">
      <div className="">
        <Link href="/">
          <span className="flex w-60 flex-row items-center gap-4 rounded-xl bg-gray-50 px-4 py-3">
            <Image
              src={"/images/icons/home-icon.svg"}
              alt={"Home"}
              width={24}
              height={24}
            />
            Home
          </span>
        </Link>

        {user.isSignedIn ? (
          <>
            <Link href="/users/thisuser">
              <span className="flex w-60 flex-row items-center gap-4 rounded-xl px-4 py-3">
                <Image
                  src={"/images/icons/posts-icon.svg"}
                  alt={"Home"}
                  width={24}
                  height={24}
                />
                My posts
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <span className="flex w-60 flex-row items-center gap-4 rounded-xl px-4 py-3">
                <Image
                  src={"/images/icons/login-icon.svg"}
                  alt={"Home"}
                  width={24}
                  height={24}
                />
                Log in
              </span>
            </Link>
          </>
        )}
      </div>

      {!!user.isSignedIn && (
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
      )}
    </div>
  );
}
