import { loadEnv } from "vitepress";
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const env = loadEnv(".env", process.cwd());

const client = createClient({
    serviceDomain: env.VITE_MICROCMS_SERVICE_DOMAIN,
    apiKey: env.VITE_MICROCMS_API_KEY,
});

export type liriaGraphics = {
    contents: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: { ja: string; en: string };
        thumbnail: { url: string; width: number; height: number };
        booth: number;
        price: number;
        notForSale: boolean;
    }[];
};

export const getLiriaGraphics = async (queries?: MicroCMSQueries) => {
    return await client.get<liriaGraphics>({
        endpoint: "liria-graphics",
        queries,
    });
};
