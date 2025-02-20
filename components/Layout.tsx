import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>مؤيد شقاف</title>
        <meta name="description" content="Welcome to my personal portfolio" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
