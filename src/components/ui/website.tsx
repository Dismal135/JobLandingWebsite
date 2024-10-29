import Image from "next/image";
import Link from "next/link";
import { websites } from '@/lib/data'
import { Button } from "./button";

const Websites = () => {

    return (
        <section className="p-8 space-y-8">
            {
                websites.map((website) => (
                    <div key={website.name} className="box-shadow mx-auto p-4 space-y-1 w-fit md:flex md:items-center md:gap-8">
                        <Image src={website.image} width={500} height={500} alt="nextjs-dashboard" />
                        <div>
                        <Image src={website.icon} width={50} height={50} alt="nextjs-dashboard-icon" />
                        <div>
                        <h1 className="font-bold">{website.name}</h1>
                        <article className="w-full max-w-[500px]">{website.article}</article>
                        </div>
                        <div className="space-x-2">
                            <Link href={website.link}><Button size={"sm"}>Details</Button></Link>
                            <a target="_blank" href={website.href}><Button size={"sm"}>Visit</Button></a>
                        </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
};

export default Websites;