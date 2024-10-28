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
        <nav className="flex justify-between fixed top-0 z-50 w-full bg-white px-1 py-2">
          <h1 className="font-bold">Landing Page</h1>
        <DropdownMenu>
  <DropdownMenuTrigger className="font-bold">Menu</DropdownMenuTrigger>
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
    )
};

export default Navbar;