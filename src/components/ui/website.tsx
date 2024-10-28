import Image from "next/image";
import Link from "next/link";
import { websites } from '@/lib/data'
import { Button } from "./button";

const Websites = () => {

    return (
        <section className="flex flex-col gap-12">
            {
                websites.map((website) => (
                    <div key={website.name} className="flex flex-col gap-4 box-shadow p-4">
                        <Image src={website.image} width={500} height={500} alt="nextjs-dashboard" />
                        <Image className="mx-auto" src={website.icon} width={50} height={50} alt="nextjs-dashboard-icon" />
                        <div>
                        <h1>{website.name}</h1>
                        <article>{website.article}</article>
                        </div>
                        <div className="space-x-4">
                            <Link href={website.link}><Button size={"sm"} className="rounded-none h-8">Details</Button></Link>
                            <a href={website.href}><Button size={"sm"} className="rounded-none h-8">Visit</Button></a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
};

export default Websites;