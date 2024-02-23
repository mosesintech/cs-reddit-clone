import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container mx-auto">
      <SignIn
        appearance={{
          elements: {
            internal: "bg-black hover:bg-slate-400 text-sm normal-case",
          },
        }}
      />
    </div>
  );
}
