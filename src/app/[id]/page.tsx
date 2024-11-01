import Image from "next/image";
import { getWebsiteById } from "@/lib/action";
import { Button } from "@/components/ui/button";

type Params = Promise<{ id: string }>;

const WebsiteDetail = async ({params}: {params: Params}) => {
    const {id} = await params;
    const website = getWebsiteById(id);

    if(!website) {
        return <h1>
            404 | This page could not be found
        </h1>
    }

    return (
        <div className="p-8 flex items-center justify-center h-[100vh]">
        <div className="box-shadow md:flex md:items-center p-8 gap-10">
        <Image src={website?.image} width={500} height={500} alt="nextjs-dashboard" />
        <div>
        <Image src={website?.icon} width={50} height={50} alt="nextjs-dashboard-icon" />
        <div>
        <h1 className="font-bold">{website?.name}</h1>
        <h1 className="font-bold">Type: <span className="font-normal">{website?.type}</span></h1>
        <h1 className="font-bold">Description: <span className="font-normal">{website?.description}</span></h1>
        <h1 className="font-bold">Usage: <span className="font-normal">{website?.usage}</span></h1>
        <h1 className="font-bold">Technologies: <span className="font-normal">{website?.technologies}</span></h1>
        <a target="_blank" href={website.href}><Button size={"sm"}>Visit</Button></a>
        </div>
        </div>
        </div>
        </div>
    )
};

export default WebsiteDetail;