"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { NavbarSidebar } from "./navbar-sidebar";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive = false }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg text-black",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
const NavbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-white text-white w-full h-20 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold text-black", poppins.className)}>
          funroad
        </span>
      </Link>
      <div className="flex lg:hidden items-center pr-4">
        <Button variant="ghost"
        className="size-12 border-transparent bg-white text-black"
        onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon/>
        </Button>
        <NavbarSidebar
          items={NavbarItems}
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
        />
      </div>

      <div className="items-center gap-4 hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex items-center justify-center">
        <Button
          asChild
          variant="secondary"
          className="border-l px-12 h-full rounded-none bg-white hover:bg-rose-500 hover:text-black text-lg"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l h-full px-12 rounded-none bg-black text-white hover:bg-rose-500 hover:text-black text-lg"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
