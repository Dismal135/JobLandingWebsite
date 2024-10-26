import Image from "next/image";
import { getWebsiteById } from "@/lib/action";

 type params = {
    id: string
}

const WebsiteDetail = async ({params}: {params: params}) => {
    const {id} = await params;
    const website = getWebsiteById(id);

    if(!website) {
        return <h1>
            404 | This page could not be found
        </h1>
    }

    return (
        <div>
        <Image src={website?.image} width={500} height={500} alt="nextjs-dashboard" />
        <Image src={website?.icon} width={50} height={50} alt="nextjs-dashboard-icon" />
        <h1>{website?.name}</h1>
        <h1>Type: <span>{website?.type}</span></h1>
        <h1>Description: <span>{website?.description}</span></h1>
        <h1>Usage: <span>{website?.usage}</span></h1>
        <h1>Technologies: <span>{website?.technologies}</span></h1>
        </div>
    )
};

export default WebsiteDetail;