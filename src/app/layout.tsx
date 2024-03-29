import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/ReduxProvider";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <div className="root">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
