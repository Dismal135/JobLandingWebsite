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
        <nav className="flex justify-between p-4 fixed top-0 w-full z-50 bg-white">
        <h1 className="font-bold">Show Case</h1>
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