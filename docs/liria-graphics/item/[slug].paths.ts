import { getLiriaGraphics } from "../../.vitepress/lib/microcms";

export default {
    async paths() {
        const { contents } = await getLiriaGraphics();

        const paths: { params: { slug: string; title: string }; data: any }[] =
            contents.map((content) => {
                return {
                    params: { slug: content.id, title: content.title.ja },
                    data: content.booth,
                };
            });

        return paths;
    },
};
