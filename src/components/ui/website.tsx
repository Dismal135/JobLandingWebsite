import Image from "next/image";
import Link from "next/link";
import { websites } from '@/lib/data'


const Websites = () => {

    return (
        <>
            {
                websites.map((website) => (
                    <section key={website.name}>
                        <Image src={website.image} width={500} height={500} alt="nextjs-dashboard" />
                        <Image src={website.icon} width={50} height={50} alt="nextjs-dashboard-icon" />
                        <h1>{website.name}</h1>
                        <article>{website.article}</article>
                        <Link href={website.link}>Details</Link>
                        <a href={website.href}>Visit</a>
                    </section>
                ))
            }
        </>
    )
};

export default Websites;