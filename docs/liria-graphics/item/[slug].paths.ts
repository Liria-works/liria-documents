import { getLiriaGraphics } from "../../.vitepress/lib/microcms";

export default {
    async paths() {
        const { contents } = await getLiriaGraphics();

        const paths: { params: { slug: string; title: string; data: any } }[] =
            contents.map((content) => {
                return {
                    params: {
                        slug: content.id,
                        title: content.title.ja,
                        data: {
                            description: content.description,
                            contents: content.contents,
                            details: content.details,
                            packages: content.packages,
                            usage: content.usage,
                            booth: content.booth,
                            notForSale: content.notForSale,
                        },
                    },
                };
            });

        return paths;
    },
};
