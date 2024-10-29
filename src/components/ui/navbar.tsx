import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
      <div className="flex relative justify-center">
        <nav className="flex justify-between fixed top-0 z-50 w-full max-w-[1200px] mt-4 px-2">
          <h1 className="font-bold bg-black text-white p-2 rounded-sm">Landing Page</h1>
        <DropdownMenu>
  <DropdownMenuTrigger className="font-bold bg-black text-white p-2 rounded-sm">Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Home</DropdownMenuLabel>
    <DropdownMenuLabel>Websites</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Nextjs Dashboard</DropdownMenuItem>
    <DropdownMenuItem>FreeCodeCamp Magazine</DropdownMenuItem>
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