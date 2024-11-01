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
          <Image className='h-[100px] w-[160px]' src={nextjs} width={undefined} height={undefined} alt="icon" />
          <Image className='h-[100px] w-[302px]' src={react} width={undefined} height={undefined} alt="icon" />
          <Image className='h-[100px] w-[252px]' src={shadcn} width={undefined} height={undefined} alt="icon" />
          <Image className='h-[100px] w-[148px]' src={ffc} width={undefined} height={undefined} alt="icon" />
          <Image className='h-[100px] w-[100px]' src={w3schools} width={undefined} height={undefined} alt="icon" />
          <Image className='lg:hidden h-[100px] w-[160px]' src={nextjs} width={undefined} height={undefined} alt="icon" />
          <Image className='lg:hidden h-[100px] w-[302px]' src={react} width={undefined} height={undefined} alt="icon" />
          <Image className='lg:hidden h-[100px] w-[252px]' src={shadcn} width={undefined} height={undefined} alt="icon" />
          <Image className='lg:hidden h-[100px] w-[148px]' src={ffc} width={undefined} height={undefined} alt="icon" />
          <Image className='lg:hidden h-[100px] w-[100px]' src={w3schools} width={undefined} height={undefined} alt="icon" />
          </div>
        </section>
    )
};

export default MarqueeIcons;