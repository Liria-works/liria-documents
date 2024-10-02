import { defineConfig } from "vitepress";
import { getLiriaGraphics } from "./lib/microcms";

const { contents } = await getLiriaGraphics();
const contentsLiriaGraphics = contents.map((content) => {
    return {
        text: content.title.ja,
        link: `/liria-graphics/item/${content.id}`,
    };
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "ja-JP",
    cleanUrls: true,

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
        [
            "meta",
            {
                property: "twitter:card",
                content: "summary",
            },
        ],
        [
            "meta",
            {
                property: "twitter:site",
                content: "@Liria_work",
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
                    items: contentsLiriaGraphics,
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
                    items: contentsLiriaGraphics,
                },
            ],
        },

        socialLinks: [
            {
                icon: {
                    svg: '<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.576894,0,0,0.576894,-39.3695,-27.0018)"><path d="M716.083,529.14L518.595,331.652L392.053,458.194L590.612,656.754L321.329,926.037L573.748,926.703L843.697,656.754L843.308,656.365L955.756,543.917L828.531,416.692L716.083,529.14ZM321.329,457.237L435.92,342.646L309.378,216.104L68.244,457.237L389.999,778.992L516.541,652.45L321.329,457.237ZM597.679,181.645L470.454,54.42L343.268,181.606L470.493,308.831L597.679,181.645Z"/></g></svg>',
                },
                link: "https://liria.work",
            },
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
