import { Header, Footer, Content } from "@/components";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "min-h-screen flex flex-col h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <Header></Header>
      <main className = "flex-grow">
      <Content></Content>
      </main>
      <Footer></Footer>
    </div>
  );
}
