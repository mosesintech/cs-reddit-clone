import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start justify-between border border-y-0 border-l-0 border-gray-200 p-4">
      <span className="">
        <Image
          src={"/images/icons/home-icon.svg"}
          alt={"Home"}
          width={24}
          height={24}
        />
        <Image
          src={"/images/icons/posts-icon.svg"}
          alt={"Home"}
          width={24}
          height={24}
        />
        <Image
          src={"/images/icons/login-icon.svg"}
          alt={"Home"}
          width={24}
          height={24}
        />
      </span>

      <span className="flex flex-row items-center justify-between">
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
