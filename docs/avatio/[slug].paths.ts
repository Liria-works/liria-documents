// import { createClient } from "@supabase/supabase-js";
import { loadEnv } from "vitepress";
import { getLiriaGraphics } from "../.vitepress/lib/microcms";

const env = loadEnv(".env", process.cwd());

// export const supabase = createClient(
//     env.VITE_SUPABASE_URL,
//     env.VITE_SUPABASE_KEY
// );

export default {
    async paths() {
        const { contents } = await getLiriaGraphics();

        return contents.map((article) => {
            return {
                params: { slug: article.slug, title: article.title },
                content: article.content,
            };
        });
    },
};
