'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { websites } from "@/lib/data";


const HeroSlideShow = () => {

  return (
    <section>
      <Carousel plugins={[Autoplay({
        delay: 2000,
      })]}>
        <CarouselContent>
          {
            websites.map((website, i) => (
              <CarouselItem key={i}><Image src={website.image} className="w-full max-h-[800px]" width={undefined} height={500} alt="nextjs-dashboard" /><div className="absolute bottom-2 flex w-full justify-between px-2"><Link href={website.link}><Button size={"sm"}>Details</Button></Link><Link href={website.href} target="_blank"><Button size={"sm"}>Visit</Button></Link></div></CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="bg-black text-white" />
        <CarouselNext className="bg-black text-white" />
      </Carousel>
    </section>
  )
};

export default HeroSlideShow;