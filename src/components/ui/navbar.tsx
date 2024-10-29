import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";

const Navbar = () => {
    return (
      <div className="flex relative justify-center">
        <nav className="flex justify-between fixed top-0 z-50 w-full max-w-[1200px] mt-4 px-2">
          <h1 className="font-bold bg-black text-white p-2 rounded-sm"><Link href="/">Landing Page</Link></h1>
        <DropdownMenu>
  <DropdownMenuTrigger className="font-bold bg-black text-white p-2 rounded-sm">Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel><Link href="/">Home</Link></DropdownMenuLabel>
    <DropdownMenuLabel>Websites</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href="/nextjsdashboard">Nextjs Dashboard</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href='/ffcmagazine'>FreeCodeCamp Magazine</Link></DropdownMenuItem>
    <DropdownMenuLabel>Social Media</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>FaceBook</DropdownMenuItem>
    <DropdownMenuItem>Github</DropdownMenuItem>
    <DropdownMenuItem>FreeCodeCamp</DropdownMenuItem>
    <DropdownMenuItem>Discord</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </nav>
      </div>
    )
};

export default Navbar;