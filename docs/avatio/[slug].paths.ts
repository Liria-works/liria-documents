import { createClient } from "@supabase/supabase-js";
import { loadEnv } from "vitepress";

const env = loadEnv(".env", process.cwd());

export const supabase = createClient(
    env.VITE_SUPABASE_URL,
    env.VITE_SUPABASE_KEY
);

export default {
    async paths() {
        const { data, error } = await supabase
            .from("articles")
            .select("slug, category, title, created_at, updated_at, content")
            .eq("published", true)
            .eq("category", "permanent")
            .order("created_at", { ascending: true });

        if (error) {
            console.error(error);
            return [];
        }
        return data.map((article) => {
            return {
                params: { slug: article.slug, title: article.title },
                content: article.content,
            };
        });
    },
};
