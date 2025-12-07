"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Header />

      {children}

      <Footer />
    </main>
  );
}
