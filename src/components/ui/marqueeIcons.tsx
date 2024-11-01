import nextjs from '@/app/images/nextjsicon.png';
import react from '@/app/images/reacticon.png';
import shadcn from '@/app/images/image-72 (1).png';
import ffc from '@/app/images/ffcicon.png';
import w3schools from "@/app/images/w3schoolsicon.jpg";
import Image from "next/image";

const MarqueeIcons = () => {
    return (
        <section className='overflow-hidden'>
          <div className='flex gap-4 marquee lg:animate-none lg:mx-auto w-[1043px]'>
          <Image src={nextjs} width={160} height={100} alt="icon" />
          <Image src={react} width={302} height={100} alt="icon" />
          <Image src={shadcn} width={252} height={100} alt="icon" />
          <Image src={ffc} width={148} height={100} alt="icon" />
          <Image src={w3schools} width={100} height={100} alt="icon" />
          <Image className='lg:hidden' src={nextjs} width={160} height={100} alt="icon" />
          <Image className='lg:hidden' src={react} width={302} height={100} alt="icon" />
          <Image className='lg:hidden' src={shadcn} width={252} height={100} alt="icon" />
          <Image className='lg:hidden' src={ffc} width={148} height={100} alt="icon" />
          <Image className='lg:hidden' src={w3schools} width={100} height={100} alt="icon" />
          </div>
        </section>
    )
};

export default MarqueeIcons;