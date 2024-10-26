import { websitesDetails } from "./data"

export const getWebsiteById = (id: string) => {
    return websitesDetails.find((website) => website.id === id);
};

console.log(getWebsiteById)