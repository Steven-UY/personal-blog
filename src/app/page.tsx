import { Header, Footer, Content } from "@/components";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "min-h-screen flex flex-col">
      <Header></Header>
      <main className = "flex-grow">
      <Content></Content>
      </main>
      <Footer></Footer>
    </div>
  );
}
