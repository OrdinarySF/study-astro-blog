import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Astro 学习 | 博客',
        description: '我的学习 Astro 之路',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>zh-cn</language>`,
    });
}
