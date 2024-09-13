import { loadEnv, defineConfig } from "vitepress";
import { createClient } from "@supabase/supabase-js";

const env = loadEnv(".env", process.cwd());
export const supabase = createClient(
    env.VITE_SUPABASE_URL,
    env.VITE_SUPABASE_KEY
);

async function getArticlesAvatio() {
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
            text: article.title,
            link: `/avatio/${article.slug}`,
        };
    });
}

const articlesAvatio = await getArticlesAvatio();

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "ja-JP",

    title: "Liria Documents",
    description: "Documents of Liria products",

    head: [
        ["link", { rel: "icon", href: "/favicon.svg" }],
        [
            "meta",
            {
                property: "og:url",
                content: "https://documents.liria.works",
            },
        ],
        [
            "meta",
            {
                property: "og:title",
                content: "Home",
            },
        ],
        [
            "meta",
            {
                property: "og:description",
                content: "Documents of Liria products",
            },
        ],
        [
            "meta",
            {
                property: "og:site_name",
                content: "Liria Documents",
            },
        ],
        [
            "meta",
            {
                property: "og:image",
                content: "/logo_liria_documents.png",
            },
        ],
    ],

    themeConfig: {
        siteTitle: "Liria",
        logo: { light: "/logo_liria_black.svg", dark: "/logo_liria_white.svg" },

        nav: [
            { text: "Liria Graphics", link: "/liria-graphics" },
            { text: "Avatio", link: "/avatio" },
        ],

        sidebar: {
            "/liria-graphics": [
                {
                    text: "アイテム",
                    items: [
                        {
                            text: "キーホルダー",
                            link: "/liria-graphics/keyholder",
                        },
                        {
                            text: "結晶化した角",
                            link: "/liria-graphics/crystal-horn",
                        },
                        {
                            text: "架空ロゴパック",
                            link: "/liria-graphics/logo-pack",
                        },
                        {
                            text: "チャームチョーカー",
                            link: "/liria-graphics/charm-choker",
                        },
                    ],
                },
                {
                    text: "ライセンス",
                    link: "/liria-graphics/license",
                },
                {
                    text: "外部リンク",
                    items: [
                        {
                            text: "BOOTH",
                            link: "https://eicosapenta.booth.pm",
                        },
                        {
                            text: "GitHub リポジトリ",
                            link: "https://github.com/Liria-works/liria-graphics",
                        },
                    ],
                },
            ],
            "/avatio": [
                {
                    text: "Avatio",
                    items: articlesAvatio,
                },
            ],
        },

        socialLinks: [
            {
                icon: {
                    svg: '<svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style=" fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2; "class="size-6"><g transform="matrix(0.1,0,0,0.1,-19.2,-19.2)"><path d="M773.828,389.068L773.828,438.341L832,489.487L832,611.427L773.828,611.427L773.828,832L717.139,832L717.139,790.983C717.139,690.28 629.722,608.612 521.875,608.536L521.707,608.536C521.445,608.536 521.198,608.563 520.963,608.563C455.026,608.963 401.695,658.964 401.695,720.644L401.683,831.946L324.033,832L324.033,586.141L286.004,586.141C266.227,586.141 250.172,570.098 250.172,550.306L250.172,327.26L192,327.26L192,250.007L250.172,250.007L250.172,227.833L326.272,227.833L326.272,478.653L438.138,214.382L475.077,214.446L541.093,353.238L608.227,192L650.744,192L773.828,389.068Z"></path></g></svg>',
                },
                link: "https://eicosapenta.booth.pm",
            },
            { icon: "twitter", link: "https://twitter.com/Liria_work" },
            { icon: "github", link: "https://github.com/Liria-works" },
        ],

        editLink: {
            pattern:
                "https://github.com/Liria-works/liria-graphics-docs/issues",
            text: "GitHubで修正を提案",
        },

        search: {
            provider: "local",
        },
    },
});
