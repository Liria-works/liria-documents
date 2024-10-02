import { getLiriaGraphics } from "../.vitepress/lib/microcms";

export default {
    async paths() {
        const { contents } = await getLiriaGraphics();

        return contents.map((content) => {
            return {
                params: { slug: content.id, title: content.title.ja },
            };
        });
    },
};
