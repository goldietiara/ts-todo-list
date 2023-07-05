import NavBar from "@/components/navBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "reate todo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` min-h-screen w-full flex flex-col justify-between text-center text-neutral-900 bg-black text-sm font-light ${inter.className} `}
      >
        <NavBar></NavBar>
        <div className=" py-5 px-3 lg:px-40 font-mono mb-10">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
