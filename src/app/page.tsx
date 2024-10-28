import HeroSlideShow from "@/components/ui/heroSlideshow";
import Websites from "@/components/ui/website";
import nextjs from '@/app/images/nextjsicon.png';
import react from '@/app/images/reacticon.png';
import shadcn from '@/app/images/image-72 (1).png';
import ffc from '@/app/images/ffcicon.png';
import w3schools from "@/app/images/w3schoolsicon.jpg";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <>
      <nav className="flex justify-between">
        <h1>Websites</h1>
        <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
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
      <HeroSlideShow />
      <main>
        <Websites />
        <section className="overflow-hidden">
          <div className="marquee flex gap-12 w-[1077px]">
          <Image src={nextjs} width={undefined} height={100} alt="icon" />
          <Image src={react} width={undefined} height={100} alt="icon" />
          <Image src={shadcn} width={undefined} height={100} alt="icon" />
          <Image src={ffc} width={undefined} height={100} alt="icon" />
          <Image src={w3schools} width={undefined} height={100} alt="icon" />
          <Image src={nextjs} width={undefined} height={100} alt="icon" />
          <Image src={react} width={undefined} height={100} alt="icon" />
          <Image src={shadcn} width={undefined} height={100} alt="icon" />
          <Image src={ffc} width={undefined} height={100} alt="icon" />
          <Image src={w3schools} width={undefined} height={100} alt="icon" />
          </div>
        </section>
      </main>
      <footer>
        <div className="flex">
      <FaFacebookSquare />
      <FaGithub />
      <FaFreeCodeCamp />
      <FaDiscord />
      </div>
      <h1 className="text-xl font-bold">Contact📜📜📜</h1>
          <p><strong>Address:</strong> 🏠 Yangon, Thaketa, HtuParYone front 5th street, No.1268.</p>
          <p><strong>Tel:</strong> 📞 09758454815</p>
          <p><strong>Email:</strong> 📧 phyothiha97531@gmail.com</p>
          <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.25470811304!2d96.20504882578764!3d16.801101093446796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed31abb2bf23%3A0x8592dd9fc146f74e!2z4YCA4YC74YCx4YCs4YCE4YC64YC44YCA4YC94YCx4YC34YCZ4YC-4YCQ4YC64YCQ4YCt4YCv4YCE4YC6!5e0!3m2!1sen!2smm!4v1730093936648!5m2!1sen!2smm"  loading="lazy" referrerPolicy="no-referrer"></iframe>
      </footer>
    </>
  );
}
