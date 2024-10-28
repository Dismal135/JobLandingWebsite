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
    <section className="mt-10">
      <Carousel plugins={[Autoplay({
        delay: 2000,
      })]}>
        <CarouselContent>
          {
            websites.map((website, i) => (
              <CarouselItem key={i}><Image src={website.image} width={500} height={500} alt="nextjs-dashboard" /><div className="absolute bottom-2 ml-3 flex gap-4"><Link href={website.link}><Button size={"sm"}>Details</Button></Link><Link href={website.href} target="_blank"><Button size={"sm"}>Visit</Button></Link></div></CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
};

export default HeroSlideShow;