import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Sidebar from "~/components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CS Reddit Clone",
  description: "Made with love by @mosesintech",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-white`}>
        <div className="mx-auto flex flex-row gap-36">
          <ClerkProvider>
            <TRPCReactProvider>
              <Sidebar />
              <div className="max-w-[1163px]">{children}</div>
            </TRPCReactProvider>
          </ClerkProvider>
        </div>
      </body>
    </html>
  );
}
