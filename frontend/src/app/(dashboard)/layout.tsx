import Sidebar from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Pokedash - Dashboard",
  description: "Pokedash um dashboard para gerenciar seus pokemons",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth");
  }

  return (
    <div className="flex-col lg:flex-row lg:pt-0 flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <main className="w-full pt-8  lg:pt-0 lg:px-0 ">{children}</main>
    </div>
  );
}
