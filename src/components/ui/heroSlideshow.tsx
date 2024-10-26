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
import dashbaord from '@/app/images/dashboard.png';
import magazine from '@/app/images/ffcMagazine.png';


const HeroSlideShow = () => {
    const images = [dashbaord, magazine];

    return (
        <section>
        <Carousel plugins={[Autoplay({
          delay: 2000,
        })]}>
          <CarouselContent>
            {
              images.map((image, i)=>(
                <CarouselItem key={i}><Image src={image} width={500} height={500} alt="nextjs-dashboard" /></CarouselItem>
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